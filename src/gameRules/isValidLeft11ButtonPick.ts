import { IPlayerBoardButtonObject } from "../initialize/playerBoardButtons";
import { BoardButtonNumber } from "../emuns";

export function isValidLeft11ButtonPick(
  playerBoardRow: IPlayerBoardButtonObject[],
  userSelection: IPlayerBoardButtonObject
): boolean {
  let leftMost11Buttons: IPlayerBoardButtonObject[] = [...playerBoardRow];
  leftMost11Buttons.pop();

  const isLeft11Button = leftMost11Buttons.filter(
    (boardButton) => boardButton.buttonNumber === userSelection.buttonNumber
  );

  // the user selected the rightmost button
  if (isLeft11Button.length === 0) return false;

  const alreadyCrossedOffButtons = leftMost11Buttons.filter(
    (button) => button.isCrossedOff === true
  );

  // no buttons have been selected so any of the left 11 are valid
  if (alreadyCrossedOffButtons.length === 0) return true;

  const rightMostSelectedButton =
    alreadyCrossedOffButtons[alreadyCrossedOffButtons.length - 1];

  if (
    userSelection.colour === BoardButtonNumber.Red ||
    userSelection.colour === BoardButtonNumber.Yellow
  ) {
    // these colours start at 2 and ascend to 12
    if (userSelection.buttonNumber <= rightMostSelectedButton.buttonNumber)
      return false;
  }

  if (
    userSelection.colour === BoardButtonNumber.Green ||
    userSelection.colour === BoardButtonNumber.Blue
  ) {
    // these colours start at 12 and descend to 2
    if (userSelection.buttonNumber >= rightMostSelectedButton.buttonNumber)
      return false;
  }

  return true;
}
