import { useReducer } from "react";
import { initialState, IState } from "./initialize/state";
import { IPlayerBoardButtonObject } from "./initialize/playerBoardButtons";
import { PlayerID, UserInputActions } from "./emuns";
import {
  IRollDiceButtonAction,
  rollDie,
} from "./components/commandCentre/RollDiceButton";
import { IPlayerBoardButtonAction } from "./components/playerBoard/PlayerBoardButton";
import { ILock } from "./initialize/locks";
import { determineButtonIndex } from "./gameRules/buttonIndex";
import { isAvailableNumber } from "./gameRules/isAvailableNumber";
import { isValidRightMostButtonPick } from "./gameRules/isValidRightMostButtonPick";
import { isValidLeft11ButtonPick } from "./gameRules/isValidLeft11ButtonPick";
import {
  isPublicNumber,
  updateAvailableNumbers,
} from "./gameRules/isPublicNumber";
import { IDiceObject } from "./components/commandCentre/RollDiceButton";
import { IAvailableButton } from "./components/availableButtons/AvailableButton";

import PlayerBoard from "./components/playerBoard/PlayerBoard";
import RollDiceButton from "./components/commandCentre/RollDiceButton";
import Die from "./components/die/Die";
import AvailableButtons, {
  generateAvailableButtons,
} from "./components/availableButtons/AvailableButtons";
import ExplanationBox from "./components/explanationBox/ExplanationBox";
import WhoRolledDice from "./components/commandCentre/WhoRolledDice";
import WhosTurn from "./components/commandCentre/WhoseTurn";
import IsPlayerDone, {
  IIsPlayerDoneAction,
} from "./components/commandCentre/IsPlayerDone";

import "./App.css";
import "./components/commandCentre/commandCentre.css";
import "./components/die/Die.css";

function reducer(
  state: IState,
  action: IRollDiceButtonAction | IPlayerBoardButtonAction | IIsPlayerDoneAction
): IState {
  switch (action.type) {
    case UserInputActions.RollDice:
      if (state.isGameOver === true) return state;
      if (
        state.isPlayerDone[state.whoseTurn] === false &&
        state.buttonSelectionCounter === 0
      )
        return state;

      const newDiceRoller =
        state.whoRolledDice === PlayerID.One ? PlayerID.Two : PlayerID.One;
      const newDieRolls: IDiceObject[] = rollDie();
      const newPlayer1AvailableButtons = generateAvailableButtons(
        newDieRolls,
        PlayerID.One,
        state.whoRolledDice
      );
      const newPlayer2AvailableButtons = generateAvailableButtons(
        newDieRolls,
        PlayerID.Two,
        state.whoRolledDice
      );

      const updateWhoseTurn: number =
        state.whoRolledDice === PlayerID.One ? PlayerID.Two : PlayerID.One;

      return {
        ...state,
        whoseTurn: updateWhoseTurn,
        whoRolledDice: newDiceRoller,
        buttonSelectionCounter: 0,
        dieRolls: newDieRolls,
        availableButtons: [
          newPlayer1AvailableButtons,
          newPlayer2AvailableButtons,
        ],
        // both players reset after dice roll
        isPlayerDone: [false, false],
      };

    case UserInputActions.DoneButton:
      const isDoneButtonPlayerID = action.payload.playerID;

      // disable game features
      if (state.isGameOver === true) return state;
      if (state.isPlayerDone[state.whoseTurn] === true) return state;
      if (state.whoseTurn !== isDoneButtonPlayerID) return state;

      let isGameOver: boolean = false;
      let currentPlayersPenalities: boolean[][] = state.playersPenalities;
      if (
        state.buttonSelectionCounter === 0 &&
        state.whoRolledDice === isDoneButtonPlayerID
      ) {
        // if necessary, update player penalties & game status
        let currentNumberPenalities: number =
          currentPlayersPenalities[state.whoseTurn].filter(Boolean).length;
        currentPlayersPenalities[state.whoseTurn][currentNumberPenalities] =
          true;
        currentNumberPenalities =
          currentPlayersPenalities[state.whoseTurn].filter(Boolean).length;

        isGameOver = currentNumberPenalities > 3 ? true : false;
      }

      let newPlayerAvailableButtons = state.availableButtons[state.whoseTurn];
      newPlayerAvailableButtons.forEach(
        (availableButton) => (availableButton.digit = -1)
      );
      let newPlayersAvailableButtons = state.availableButtons;
      newPlayersAvailableButtons[state.whoseTurn] = newPlayerAvailableButtons;

      let updatedIsPlayerDone = state.isPlayerDone;
      updatedIsPlayerDone[state.whoseTurn] = true;

      let newWhoseTurn = state.whoseTurn;
      if (state.whoseTurn === state.whoRolledDice) {
        newWhoseTurn =
          state.whoseTurn === PlayerID.One ? PlayerID.Two : PlayerID.One;
      }

      return {
        ...state,
        playersPenalities: currentPlayersPenalities,
        isGameOver: isGameOver,
        isPlayerDone: updatedIsPlayerDone,
        whoseTurn: newWhoseTurn,
        buttonSelectionCounter: 0,
        availableButtons: newPlayersAvailableButtons,
      };

    case UserInputActions.SelectBoardButton:
      const boardButton: IPlayerBoardButtonObject = action.payload;
      const numButtonSelectionsAllowed: number =
        state.whoRolledDice === boardButton.playerID ? 2 : 1;
      const isValidDiceGeneratedOption: boolean = isAvailableNumber(
        state.availableButtons[boardButton.playerID],
        boardButton
      );
      const isValidLeft11Selection: boolean = isValidLeft11ButtonPick(
        state.playerBoardButtons[boardButton.playerID][boardButton.colour],
        boardButton
      );
      const isValidRightMostSelection: boolean = isValidRightMostButtonPick(
        state.playerBoardButtons[boardButton.playerID][boardButton.colour],
        boardButton
      );
      const didUserSelectPublicNumber: boolean = isPublicNumber(
        boardButton,
        state.availableButtons[boardButton.playerID]
      );

      if (state.isPlayerDone[boardButton.playerID]) return state;
      if (state.isGameOver === true) return state;
      if (state.playerLocks[boardButton.colour].isLocked === true) return state;
      if (state.whoseTurn !== boardButton.playerID) return state;
      if (state.buttonSelectionCounter >= numButtonSelectionsAllowed)
        return state;
      if (isValidDiceGeneratedOption === false) return state;
      if ((isValidLeft11Selection || isValidRightMostSelection) === false)
        return state;

      const updatedPlayerAvailableButtons: IAvailableButton[] =
        updateAvailableNumbers(
          state.availableButtons[boardButton.playerID],
          didUserSelectPublicNumber
        );
      let updatedAvailableButtons = state.availableButtons;
      updatedAvailableButtons[state.whoseTurn] = updatedPlayerAvailableButtons;

      const buttonIndex: number = determineButtonIndex(boardButton);
      let updatedPlayerBoardButtons: IPlayerBoardButtonObject[][][] =
        state.playerBoardButtons;
      updatedPlayerBoardButtons[boardButton.playerID][boardButton.colour][
        buttonIndex
      ].isCrossedOff = true;

      let updatedPlayerLocks: ILock[] = state.playerLocks;
      let updatedIsGameOver: boolean = state.isGameOver;

      if (isValidRightMostSelection === true) {
        // lock the row
        updatedPlayerLocks[boardButton.colour].isLocked = true;
        const numberRowsLocked = state.playerLocks.reduce(function (
          n,
          lock
        ): number {
          return n + +(lock.isLocked === true);
        },
        0);
        // 2 rows have been locked
        if (numberRowsLocked > 1) updatedIsGameOver = true;
      }

      let newButtonSelectionCounter = state.buttonSelectionCounter + 1;
      let updatedWhoseTurn: number = state.whoseTurn;
      let newIsPlayerDone = state.isPlayerDone;

      if (
        newButtonSelectionCounter === 2 &&
        state.whoRolledDice === state.whoseTurn
      ) {
        updatedWhoseTurn =
          state.whoseTurn === PlayerID.One ? PlayerID.Two : PlayerID.One;
        newButtonSelectionCounter = 0;
        newIsPlayerDone[state.whoseTurn] = true;
      }

      if (
        newButtonSelectionCounter === 1 &&
        state.whoRolledDice !== state.whoseTurn
      ) {
        newIsPlayerDone[state.whoseTurn] = true;
        newButtonSelectionCounter = 0;
      }

      return {
        ...state,
        playerBoardButtons: updatedPlayerBoardButtons,
        buttonSelectionCounter: newButtonSelectionCounter,
        playerLocks: updatedPlayerLocks,
        isGameOver: updatedIsGameOver,
        availableButtons: updatedAvailableButtons,
        whoseTurn: updatedWhoseTurn,
        isPlayerDone: newIsPlayerDone,
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state: ");
  console.log(state);

  return (
    <div className="App centreAll">
      <PlayerBoard
        state={state}
        playerID={PlayerID.One}
        dispatch={dispatch}
      ></PlayerBoard>
      <div></div>
      <PlayerBoard
        state={state}
        playerID={PlayerID.Two}
        dispatch={dispatch}
      ></PlayerBoard>
      <div className="availableNumberBar1">
        <AvailableButtons
          availableButtons={state.availableButtons[PlayerID.One]}
          whoRolledDice={state.whoRolledDice}
          playerID={PlayerID.One}
        ></AvailableButtons>
      </div>
      <div className="availableNumberBar2">
        <AvailableButtons
          availableButtons={state.availableButtons[PlayerID.Two]}
          whoRolledDice={state.whoRolledDice}
          playerID={PlayerID.Two}
        ></AvailableButtons>
      </div>
      <div className="dieAndCommandCentre">
        <div>
          <Die die={state.dieRolls}></Die>
        </div>
        <div className="commandCentre centreAll">
          <div className="gameStateDisplay gameStateDisplay-border">
            <WhoRolledDice whoRolledDice={state.whoRolledDice}></WhoRolledDice>
            <WhosTurn whoseTurn={state.whoseTurn}></WhosTurn>
          </div>
          <div className="centreAll nextTurnButtons">
            <IsPlayerDone
              playerID={PlayerID.One}
              isPlayerDone={state.isPlayerDone[PlayerID.One]}
              dispatch={dispatch}
            ></IsPlayerDone>
            <IsPlayerDone
              playerID={PlayerID.Two}
              isPlayerDone={state.isPlayerDone[PlayerID.Two]}
              dispatch={dispatch}
            ></IsPlayerDone>
            <RollDiceButton
              dispatch={dispatch}
              whoRolledDice={state.whoRolledDice}
              whoseTurn={state.whoseTurn}
              playerLocks={state.playerLocks}
            ></RollDiceButton>
          </div>
        </div>
      </div>
      <div></div>
      <ExplanationBox></ExplanationBox>
    </div>
  );
}
