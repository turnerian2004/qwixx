import React from "react";

import { IPlayerBoardButtonObject } from "../../initialize/playerBoardButtons";
import { determineComponentColour } from "./identifycolour";
import { UserInputActions } from "../../emuns";

import "./PlayerBoardButton.css";
import "../../App.css";

export interface IPlayerBoardButtonAction {
  type: UserInputActions.SelectBoardButton;
  payload: IPlayerBoardButtonObject;
}

export interface IPlayerBoardButton {
  playerBoardButton: IPlayerBoardButtonObject;
  dispatch: React.Dispatch<IPlayerBoardButtonAction>;
}

export default function PlayerBoardButton({
  dispatch,
  playerBoardButton,
}: IPlayerBoardButton) {
  const buttonColour = determineComponentColour(playerBoardButton.colour);
  const isCrossedOff = playerBoardButton.isCrossedOff ? "CrossOffButton" : "";
  const buttonOuterCSS = `centreAll ${buttonColour}PlayerBoardButtonOuterContainer playerBoardButtonOuterContainer`;
  const buttonInnerCSS = `centreAll ${buttonColour}PlayerBoardButtonInnerContainer playerBoardButtonInnerContainer       
  ${isCrossedOff}`;

  return (
    <div className={buttonOuterCSS}>
      <div
        className={buttonInnerCSS}
        onClick={() =>
          dispatch({
            type: UserInputActions.SelectBoardButton,
            payload: playerBoardButton,
          })
        }
      >
        {playerBoardButton.buttonNumber}
      </div>
    </div>
  );
}
