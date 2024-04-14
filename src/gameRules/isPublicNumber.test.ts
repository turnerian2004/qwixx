import { BoardButtonNumber, PlayerID, AvailableButtonNumber } from "./../emuns";
import { IPlayerBoardButtonObject } from "./../initialize/playerBoardButtons";
import { IAvailableButton } from "./../components/availableButtons/AvailableButton";
import { isPublicNumber } from "./isPublicNumber";

const boardButton1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Blue,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: false,
};

const boardButton2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.One,
  buttonNumber: 9,
  isCrossedOff: false,
};

const boardButton3: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 9,
  isCrossedOff: false,
};

const boardButton4: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 10,
  isCrossedOff: false,
};

// the public number's digit does not match the value of a coloured available number
const availableNumbers1: IAvailableButton[] = [
  { colour: 0, digit: 2, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 2, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 3, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 4, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 7, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 10, playerID: 0, whoRolledDice: 0 },
];

// the public number's digit matches the value of a coloured available number
const availableNumbers2: IAvailableButton[] = [
  { colour: 0, digit: 2, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 5, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 2, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 3, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 4, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 7, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 9, playerID: 0, whoRolledDice: 0 },
];

// an example the code failed to catch
const availableNumbers3: IAvailableButton[] = [
  { colour: 0, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 10, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 7, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 11, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 5, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 6, playerID: 0, whoRolledDice: 0 },
];

const availableNumbers4: IAvailableButton[] = [
  { colour: 0, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 11, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 10, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 10, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 10, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 9, playerID: 0, whoRolledDice: 0 },
];

test("test1: User picked non-coloured option", () => {
  expect(isPublicNumber(boardButton1, availableNumbers1)).toBe(true);
});

test("test2: User picked coloured option", () => {
  expect(isPublicNumber(boardButton2, availableNumbers2)).toBe(true);
});

test("test3: initial tests did not catch this", () => {
  expect(isPublicNumber(boardButton3, availableNumbers3)).toBe(true);
});

test("test4: initial tests did not catch this", () => {
  expect(isPublicNumber(boardButton4, availableNumbers4)).toBe(false);
});
