import { ILock } from "./locks";
import { initializeLocks } from "./locks";
import { BoardButtonNumber } from "../emuns";

test("checks first lock is red & unlocked", () => {
  const redLock: ILock = { colour: BoardButtonNumber.Red, isLocked: false };
  const initialLocks = initializeLocks();
  expect(initialLocks[0]).toStrictEqual(redLock);
});

test("checks last lock is blue & unlocked", () => {
  const blueLock: ILock = { colour: BoardButtonNumber.Blue, isLocked: false };
  const initialLocks = initializeLocks();
  expect(initialLocks[initialLocks.length - 1]).toStrictEqual(blueLock);
});
