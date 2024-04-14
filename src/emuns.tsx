export enum BoardButtonString {
  Red = "red",
  Yellow = "yellow",
  Green = "green",
  Blue = "blue",
}

export enum BoardButtonNumber {
  Red = 0,
  Yellow,
  Green,
  Blue,
}

export enum PlayerID {
  One = 0,
  Two,
}

export enum redAndYellowNumbers {
  Leftmost = 2,
  Rightmost = 12,
}

export enum DiceColoursNumber {
  Public1 = 0,
  Red,
  Yellow,
  Public2,
  Green,
  Blue,
}

export enum DiceColoursString {
  Public1 = "public",
  Red = "red",
  Yellow = "yellow",
  Public2 = "public",
  Green = "green",
  Blue = "blue",
}

export enum AvailableButtonNumber {
  Public = 0,
  Red1,
  Red2,
  Yellow1,
  Yellow2,
  Green1,
  Green2,
  Blue1,
  Blue2,
}

export enum AvailableButtonString {
  Public = "public",
  Red = "red",
  Yellow = "yellow",
  Green = "green",
  Blue = "blue",
}

export enum UserInputActions {
  RollDice = "user-roll-dice",
  SelectBoardButton = "user-select-button",
  DoneButton = "user-select-done-button",
}
