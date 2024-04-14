import { DiceColoursNumber } from "../../emuns";
import { determineComponentColour } from "../die/identifyColour";

import "./AvailableButton.css";

export interface IAvailableButton {
  colour: number;
  digit: number;
  playerID: number;
  whoRolledDice: number;
}

export default function AvailableButton({
  colour,
  digit,
  playerID,
  whoRolledDice,
}: IAvailableButton) {
  const availableButtonColour = determineComponentColour(colour);
  let displayDigit = digit.toString();

  if (playerID !== whoRolledDice && colour !== DiceColoursNumber.Public1)
    displayDigit = "";

  if (digit === -1) displayDigit = "";

  return (
    <div
      className={`availableButtonContainer ${availableButtonColour}AvailableButtonContainer centreAll`}
    >
      <div
        className={`${availableButtonColour}AvailableButton availableButton centreAll`}
      >
        {displayDigit}
      </div>
    </div>
  );
}
