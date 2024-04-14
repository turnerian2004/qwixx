import { IPlayerBoardButtonObject } from "./../initialize/playerBoardButtons";

export function shouldRowBeLocked(
  playerBoardRow: IPlayerBoardButtonObject[]
): boolean {
  // to lock a row, the rightmost button AND 11 other buttons must be selected

  const currentPlayerBoardRow: IPlayerBoardButtonObject[] = [...playerBoardRow];
  const boardRowLength: number = currentPlayerBoardRow.length;
  const rightMostButton: IPlayerBoardButtonObject =
    currentPlayerBoardRow[boardRowLength - 1];
  const left11Buttons: IPlayerBoardButtonObject[] = playerBoardRow.slice(0, -1);

  // this button must be checked to lock a row
  const isRightMostButtonChecked: boolean = rightMostButton.isCrossedOff;
  const howMany11LeftButtonsAreSelected: number = left11Buttons.reduce(
    function (count, button) {
      return count + (button.isCrossedOff === true ? 1 : 0);
    },
    0
  );
  const are11LeftButtonsSelected: boolean =
    howMany11LeftButtonsAreSelected >= 5 ? true : false;

  if (isRightMostButtonChecked === true && are11LeftButtonsSelected === true)
    return true;

  // the row is not locked
  return false;
}
