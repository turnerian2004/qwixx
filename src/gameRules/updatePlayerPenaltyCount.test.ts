import { updatePlayerPenaltyCount } from "./updatePlayerPenaltyCount";

const playerPenaltiesBefore0: boolean[] = [false, false, false, false];
const playerPenaltiesAfter0: boolean[] = [true, false, false, false];

test("player penalty assigned 1st penalty", () => {
  expect(updatePlayerPenaltyCount(playerPenaltiesBefore0)).toStrictEqual(
    playerPenaltiesAfter0
  );
});

const playerPenaltiesBefore1: boolean[] = [true, false, false, false];
const playerPenaltiesAfter1: boolean[] = [true, true, false, false];

test("player penalty assigned 2nd penalty", () => {
  expect(updatePlayerPenaltyCount(playerPenaltiesBefore1)).toStrictEqual(
    playerPenaltiesAfter1
  );
});

const playerPenaltiesBefore2: boolean[] = [true, true, false, false];
const playerPenaltiesAfter2: boolean[] = [true, true, true, false];

test("player penalty assigned 3rd penalty", () => {
  expect(updatePlayerPenaltyCount(playerPenaltiesBefore2)).toStrictEqual(
    playerPenaltiesAfter2
  );
});

const playerPenaltiesBefore3: boolean[] = [true, true, true, false];
const playerPenaltiesAfter3: boolean[] = [true, true, true, true];

test("player penalty assigned 4th penalty", () => {
  expect(updatePlayerPenaltyCount(playerPenaltiesBefore3)).toStrictEqual(
    playerPenaltiesAfter3
  );
});
