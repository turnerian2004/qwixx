import { IPlayerBoardButtonObject } from "../initialize/playerBoardButtons";
import { BoardButtonNumber, PlayerID } from "../emuns";
import { expect, test } from "@jest/globals";
import { determineButtonIndex } from "./buttonIndex";

const red2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: true,
};

test("check returns correct index for red 2 button", () => {
  expect(determineButtonIndex(red2)).toBe(0);
});

const red12: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.Two,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("check returns correct index for red 12 button", () => {
  expect(determineButtonIndex(red12)).toBe(10);
});

const yellow2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Yellow,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: true,
};

test("check returns correct index for yellow 2 button", () => {
  expect(determineButtonIndex(yellow2)).toBe(0);
});

const yellow12: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Yellow,
  playerID: PlayerID.Two,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("check returns correct index for yellow 12 button", () => {
  expect(determineButtonIndex(yellow12)).toBe(10);
});

// BLUE & GREEN

const green2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: true,
};

test("check returns correct index for green 2 button", () => {
  expect(determineButtonIndex(green2)).toBe(10);
});

const green12: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.Two,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("check returns correct index for green 12 button", () => {
  expect(determineButtonIndex(green12)).toBe(0);
});

const blue2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Blue,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: true,
};

test("check returns correct index for blue 2 button", () => {
  expect(determineButtonIndex(blue2)).toBe(10);
});

const blue12: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Blue,
  playerID: PlayerID.Two,
  buttonNumber: 12,
  isCrossedOff: true,
};

test("check returns correct index for blue 12 button", () => {
  expect(determineButtonIndex(blue12)).toBe(0);
});
