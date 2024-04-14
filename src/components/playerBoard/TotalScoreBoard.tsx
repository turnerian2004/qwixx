import { IPlayerBoardButtonObject } from "../../initialize/playerBoardButtons";
import { colourScore } from "./ColourScoreBoard";
import { minusPoints } from "./PenaltyScoreBoard";

import "./TotalScoreBoard.css";

interface ITotalScoreBoard {
  playerBoard: IPlayerBoardButtonObject[][];
  playerPenalties: boolean[];
  isGameOver: boolean;
}

function calculatePositiveScore(playerBoard: IPlayerBoardButtonObject[][]) {
  const numberColours = 4;
  let playerColourScores: number[] = [];

  for (let i = 0; i < numberColours; i++) {
    const playerBoardRow = playerBoard[i];
    const colourBtnSelected = playerBoardRow.filter(
      (button) => button.isCrossedOff === true
    );

    let numColourbtnSelected = colourBtnSelected.length.toString();
    const playerColourScore: string = colourScore(numColourbtnSelected);
    playerColourScores.push(Number(playerColourScore));
  }

  const playerPositiveScore = playerColourScores.reduce(
    (partialSum, colourScore): number => partialSum + colourScore,
    0
  );

  return playerPositiveScore;
}

export default function TotalScoreBoard({
  playerBoard,
  playerPenalties,
  isGameOver,
}: ITotalScoreBoard) {
  const playerColourScore: number = calculatePositiveScore(playerBoard);
  const playerMinusScore: number = minusPoints(playerPenalties);
  const playerFinalScore: string =
    isGameOver === false
      ? ""
      : (playerColourScore - playerMinusScore).toString();

  return <div className={"totalScoreBoard centreAll"}>{playerFinalScore}</div>;
}
