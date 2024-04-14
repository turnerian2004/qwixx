import { scoreCards } from "../../initialize/scoreCards";

import ScoreCard from "./ScoreCard";
import PenaltyBox from "./PenaltyBox";

import "./ScoreCardRow.css";

interface IScoreBoardRow {
  playerPenalities: boolean[];
}

export default function ScoreCardRow({ playerPenalities }: IScoreBoardRow) {
  return (
    <div className="scoreCardRow">
      <div className="scoreCardExplanationContainer centreAll">
        <PenaltyBox isCrossedOff={true}></PenaltyBox>
        <div className="scoreCardExplanationContainerDivider"></div>
        <div className="scoreCardExplanation">points</div>
      </div>
      {scoreCards.map((scoreCard, index) => (
        <ScoreCard scoreCard={scoreCard} key={index}></ScoreCard>
      ))}
      <div className="penaltyArea">
        <div className="penaltyArea-top">
          <PenaltyBox isCrossedOff={true}></PenaltyBox>
          <div>&#61;</div>
          <div>&#45;5</div>
        </div>
        <div className="penaltyArea-bottom">
          {playerPenalities.map((playerPenality, index) => (
            <PenaltyBox isCrossedOff={playerPenality} key={index}></PenaltyBox>
          ))}
        </div>
      </div>
    </div>
  );
}
