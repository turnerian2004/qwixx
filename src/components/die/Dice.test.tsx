import Dice from "./Dice";
import { render } from "@testing-library/react";

describe("Dice", () => {
  it("counter displays correct initial count", () => {
    const redDice = { colour: 2, digit: 5 };
    const { getByTestId } = render(<Dice dice={redDice} />);
    const diceValue = Number(getByTestId("dice-yellow").textContent);
    expect(diceValue).toEqual(5);
  });
});
