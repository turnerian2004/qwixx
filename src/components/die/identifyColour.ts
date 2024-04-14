import { DiceColoursNumber, DiceColoursString } from "./../../emuns";

export function determineComponentColour(colour: number) {
  switch (colour) {
    case DiceColoursNumber.Red:
      return DiceColoursString.Red;

    case DiceColoursNumber.Yellow:
      return DiceColoursString.Yellow;

    case DiceColoursNumber.Green:
      return DiceColoursString.Green;

    case DiceColoursNumber.Blue:
      return DiceColoursString.Blue;

    default:
      return DiceColoursString.Public1;
  }
}
