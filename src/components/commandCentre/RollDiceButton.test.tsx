import { rollDie } from "./RollDiceButton";

test("all die values are under 7", () => {
  const diceValues = rollDie();
  diceValues.map((dieValue) => expect(dieValue.digit).not.toBeGreaterThan(6));
});

test("all die values are greater than 0", () => {
  const diceValues = rollDie();
  diceValues.map((dieValue) => expect(dieValue.digit).toBeGreaterThan(0));
});
