import { IPlayerBoardButtonObject } from "./../initialize/playerBoardButtons";
import { IAvailableButton } from "./../components/availableButtons/AvailableButton";

export function isAvailableNumber(
  availableBoardButtons: IAvailableButton[],
  boardButton: IPlayerBoardButtonObject
): boolean {
  // check that the user pick is one of the dice generated numbers

  let colourSortedAvailableBoardButtons = [];
  let tempAvailableBoardButtons = [...availableBoardButtons];
  const publicNumber = tempAvailableBoardButtons[0];
  // remove public number
  tempAvailableBoardButtons.shift();

  // the user selected digit matches the public number
  if (publicNumber.digit === boardButton.buttonNumber) return true;

  for (let i = 0; i < 8; i += 2) {
    let temp = [];
    temp.push(tempAvailableBoardButtons[i]);
    temp.push(tempAvailableBoardButtons[i + 1]);
    colourSortedAvailableBoardButtons.push(temp);
  }

  let colourSpecificAvailableBoardButtons =
    colourSortedAvailableBoardButtons[boardButton.colour];

  colourSpecificAvailableBoardButtons =
    colourSpecificAvailableBoardButtons.filter(
      (availableBoardButton) =>
        availableBoardButton.digit === boardButton.buttonNumber
    );

  // the selected button matches 1 of the allowed selections
  if (colourSpecificAvailableBoardButtons.length > 0) return true;

  // the user pick an invalid option
  return false;
}
