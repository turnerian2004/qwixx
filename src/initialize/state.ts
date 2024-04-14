import { PlayerID } from "./../emuns";
import {
  IPlayerBoardButtonObject,
  playerBoardButtons,
} from "./playerBoardButtons";
import { ILock, playerLocks } from "./locks";
import {
  IDiceObject,
  rollDie,
} from "../components/commandCentre/RollDiceButton";
import { IAvailableButton } from "../components/availableButtons/AvailableButton";
import { generateAvailableButtons } from "../components/availableButtons/AvailableButtons";

const initialButtonCounter: number = 0;
let playerPenalities = [false, false, false, false];
let player1Penalities = [...playerPenalities];
let player2Penalities = [...playerPenalities];
let playersPenalities = [player1Penalities, player2Penalities];
const initialDieRolls = rollDie();
const player1AvailableButtons = generateAvailableButtons(
  initialDieRolls,
  PlayerID.One,
  PlayerID.One
);
const player2AvailableButtons = generateAvailableButtons(
  initialDieRolls,
  PlayerID.Two,
  PlayerID.One
);

export interface IState {
  playerLocks: ILock[];
  playerBoardButtons: IPlayerBoardButtonObject[][][];
  playersPenalities: boolean[][];
  isGameOver: boolean;
  dieRolls: IDiceObject[];
  availableButtons: [IAvailableButton[], IAvailableButton[]];
  whoRolledDice: number;
  whoseTurn: number;
  isPlayerDone: [boolean, boolean];
  buttonSelectionCounter: number;
}

export const initialState: IState = {
  playerLocks: playerLocks,
  playerBoardButtons: playerBoardButtons,
  playersPenalities: playersPenalities,
  isGameOver: false,
  dieRolls: initialDieRolls,
  availableButtons: [player1AvailableButtons, player2AvailableButtons],
  whoRolledDice: PlayerID.One,
  whoseTurn: PlayerID.One,
  isPlayerDone: [false, false],
  buttonSelectionCounter: initialButtonCounter,
};
