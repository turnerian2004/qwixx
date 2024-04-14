import { IPlayerBoardButtonObject } from "../initialize/playerBoardButtons";
import { BoardButtonNumber, PlayerID } from "../emuns";
import { isValidLeft11ButtonPick } from "./isValidLeft11ButtonPick";

const playerBoardRowRed1: IPlayerBoardButtonObject[] = [
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

const redBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 10,
  isCrossedOff: false,
};

const redBtn2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 12,
  isCrossedOff: false,
};

const redBtn3: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 9,
  isCrossedOff: true,
};

const redBtn4: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Red,
  playerID: PlayerID.One,
  buttonNumber: 8,
  isCrossedOff: false,
};

test("test1: valid red pick", () => {
  // btn to the right of the rightmost selected button
  expect(isValidLeft11ButtonPick(playerBoardRowRed1, redBtn1)).toBe(true);
});

test("test2: invalid red pick", () => {
  // rightmost btn may not be selected since only 1 left11 btn selected
  expect(isValidLeft11ButtonPick(playerBoardRowRed1, redBtn2)).toBe(false);
});

test("test3: invalid red pick", () => {
  // user selected an already selected btn
  expect(isValidLeft11ButtonPick(playerBoardRowRed1, redBtn3)).toBe(false);
});

test("test4: invalid red pick", () => {
  // user select a btn to the left of the rightmost selected btn
  expect(isValidLeft11ButtonPick(playerBoardRowRed1, redBtn4)).toBe(false);
});

const playerBoardRowGreen1: IPlayerBoardButtonObject[] = [
  { colour: 0, playerID: 0, buttonNumber: 12, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 11, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 10, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 9, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 8, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 7, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 6, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 5, isCrossedOff: true },
  { colour: 0, playerID: 0, buttonNumber: 4, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 3, isCrossedOff: false },
  { colour: 0, playerID: 0, buttonNumber: 2, isCrossedOff: false },
];

const greenBtn1: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.One,
  buttonNumber: 4,
  isCrossedOff: false,
};

const greenBtn2: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.One,
  buttonNumber: 2,
  isCrossedOff: false,
};

const greenBtn3: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.One,
  buttonNumber: 6,
  isCrossedOff: true,
};

const greenBtn4: IPlayerBoardButtonObject = {
  colour: BoardButtonNumber.Green,
  playerID: PlayerID.One,
  buttonNumber: 12,
  isCrossedOff: false,
};

test("test1: valid green pick", () => {
  // user selected btn to the right of rightmost selected btn
  expect(isValidLeft11ButtonPick(playerBoardRowGreen1, greenBtn1)).toBe(true);
});

test("test2: invalid green pick", () => {
  // user incorrectly selected the rightmost btn
  expect(isValidLeft11ButtonPick(playerBoardRowGreen1, greenBtn2)).toBe(false);
});

test("test3: invalid green pick", () => {
  // user select a btn to the left of the rightmost selected btn
  expect(isValidLeft11ButtonPick(playerBoardRowGreen1, greenBtn3)).toBe(false);
});

test("test4: invalid green pick", () => {
  expect(isValidLeft11ButtonPick(playerBoardRowGreen1, greenBtn4)).toBe(false);
});
