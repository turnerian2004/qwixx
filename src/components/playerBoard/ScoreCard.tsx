import { IScoreCardObject } from "../../initialize/scoreCards";

import "./ScoreCard.css";
import "../../App.css";

interface IScoreCard {
  scoreCard: IScoreCardObject;
}

export default function ScoreCard({ scoreCard }: IScoreCard) {
  const numberButtonsSelected = scoreCard.numberButtonsSelected;
  const pointsEarned = scoreCard.pointsEarned;

  return (
    <div className="centreAll scoreCard">
      <div className="scoreCard-topHalfContainer centreAll">
        {numberButtonsSelected}x
      </div>
      <div>{pointsEarned}</div>
    </div>
  );
}
