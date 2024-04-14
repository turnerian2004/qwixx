import { IPlayerBoardButtonObject } from "../initialize/playerBoardButtons";
import { BoardButtonNumber } from "../emuns";

export function isValidRightMostButtonPick(
  playerBoardRow: IPlayerBoardButtonObject[],
  userSelection: IPlayerBoardButtonObject
): boolean {
  let colourRow: IPlayerBoardButtonObject[] = [...playerBoardRow];
  // remove the last column which is a special case
  const leftMost11Buttons: IPlayerBoardButtonObject[] = colourRow.slice(0, -1);

  const numberOfButtonsAlreadySelected: number = leftMost11Buttons.reduce(
    function (n, boardButton) {
      return n + +(boardButton.isCrossedOff === true);
    },
    0
  );

  // 5 buttons must already be crossed off for the rightmost button to be a valid selection
  if (numberOfButtonsAlreadySelected < 5) return false;

  //  the 1st 2 rows have a different rightmost number than the bottom 2 rows

  if (
    userSelection.colour === BoardButtonNumber.Red ||
    userSelection.colour === BoardButtonNumber.Yellow
  ) {
    if (userSelection.buttonNumber === 12) return true;
  }

  if (
    userSelection.colour === BoardButtonNumber.Green ||
    userSelection.colour === BoardButtonNumber.Blue
  ) {
    if (userSelection.buttonNumber === 2) return true;
  }

  // 5 btn were selected BUT the user did not select the rightmost digit
  return false;
}
