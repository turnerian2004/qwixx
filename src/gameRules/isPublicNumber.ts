import { IPlayerBoardButtonObject } from "./../initialize/playerBoardButtons";
import { IAvailableButton } from "./../components/availableButtons/AvailableButton";

export function isPublicNumber(
  boardButton: IPlayerBoardButtonObject,
  availableButtons: IAvailableButton[]
): boolean {
  // if the dice roller selects the public number, they may only select a colour digit on their next selection AND vice versa

  let colourAvailableNumbers: IAvailableButton[] = [...availableButtons];
  // remove the public number from the list of available numbers
  colourAvailableNumbers.shift();

  colourAvailableNumbers = sortAvailableNumbersByColour(
    colourAvailableNumbers,
    boardButton.colour
  );

  const matchingDigits: IAvailableButton[] = colourAvailableNumbers.filter(
    (availableButton) => availableButton.digit === boardButton.buttonNumber
  );

  if (matchingDigits.length === 0) return true;

  // the user selection is not the public number
  return false;
}

export function updateAvailableNumbers(
  availableButtons: IAvailableButton[],
  didUserSelectPublicNumber: boolean
): IAvailableButton[] {
  let updatedAvailableButtons: IAvailableButton[] = [...availableButtons];
  const publicNumber: number = updatedAvailableButtons[0].digit;

  if (didUserSelectPublicNumber === true) {
    // user selected the public #, so disable public # for future use
    updatedAvailableButtons[0].digit = -1;
    return updatedAvailableButtons;
  }

  updatedAvailableButtons.forEach(
    (updatedAvailableButton) => (updatedAvailableButton.digit = -1)
  );

  // enable public # because user selected a coloured #
  updatedAvailableButtons[0].digit = publicNumber;
  return updatedAvailableButtons;
}

function sortAvailableNumbersByColour(
  availableButtons: IAvailableButton[],
  boardButtonColour: number
) {
  let colourAvailableNumbers: IAvailableButton[] = [...availableButtons];
  let match = [];

  for (let i = 0; i < 8; i += 2) {
    const colourOption1 = colourAvailableNumbers[i];
    const colourOption2 = colourAvailableNumbers[i + 1];

    const colourOptions = [colourOption1, colourOption2];
    match.push(colourOptions);
  }

  match = match[boardButtonColour];

  return match;
}
