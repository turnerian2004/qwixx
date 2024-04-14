import { ILock } from "../../initialize/locks";
import { determineComponentColour } from "./identifycolour";

import "../../App.css";
import "./PlayerBoardLock.css";

interface IPlayerBoardLock {
  lock: ILock;
}

export default function PlayerBoardLock({ lock }: IPlayerBoardLock) {
  const open: string = "open";
  const closed: string = "closed";
  const lockColour = determineComponentColour(lock.colour);
  const lockCSS: string = `LockContainer ${lockColour} centreAll`;
  const isLocked = lock.isLocked ? closed : open;

  return (
    <img
      src={require(`../../lockImages/${lockColour}-${isLocked}.png`)}
      alt="logo"
      className={lockCSS}
    ></img>
  );
}
