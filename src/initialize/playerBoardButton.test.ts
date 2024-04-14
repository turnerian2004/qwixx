import { initializeIncrementingPlayerBoardButtons } from "./playerBoardButtons";
import { initializeDecrementingPlayerBoardButtons } from "./playerBoardButtons";
import { BoardButtonNumber } from "../emuns";
import { IPlayerBoardButtonObject } from "./playerBoardButtons";
import { PlayerID } from "../emuns";

test("check 1st player 1st red button", () => {
  const firstRedPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Red,
    playerID: PlayerID.One,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Red,
      PlayerID.One
    );

  expect(player1RedBoardButtons[0]).toStrictEqual(firstRedPlayerBoardButton);
});

test("check 1st player last red button", () => {
  const lastRedPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Red,
    playerID: PlayerID.One,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Red,
      PlayerID.One
    );

  expect(
    player1RedBoardButtons[player1RedBoardButtons.length - 1]
  ).toStrictEqual(lastRedPlayerBoardButton);
});

test("check 1st player yellow button", () => {
  const firstYellowPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Yellow,
    playerID: PlayerID.One,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Yellow,
      PlayerID.One
    );

  expect(player1RedBoardButtons[0]).toStrictEqual(firstYellowPlayerBoardButton);
});

test("check 1st player last yellow button", () => {
  const lastYellowPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Yellow,
    playerID: PlayerID.One,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Yellow,
      PlayerID.One
    );

  expect(
    player1RedBoardButtons[player1RedBoardButtons.length - 1]
  ).toStrictEqual(lastYellowPlayerBoardButton);
});

test("check 1st player 1st green button", () => {
  const firstGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Green,
    playerID: PlayerID.One,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Green,
      PlayerID.One
    );

  expect(player1GreenBoardButtons[0]).toStrictEqual(
    firstGreenPlayerBoardButton
  );
});

test("check 1st player last green button", () => {
  const lastGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Green,
    playerID: PlayerID.One,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Green,
      PlayerID.One
    );

  expect(
    player1GreenBoardButtons[player1GreenBoardButtons.length - 1]
  ).toStrictEqual(lastGreenPlayerBoardButton);
});

test("check 1st player 1st blue button", () => {
  const firstGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Blue,
    playerID: PlayerID.One,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Blue,
      PlayerID.One
    );

  expect(player1GreenBoardButtons[0]).toStrictEqual(
    firstGreenPlayerBoardButton
  );
});

test("check 1st player last blue button", () => {
  const lastGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Blue,
    playerID: PlayerID.One,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Blue,
      PlayerID.One
    );

  expect(
    player1GreenBoardButtons[player1GreenBoardButtons.length - 1]
  ).toStrictEqual(lastGreenPlayerBoardButton);
});

// player 2

test("check 2nd player 1st red button", () => {
  const firstRedPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Red,
    playerID: PlayerID.Two,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Red,
      PlayerID.Two
    );

  expect(player1RedBoardButtons[0]).toStrictEqual(firstRedPlayerBoardButton);
});

test("check 2nd player last red button", () => {
  const lastRedPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Red,
    playerID: PlayerID.Two,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Red,
      PlayerID.Two
    );

  expect(
    player1RedBoardButtons[player1RedBoardButtons.length - 1]
  ).toStrictEqual(lastRedPlayerBoardButton);
});

test("check 2nd player yellow button", () => {
  const firstYellowPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Yellow,
    playerID: PlayerID.Two,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Yellow,
      PlayerID.Two
    );

  expect(player1RedBoardButtons[0]).toStrictEqual(firstYellowPlayerBoardButton);
});

test("check 2nd player last yellow button", () => {
  const lastYellowPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Yellow,
    playerID: PlayerID.Two,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1RedBoardButtons: IPlayerBoardButtonObject[] =
    initializeIncrementingPlayerBoardButtons(
      BoardButtonNumber.Yellow,
      PlayerID.Two
    );

  expect(
    player1RedBoardButtons[player1RedBoardButtons.length - 1]
  ).toStrictEqual(lastYellowPlayerBoardButton);
});

test("check 2nd player 1st green button", () => {
  const firstGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Green,
    playerID: PlayerID.Two,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Green,
      PlayerID.Two
    );

  expect(player1GreenBoardButtons[0]).toStrictEqual(
    firstGreenPlayerBoardButton
  );
});

test("check 2nd player last green button", () => {
  const lastGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Green,
    playerID: PlayerID.Two,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Green,
      PlayerID.Two
    );

  expect(
    player1GreenBoardButtons[player1GreenBoardButtons.length - 1]
  ).toStrictEqual(lastGreenPlayerBoardButton);
});

test("check 2nd player 1st blue button", () => {
  const firstGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Blue,
    playerID: PlayerID.Two,
    buttonNumber: 12,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Blue,
      PlayerID.Two
    );

  expect(player1GreenBoardButtons[0]).toStrictEqual(
    firstGreenPlayerBoardButton
  );
});

test("check 2nd player last blue button", () => {
  const lastGreenPlayerBoardButton: IPlayerBoardButtonObject = {
    colour: BoardButtonNumber.Blue,
    playerID: PlayerID.Two,
    buttonNumber: 2,
    isCrossedOff: false,
  };

  const player1GreenBoardButtons: IPlayerBoardButtonObject[] =
    initializeDecrementingPlayerBoardButtons(
      BoardButtonNumber.Blue,
      PlayerID.Two
    );

  expect(
    player1GreenBoardButtons[player1GreenBoardButtons.length - 1]
  ).toStrictEqual(lastGreenPlayerBoardButton);
});
