import "./PenaltyScoreBoard.css";
import "./ColourScoreBoard.css";

interface IPenaltyScoreBoard {
  playerPenalties: boolean[];
  isGameOver: boolean;
}

export function minusPoints(playerPenalties: boolean[]) {
  const numPenalties = playerPenalties.filter(
    (playerPenalty) => playerPenalty === true
  );

  const minusPoints: number = numPenalties.length * 5;

  return minusPoints;
}

export default function PenaltyScoreBoard({
  playerPenalties,
  isGameOver,
}: IPenaltyScoreBoard) {
  const totalMinusPoints =
    isGameOver === true ? minusPoints(playerPenalties) : "";

  return (
    <div className={`colourScoreBoard penaltyScoreBoard centreAll`}>
      {totalMinusPoints}
    </div>
  );
}
