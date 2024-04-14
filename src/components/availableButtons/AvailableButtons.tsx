import { IDiceObject } from "../commandCentre/RollDiceButton";
import { DiceColoursNumber, AvailableButtonNumber } from "../../emuns";
import AvailableButton, { IAvailableButton } from "./AvailableButton";
import "./AvailableButtons.css";

export function generateAvailableButtons(
  dieRolls: IDiceObject[],
  playerID: number,
  whoRolledDice: number
): IAvailableButton[] {
  const public1Digit = dieRolls[DiceColoursNumber.Public1].digit;
  const public2Digit = dieRolls[DiceColoursNumber.Public2].digit;
  let availableButtons: IAvailableButton[] = [];

  let colourDie: IDiceObject[] = [...dieRolls];
  colourDie.splice(DiceColoursNumber.Public1, 1);
  colourDie.splice(DiceColoursNumber.Public2 - 1, 1);

  let availableButton: IAvailableButton = {
    colour: AvailableButtonNumber.Public,
    digit: public1Digit + public2Digit,
    playerID: playerID,
    whoRolledDice: whoRolledDice,
  };
  availableButtons.push(availableButton);

  for (let i = 0; i < colourDie.length; i++) {
    const colourDice = colourDie[i];
    let colourAvailableButton1 = { ...availableButton };
    let colourAvailableButton2 = { ...availableButton };

    colourAvailableButton1.digit =
      colourDice.digit === -1 ? -1 : colourDice.digit + public1Digit;
    colourAvailableButton2.digit =
      colourDice.digit === -1 ? -1 : colourDice.digit + public2Digit;

    // colourAvailableButton1.digit = colourDice.digit + public1Digit;
    // colourAvailableButton2.digit = colourDice.digit + public2Digit;

    colourAvailableButton1.colour = colourDice.colour;
    colourAvailableButton2.colour = colourDice.colour;

    availableButtons.push(colourAvailableButton1);
    availableButtons.push(colourAvailableButton2);
  }

  return availableButtons;
}

interface IAvailableButtons {
  availableButtons: IAvailableButton[];
  whoRolledDice: number;
  playerID: number;
}

export default function AvailableButtons({
  availableButtons,
  whoRolledDice,
  playerID,
}: IAvailableButtons) {
  return (
    <div className="availableButtons">
      {availableButtons.map((availableButton, index) => (
        <AvailableButton
          key={index}
          colour={availableButton.colour}
          digit={availableButton.digit}
          whoRolledDice={whoRolledDice}
          playerID={playerID}
        ></AvailableButton>
      ))}
    </div>
  );
}
