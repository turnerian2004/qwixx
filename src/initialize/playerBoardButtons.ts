import { BoardButtonNumber, PlayerID, redAndYellowNumbers } from "../emuns";

export interface IPlayerBoardButtonObject {
  colour: number;
  playerID: number;
  buttonNumber: number;
  isCrossedOff: boolean;
}

const player1RedBoardButtons: IPlayerBoardButtonObject[] =
  initializeIncrementingPlayerBoardButtons(BoardButtonNumber.Red, PlayerID.One);
const player1YellowBoardButtons: IPlayerBoardButtonObject[] =
  initializeIncrementingPlayerBoardButtons(
    BoardButtonNumber.Yellow,
    PlayerID.One
  );
const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
  initializeDecrementingPlayerBoardButtons(
    BoardButtonNumber.Green,
    PlayerID.One
  );
const player1BlueBoardButtons: IPlayerBoardButtonObject[] =
  initializeDecrementingPlayerBoardButtons(
    BoardButtonNumber.Blue,
    PlayerID.One
  );

const player2RedBoardButtons: IPlayerBoardButtonObject[] =
  initializeIncrementingPlayerBoardButtons(BoardButtonNumber.Red, PlayerID.Two);
const player2YellowBoardButtons: IPlayerBoardButtonObject[] =
  initializeIncrementingPlayerBoardButtons(
    BoardButtonNumber.Yellow,
    PlayerID.Two
  );
const player2GreenBoardButtons: IPlayerBoardButtonObject[] =
  initializeDecrementingPlayerBoardButtons(
    BoardButtonNumber.Green,
    PlayerID.Two
  );
const player2BlueBoardButtons: IPlayerBoardButtonObject[] =
  initializeDecrementingPlayerBoardButtons(
    BoardButtonNumber.Blue,
    PlayerID.Two
  );

// all 4 rows of player 1's colour buttons are stored in this variable
export const player1BoardButtons: IPlayerBoardButtonObject[][] = [];
player1BoardButtons.push(player1RedBoardButtons);
player1BoardButtons.push(player1YellowBoardButtons);
player1BoardButtons.push(player1GreenBoardButtons);
player1BoardButtons.push(player1BlueBoardButtons);

// all 4 rows of player 2's colour buttons are stored in this variable
export const player2BoardButtons: IPlayerBoardButtonObject[][] = [];
player2BoardButtons.push(player2RedBoardButtons);
player2BoardButtons.push(player2YellowBoardButtons);
player2BoardButtons.push(player2GreenBoardButtons);
player2BoardButtons.push(player2BlueBoardButtons);

export const playerBoardButtons: IPlayerBoardButtonObject[][][] = [
  player1BoardButtons,
  player2BoardButtons,
];

export function initializeIncrementingPlayerBoardButtons(
  colour: number,
  playerID: number
) {
  // returns all the buttons for 1 row of 1 players board
  // each button is initialized with the colour, playerID, and button #
  // starts at button #2 -> #12
  const rowPlayerBoardButtons: IPlayerBoardButtonObject[] = [];

  for (
    let i = redAndYellowNumbers.Leftmost;
    i <= redAndYellowNumbers.Rightmost;
    i++
  ) {
    const newPlayerBoardButton: IPlayerBoardButtonObject = {
      colour: colour,
      playerID: playerID,
      buttonNumber: i,
      isCrossedOff: false,
    };

    rowPlayerBoardButtons.push(newPlayerBoardButton);
  }

  return rowPlayerBoardButtons;
}

export function initializeDecrementingPlayerBoardButtons(
  colour: number,
  playerID: number
) {
  // returns all the buttons for 1 row of 1 players board
  // each button is initialized with the colour, playerID, and button #
  // starts at button #12 -> #2
  const rowPlayerBoardButtons: IPlayerBoardButtonObject[] = [];

  for (
    let i = redAndYellowNumbers.Rightmost;
    i >= redAndYellowNumbers.Leftmost;
    i--
  ) {
    const newPlayerBoardButton: IPlayerBoardButtonObject = {
      colour: colour,
      playerID: playerID,
      buttonNumber: i,
      isCrossedOff: false,
    };

    rowPlayerBoardButtons.push(newPlayerBoardButton);
  }

  return rowPlayerBoardButtons;
}
