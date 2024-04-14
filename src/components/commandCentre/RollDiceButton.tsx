import React from "react";

import { IAvailableButton } from "../availableButtons/AvailableButton";
import { generateAvailableButtons } from "../availableButtons/AvailableButtons";
import {
  PlayerID,
  UserInputActions,
  DiceColoursNumber,
  BoardButtonNumber,
} from "../../emuns";
import { ILock, playerLocks } from "../../initialize/locks";

import "./RollDiceButton.css";

export interface IRollDiceButtonAction {
  type: UserInputActions.RollDice;
  payload: [IDiceObject[], IAvailableButton[], IAvailableButton[], number];
}

export interface IRollDiceButton {
  dispatch: React.Dispatch<IRollDiceButtonAction>;
  whoseTurn: number;
  whoRolledDice: number;
  playerLocks: ILock[];
}

export interface IDiceObject {
  colour: number;
  digit: number;
}

export function rollDie(): IDiceObject[] {
  // the 6 dice get their new values
  const minimum = 1;
  const maximum = 6;
  let diceRolls: IDiceObject[] = [];

  for (let i = 0; i <= DiceColoursNumber.Blue; i++) {
    let diceRoll: IDiceObject = {
      colour: i,
      digit: Math.floor(Math.random() * (maximum - minimum + 1) + minimum),
    };
    diceRolls.push(diceRoll);
  }

  // a not so nice why to disable a dice whose colour has been locked
  if (playerLocks[BoardButtonNumber.Red].isLocked === true)
    diceRolls[DiceColoursNumber.Red].digit = -1;
  if (playerLocks[BoardButtonNumber.Yellow].isLocked === true)
    diceRolls[DiceColoursNumber.Yellow].digit = -1;
  if (playerLocks[BoardButtonNumber.Green].isLocked === true)
    diceRolls[DiceColoursNumber.Green].digit = -1;
  if (playerLocks[BoardButtonNumber.Blue].isLocked === true)
    diceRolls[DiceColoursNumber.Blue].digit = -1;

  return diceRolls;
}

export default function RollDiceButton({
  dispatch,
  whoRolledDice,
  whoseTurn,
}: IRollDiceButton) {
  const newDiceValue: IDiceObject[] = rollDie();
  const player1NewAvailableNumbers: IAvailableButton[] =
    generateAvailableButtons(newDiceValue, whoseTurn, whoRolledDice);
  const player2NewAvailableNumbers: IAvailableButton[] =
    generateAvailableButtons(newDiceValue, whoseTurn, whoRolledDice);
  const updateWhoRolledDice: number =
    whoRolledDice === PlayerID.One ? PlayerID.Two : PlayerID.One;

  return (
    <div
      className="rollDiceButton centreAll"
      onClick={() =>
        dispatch({
          type: UserInputActions.RollDice,
          payload: [
            newDiceValue,
            player1NewAvailableNumbers,
            player2NewAvailableNumbers,
            updateWhoRolledDice,
          ],
        })
      }
    >
      Roll Dice
    </div>
  );
}
