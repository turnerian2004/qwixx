import { IPlayerBoardButtonObject } from "./../initialize/playerBoardButtons";
import { BoardButtonNumber } from "../emuns";

export function determineButtonIndex(
  boardButton: IPlayerBoardButtonObject
): number {
  if (
    boardButton.colour === BoardButtonNumber.Red ||
    boardButton.colour === BoardButtonNumber.Yellow
  ) {
    const buttonIndex = boardButton.buttonNumber - 2;
    return buttonIndex;
  }

  // green & blue buttons
  const buttonIndex = 12 - boardButton.buttonNumber;
  return buttonIndex;
}
