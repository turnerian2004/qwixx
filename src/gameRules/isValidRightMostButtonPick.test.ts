import { BoardButtonNumber, PlayerID } from "./../emuns";
import { isValidRightMostButtonPick } from "./isValidRightMostButtonPick";
import { IPlayerBoardButtonObject } from "../initialize/playerBoardButtons";

const playerBoardRowRed: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: false },
];

const redBtn: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 12,
  isCrossedOff: false,
};

test("red #12 is invalid", () => {
  expect(isValidRightMostButtonPick(playerBoardRowRed, redBtn)).toBe(false);
});

const redBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 12,
  isCrossedOff: false,
};

test("red #11 is invalid", () => {
  expect(isValidRightMostButtonPick(playerBoardRowRed, redBtn1)).toBe(false);
});

const playerBoardRowYellow: IPlayerBoardButtonObject[] = [
  { colour: 1, playerID: 1, buttonNumber: 2, isCrossedOff: true },
  { colour: 1, playerID: 1, buttonNumber: 3, isCrossedOff: true },
  { colour: 1, playerID: 1, buttonNumber: 4, isCrossedOff: true },
  { colour: 1, playerID: 1, buttonNumber: 5, isCrossedOff: false },
  { colour: 1, playerID: 1, buttonNumber: 6, isCrossedOff: false },
  { colour: 1, playerID: 1, buttonNumber: 7, isCrossedOff: false },
  { colour: 1, playerID: 1, buttonNumber: 8, isCrossedOff: false },
  { colour: 1, playerID: 1, buttonNumber: 9, isCrossedOff: false },
  { colour: 1, playerID: 1, buttonNumber: 10, isCrossedOff: true },
  { colour: 1, playerID: 1, buttonNumber: 11, isCrossedOff: true },
  { colour: 1, playerID: 1, buttonNumber: 12, isCrossedOff: false },
];

const ylwBtn: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Yellow,
  playerID: PlayerID.Two,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("yellow #12 is valid", () => {
  expect(isValidRightMostButtonPick(playerBoardRowYellow, ylwBtn)).toBe(true);
});

const ylwBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Yellow,
  playerID: PlayerID.Two,
  buttonNumber: 7,
  isCrossedOff: true,
};

test("yellow #7 is valid", () => {
  expect(isValidRightMostButtonPick(playerBoardRowYellow, ylwBtn1)).toBe(false);
});

const playerBoardRowGreen: IPlayerBoardButtonObject[] = [
  { colour: 2, playerID: 0, buttonNumber: 12, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 6, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 5, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 4, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 3, isCrossedOff: false },
  { colour: 2, playerID: 0, buttonNumber: 2, isCrossedOff: false },
];

const grnBtn: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.Two,
  buttonNumber: 2,
  isCrossedOff: true,
};

test("green #2 is invalid", () => {
  expect(isValidRightMostButtonPick(playerBoardRowGreen, grnBtn)).toBe(false);
});

const grnBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.Two,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("green #12 is invalid", () => {
  expect(isValidRightMostButtonPick(playerBoardRowGreen, grnBtn1)).toBe(false);
});

const blueRow: IPlayerBoardButtonObject[] = [
  { colour: 3, playerID: 1, buttonNumber: 12, isCrossedOff: true },
  { colour: 3, playerID: 1, buttonNumber: 11, isCrossedOff: true },
  { colour: 3, playerID: 1, buttonNumber: 10, isCrossedOff: true },
  { colour: 3, playerID: 1, buttonNumber: 9, isCrossedOff: true },
  { colour: 3, playerID: 1, buttonNumber: 8, isCrossedOff: true },
  { colour: 3, playerID: 1, buttonNumber: 7, isCrossedOff: false },
  { colour: 3, playerID: 1, buttonNumber: 6, isCrossedOff: false },
  { colour: 3, playerID: 1, buttonNumber: 5, isCrossedOff: false },
  { colour: 3, playerID: 1, buttonNumber: 4, isCrossedOff: false },
  { colour: 3, playerID: 1, buttonNumber: 3, isCrossedOff: false },
  { colour: 3, playerID: 1, buttonNumber: 2, isCrossedOff: false },
];

const bluePick: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Blue,
  playerID: PlayerID.Two,
  buttonNumber: 6,
  isCrossedOff: false,
};

test("blue pick #6", () => {
  expect(isValidRightMostButtonPick(blueRow, bluePick)).toBe(false);
});

const bluePick1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Blue,
  playerID: PlayerID.Two,
  buttonNumber: 2,
  isCrossedOff: false,
};

test("blue pick #2", () => {
  expect(isValidRightMostButtonPick(blueRow, bluePick1)).toBe(true);
});
