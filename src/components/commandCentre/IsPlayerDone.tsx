import React from "react";
import { UserInputActions } from "../../emuns";
import "./IsPlayerDone.css";

export interface IIsPlayerDoneObject {
  playerID: number;
}

export interface IIsPlayerDoneAction {
  type: UserInputActions.DoneButton;
  payload: IIsPlayerDoneObject;
}

interface IIsPlayerDone {
  isPlayerDone: boolean;
  playerID: number;
  dispatch: React.Dispatch<IIsPlayerDoneAction>;
}

export default function IsPlayerDone({
  isPlayerDone,
  playerID,
  dispatch,
}: IIsPlayerDone) {
  const isBoxChecked = isPlayerDone === true ? "checkPlayerIsDoneBox" : "";
  const playerNumber = playerID + 1;

  return (
    <div className="gameStateDisplaySlot centreAll">
      <div className="commandCentreFontSize-title">
        Is player {playerNumber} done?
      </div>
      <div
        className={`isPlayerDoneBox centreAll ${isBoxChecked}`}
        onClick={() =>
          dispatch({
            type: UserInputActions.DoneButton,
            payload: { playerID },
          })
        }
      ></div>
    </div>
  );
}
