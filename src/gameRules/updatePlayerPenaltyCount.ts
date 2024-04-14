export function updatePlayerPenaltyCount(
  playerPenalties: boolean[]
): boolean[] {
  let updatedPlayerPenalties = [...playerPenalties];

  for (let i = 0; i < updatedPlayerPenalties.length; i++) {
    if (updatedPlayerPenalties[i] === false) {
      updatedPlayerPenalties[i] = true;
      return updatedPlayerPenalties;
    }
  }

  updatedPlayerPenalties[0] = true;
  return updatedPlayerPenalties;
}
