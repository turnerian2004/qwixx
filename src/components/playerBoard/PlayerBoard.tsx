import { IPlayerBoardButtonAction } from "./PlayerBoardButton";
import { IState } from "../../initialize/state";

import PlayerBoardButton from "./PlayerBoardButton";
import PlayerBoardLock from "./PlayerBoardLock";
import ScoreCardRow from "./ScoreCardRow";
import ScoreBoardRow from "./ScoreBoardRow";
import React from "react";

import "./PlayerBoard.css";

interface IPlayerBoard {
  playerID: number;
  state: IState;
  dispatch: React.Dispatch<IPlayerBoardButtonAction>;
}

export default function PlayerBoard({
  playerID,
  state,
  dispatch,
}: IPlayerBoard) {
  const playerButtonsFlat = state.playerBoardButtons[playerID].flat();
  const playerLocks = state.playerLocks;
  const playerPenalties = state.playersPenalities[playerID];

  return (
    <div className="playerBoard">
      <div className="playerBoard-top">
        <div className="playerBoard-top-buttonGrid">
          {playerButtonsFlat.map((playerButton, index) => (
            <PlayerBoardButton
              playerBoardButton={playerButton}
              key={index}
              dispatch={dispatch}
            ></PlayerBoardButton>
          ))}
        </div>
        <div className="playerBoard-top-lockGrid">
          {playerLocks.map((lock, index) => (
            <PlayerBoardLock lock={lock} key={index}></PlayerBoardLock>
          ))}
        </div>
      </div>
      <ScoreCardRow playerPenalities={playerPenalties}></ScoreCardRow>
      <ScoreBoardRow
        isGameOver={state.isGameOver}
        playerBoard={state.playerBoardButtons[playerID]}
        playerPenalties={state.playersPenalities[playerID]}
      ></ScoreBoardRow>
    </div>
  );
}
