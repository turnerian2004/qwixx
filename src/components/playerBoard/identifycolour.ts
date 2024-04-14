import { BoardButtonNumber, BoardButtonString } from "../../emuns";

export function determineComponentColour(colour: number) {
  switch (colour) {
    case BoardButtonNumber.Red:
      return BoardButtonString.Red;

    case BoardButtonNumber.Yellow:
      return BoardButtonString.Yellow;

    case BoardButtonNumber.Green:
      return BoardButtonString.Green;

    default:
      return BoardButtonString.Blue;
  }
}
