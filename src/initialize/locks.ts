export interface ILock {
  colour: number;
  isLocked: boolean;
}

export let playerLocks: ILock[] = initializeLocks();

export function initializeLocks() {
  const numberOfColours = 4;
  let locks: ILock[] = [];

  for (let i = 0; i < numberOfColours; i++) {
    let lock: ILock = { colour: i, isLocked: false };
    locks.push(lock);
  }

  return locks;
}
