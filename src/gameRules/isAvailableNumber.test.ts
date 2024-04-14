import { IAvailableButton } from "./../components/availableButtons/AvailableButton";
import { IPlayerBoardButtonObject } from "./../initialize/playerBoardButtons";
import { BoardButtonNumber, PlayerID } from "../emuns";
import { isAvailableNumber } from "../gameRules/isAvailableNumber";

const availableNumbers: IAvailableButton[] = [
  { colour: 0, digit: 4, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 7, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 5, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 4, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 7, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 5, playerID: 0, whoRolledDice: 0 },
];

const redBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 5,
  isCrossedOff: true,
};

test("redBtn1 is deemed an available number", () => {
  expect(isAvailableNumber(availableNumbers, redBtn1)).toBe(true);
});

const redBtn2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: true,
};

test("redBtn2 is correctly deemed not an available number", () => {
  expect(isAvailableNumber(availableNumbers, redBtn2)).toBe(false);
});

const yellowBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Yellow,
  playerID: PlayerID.One,
  buttonNumber: 8,
  isCrossedOff: true,
};

test("yellowBtn1 is correctly deemed is an available number", () => {
  expect(isAvailableNumber(availableNumbers, yellowBtn1)).toBe(true);
});

const yellowBtn2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Yellow,
  playerID: PlayerID.One,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("yellowBtn2 is correctly deemed not an available number", () => {
  expect(isAvailableNumber(availableNumbers, yellowBtn2)).toBe(false);
});
