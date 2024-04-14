import { IDiceObject } from "../commandCentre/RollDiceButton";
import { determineComponentColour } from "./identifyColour";

import "./Dice.css";

interface IDice {
  dice: IDiceObject;
}

export default function Dice({ dice }: IDice) {
  const diceNumber = dice.digit === -1 ? "" : dice.digit;
  const diceColour = determineComponentColour(dice.colour);

  return (
    <div className={`centreAll dice ${diceColour}Dice`}>
      <div className="twoSecondDelay" data-testid={`dice-${diceColour}`}>
        {diceNumber}
      </div>
    </div>
  );
}
