import { PlayerID } from "../../emuns";
import { generateAvailableButtons } from "./AvailableButtons";

const dieRolls1 = [
  { colour: 0, digit: 1 },
  { colour: 1, digit: 2 },
  { colour: 2, digit: 4 },
  { colour: 3, digit: 2 },
  { colour: 4, digit: 3 },
  { colour: 5, digit: 4 },
];

const availableButtonsAnswer1DiceRoller = [
  { colour: 0, digit: 3, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 3, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 4, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 5, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 4, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 5, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 5, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 6, playerID: 0, whoRolledDice: 0 },
];

const availableButtonsAnswer1NotDiceRoller = [
  { colour: 0, digit: 3, playerID: 1, whoRolledDice: 0 },
  { colour: 1, digit: 3, playerID: 1, whoRolledDice: 0 },
  { colour: 1, digit: 4, playerID: 1, whoRolledDice: 0 },
  { colour: 2, digit: 5, playerID: 1, whoRolledDice: 0 },
  { colour: 2, digit: 6, playerID: 1, whoRolledDice: 0 },
  { colour: 4, digit: 4, playerID: 1, whoRolledDice: 0 },
  { colour: 4, digit: 5, playerID: 1, whoRolledDice: 0 },
  { colour: 5, digit: 5, playerID: 1, whoRolledDice: 0 },
  { colour: 5, digit: 6, playerID: 1, whoRolledDice: 0 },
];

const dieRolls2 = [
  { colour: 0, digit: 2 },
  { colour: 1, digit: 6 },
  { colour: 2, digit: 5 },
  { colour: 3, digit: 4 },
  { colour: 4, digit: 4 },
  { colour: 5, digit: 1 },
];

const availableButtonsAnswer2DiceRoller = [
  { colour: 0, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 1, digit: 10, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 7, playerID: 0, whoRolledDice: 0 },
  { colour: 2, digit: 9, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 6, playerID: 0, whoRolledDice: 0 },
  { colour: 4, digit: 8, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 3, playerID: 0, whoRolledDice: 0 },
  { colour: 5, digit: 5, playerID: 0, whoRolledDice: 0 },
];

const availableButtonsAnswer2NotDiceRoller = [
  { colour: 0, digit: 6, playerID: 1, whoRolledDice: 0 },
  { colour: 1, digit: 8, playerID: 1, whoRolledDice: 0 },
  { colour: 1, digit: 10, playerID: 1, whoRolledDice: 0 },
  { colour: 2, digit: 7, playerID: 1, whoRolledDice: 0 },
  { colour: 2, digit: 9, playerID: 1, whoRolledDice: 0 },
  { colour: 4, digit: 6, playerID: 1, whoRolledDice: 0 },
  { colour: 4, digit: 8, playerID: 1, whoRolledDice: 0 },
  { colour: 5, digit: 3, playerID: 1, whoRolledDice: 0 },
  { colour: 5, digit: 5, playerID: 1, whoRolledDice: 0 },
];

test("test1: available digits are correctly generated", () => {
  const availableButtons1DiceRoller = generateAvailableButtons(
    dieRolls1,
    PlayerID.One,
    PlayerID.One
  );
  const availableButtons1NotDiceRoller = generateAvailableButtons(
    dieRolls1,
    PlayerID.Two,
    PlayerID.One
  );

  expect(availableButtons1DiceRoller).toEqual(
    availableButtonsAnswer1DiceRoller
  );
  expect(availableButtons1NotDiceRoller).toEqual(
    availableButtonsAnswer1NotDiceRoller
  );
});

test("test2: available digits are correctly generated", () => {
  const availableButtons2DiceRoller = generateAvailableButtons(
    dieRolls2,
    PlayerID.One,
    PlayerID.One
  );
  const availableButtons2NotDiceRoller = generateAvailableButtons(
    dieRolls2,
    PlayerID.Two,
    PlayerID.One
  );

  expect(availableButtons2DiceRoller).toEqual(
    availableButtonsAnswer2DiceRoller
  );
  expect(availableButtons2NotDiceRoller).toEqual(
    availableButtonsAnswer2NotDiceRoller
  );
});
