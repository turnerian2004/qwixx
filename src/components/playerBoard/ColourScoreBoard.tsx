import { determineComponentColour } from "./identifycolour";
import { IPlayerBoardButtonObject } from "../../initialize/playerBoardButtons";

import "./ColourScoreBoard.css";

interface IColourScoreBoard {
  scoreBoardColour: number;
  boardRow: IPlayerBoardButtonObject[];
  isGameOver: boolean;
}

export function colourScore(numBtnselected: string): string {
  const playerNumBtnSelected: number = Number(numBtnselected);
  let colourScores: number[] = [0];
  const maxNumBtnSelected = 12;

  for (let i = 0; i < maxNumBtnSelected; i++) {
    const numberBtnSelectedScore: number = i + 1 + colourScores[i];
    colourScores.push(numberBtnSelectedScore);
  }

  let colourScore = colourScores[playerNumBtnSelected].toString();

  return colourScore;
}

export function numberButtonsSelected(
  boardRow: IPlayerBoardButtonObject[]
): string {
  const numBtnSelected = boardRow.filter(
    (button) => button.isCrossedOff === true
  );

  return numBtnSelected.length.toString();
}

export default function ColourScoreBoard({
  scoreBoardColour,
  boardRow,
  isGameOver,
}: IColourScoreBoard) {
  const componentColour = determineComponentColour(scoreBoardColour);

  const numButtonsSelected = numberButtonsSelected(boardRow);

  const playerScore: string =
    isGameOver === true ? colourScore(numButtonsSelected) : "";

  return (
    <div className={`colourScoreBoard ${componentColour}ScoreBoard centreAll`}>
      {playerScore}
    </div>
  );
}
