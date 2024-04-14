import { IScoreCardObject } from "./scoreCards";
import { scoreCards } from "./scoreCards";

test("1st scorecard correctly initilized", () => {
  const firstScoreCard: IScoreCardObject = {
    numberButtonsSelected: 1,
    pointsEarned: 1,
  };

  expect(scoreCards[0]).toStrictEqual(firstScoreCard);
});

test("last scorecard correctly initilized", () => {
  const lastScoreCard: IScoreCardObject = {
    numberButtonsSelected: 12,
    pointsEarned: 78,
  };

  expect(scoreCards[scoreCards.length - 1]).toStrictEqual(lastScoreCard);
});
