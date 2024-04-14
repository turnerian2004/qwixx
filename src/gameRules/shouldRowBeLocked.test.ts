import { IPlayerBoardButtonObject } from "../initialize/playerBoardButtons";
import { shouldRowBeLocked } from "./shouldRowBeLocked";

const playerBoardRow0: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: false },
];

test("all btns not crossed off", () => {
  expect(shouldRowBeLocked(playerBoardRow0)).toBe(false);
});

const playerBoardRow1: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: true },
];

test("all btn are crossed off", () => {
  expect(shouldRowBeLocked(playerBoardRow1)).toBe(true);
});

const playerBoardRow2: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: true },
];

test("only 4 btns + rightmost btn are crossed off", () => {
  expect(shouldRowBeLocked(playerBoardRow2)).toBe(false);
});

const playerBoardRow3: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: true },
];

test("5 btns + rightmost btn are crossed off", () => {
  expect(shouldRowBeLocked(playerBoardRow3)).toBe(true);
});

const playerBoardRow4: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: false },
];

test("5 btns BUT NOT rightmost btn are crossed off", () => {
  expect(shouldRowBeLocked(playerBoardRow4)).toBe(false);
});

const playerBoardRow5: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: false },
];

test("6 btns BUT NOT rightmost btn are crossed off", () => {
  expect(shouldRowBeLocked(playerBoardRow4)).toBe(false);
});
