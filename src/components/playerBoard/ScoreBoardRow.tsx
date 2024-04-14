import { BoardButtonNumber } from "../../emuns";
import { IPlayerBoardButtonObject } from "../../initialize/playerBoardButtons";

import ColourScoreBoard from "./ColourScoreBoard";
import TotalScoreBoard from "./TotalScoreBoard";
import PenaltyScoreBoard from "./PenaltyScoreBoard";

import "./ScoreBoardRow.css";

interface IScoreBoardRow {
  isGameOver: boolean;
  playerBoard: IPlayerBoardButtonObject[][];
  playerPenalties: boolean[];
}

export default function ScoreBoardRow({
  isGameOver,
  playerBoard,
  playerPenalties,
}: IScoreBoardRow) {
  return (
    <div className="scoreBoardRow centreAll">
      <div className="smallFont">totals</div>
      <ColourScoreBoard
        scoreBoardColour={BoardButtonNumber.Red}
        boardRow={playerBoard[BoardButtonNumber.Red]}
        isGameOver={isGameOver}
      ></ColourScoreBoard>
      <div>&#43;</div>
      <ColourScoreBoard
        scoreBoardColour={BoardButtonNumber.Yellow}
        boardRow={playerBoard[BoardButtonNumber.Yellow]}
        isGameOver={isGameOver}
      ></ColourScoreBoard>
      <div>&#43;</div>
      <ColourScoreBoard
        scoreBoardColour={BoardButtonNumber.Green}
        boardRow={playerBoard[BoardButtonNumber.Green]}
        isGameOver={isGameOver}
      ></ColourScoreBoard>
      <div>&#43;</div>
      <ColourScoreBoard
        scoreBoardColour={BoardButtonNumber.Blue}
        boardRow={playerBoard[BoardButtonNumber.Blue]}
        isGameOver={isGameOver}
      ></ColourScoreBoard>
      <div>&#45;</div>
      <PenaltyScoreBoard
        playerPenalties={playerPenalties}
        isGameOver={isGameOver}
      ></PenaltyScoreBoard>
      <div>&#61;</div>

      <TotalScoreBoard
        playerBoard={playerBoard}
        playerPenalties={playerPenalties}
        isGameOver={isGameOver}
      ></TotalScoreBoard>
    </div>
  );
}

// playerPenalties: boolean[];
//   componentColour: string;
