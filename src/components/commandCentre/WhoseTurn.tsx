import "./commandCentre.css";

interface IWhoseTurn {
  whoseTurn: number;
}

export default function WhoseTurn({ whoseTurn }: IWhoseTurn) {
  // to access specific data structures, the player 1 has a value of 0
  const playerID = whoseTurn + 1;

  return (
    <div className="gameStateDisplaySlot centreAll">
      <div className="commandCentreFontSize-title">Whose turn?</div>
      <div className="commandCentreFontSize-display">{playerID}</div>
    </div>
  );
}
