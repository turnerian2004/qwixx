export interface IScoreCardObject {
  numberButtonsSelected: number;
  pointsEarned: number;
}

export let scoreCard: IScoreCardObject = {
  numberButtonsSelected: 1,
  pointsEarned: 1,
};

export let scoreCards: IScoreCardObject[] = [scoreCard];
generateScoreCards();

export function generateScoreCards() {
  const totalNumberOfScoreCards: number = 12;

  for (let i = 0; i < totalNumberOfScoreCards - 1; i++) {
    let newScoreCard: IScoreCardObject = { ...scoreCard };
    const previousScoreCard: IScoreCardObject = scoreCards[i];
    newScoreCard.numberButtonsSelected =
      previousScoreCard.numberButtonsSelected + 1;
    const pointsEarned: number =
      newScoreCard.numberButtonsSelected + previousScoreCard.pointsEarned;
    newScoreCard.pointsEarned = pointsEarned;
    scoreCards.push(newScoreCard);
  }
}
