import "./commandCentre.css";

interface IWhoRolledDice {
  whoRolledDice: number;
}

export default function WhoRolledDice({ whoRolledDice }: IWhoRolledDice) {
  // to access specific data structures, the player 1 has a value of 0
  const playerID = whoRolledDice + 1;

  return (
    <div className="gameStateDisplaySlot centreAll">
      <div className="commandCentreFontSize-title">Who rolled the dice?</div>
      <div className="commandCentreFontSize-display">{playerID}</div>
    </div>
  );
}
