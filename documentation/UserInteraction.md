# User Interaction with the Qwixx App

There are 3 ways a user can interact with the app:

1. Board button
2. Roll the Dice button
3. Finished Turn button

Below, the processes associated with each button are documented.

For the game rules, please see the explanation box on the app itself. The documentation below explains how the buttons are designed to enforce the game rules.

## Board Button

The button has the following guard clauses:

1. Is the game over?
2. Does the board button selected belong to the player whose turn it is?
   <strong> Example</strong>: If the state variable is set to player 1, a board button belonging to player 2 may not be selected.
3. Is the row locked?
4. Is the button to the left of the leftmost available button? <strong> Example</strong>: If the user selects the yellow #2 button but the yellow #3 button has already been selected, the yellow #2 button is not an allowable pick. <strong> Note</strong>: When this check occurs, the rightmost button is discarded since if the rightmost button were selected, the row would be locked (guard clause #3).
5. If the button is the right most button, the player must have already selected 5 buttons in that row on their board.

If no return statement is triggered by the guard clauses, the state will be updated in one of the following ways:

1. The button is to the right of the leftmost already selected button in a given row. This case results when guard clause #4 returns true. In this case, the board is updated. Specifically, the `isCrossedOff` parameter of the button selected is set to `true`. No other state parameters are updated.
2. The selected button is the rightmost button and a valid pick. This case happens when guard clause #5 returns true. The board button selected has the parameter `isCrossedOff` set to true. The lock variable, `playerLocks`, is set to true (The row is now locked for both players). The `isGameOver` variable will be updated to `true` if this is the second row to be locked.
3. If neither guard clause #4 or #5 returns true, the state is not updated.

The game may end by a player selecting the rightmost button of a row. If the fifth guard clause returns true AND one row is already locked, the game ends.

## Roll Dice Button

The button has the following guard clauses:

1. Is the game over?
2. Did the player whose turn it was cross off the `Finished Turn` button?
3. Is the variable `whoseTurn` NOT match the variable `whoRolledDice`. Explanation: This mismatch indicates the player who did not roll the dice had used their turn.

If none of the guard clauses fail, the state is updated by setting the `whoRolledDice` equal to the player whose turn it last was. The ``whoseTurn` variable is left unaltered because that player will now roll the dice.

There is no scenario under which the game ends when the player clicks the `Roll Dice` button.

## Is Player Done Button

The button has the following guard clauses:

1. Is the game over?
2. Is the variable `isCurrentPlayerDone` already set to `false`?

If none of the above conditions fail, variable `isCurrentPlayerDone` is set to true. The game would end at this point if a player already has 3 skipped turn penalities.

## update whoseTurn Logic

The state variable `whoseTurn` is a boolean array, with one index per player. At the game's start, and when the dice is rolled, each index is reset to false.

An index value should be toggled to true under the following circumstances.

This table represents when to update `whoseTurn` when users are selecting the board buttons.

| Case | Player identity | Number buttons selected | Toggle whoseTurn to true? |
| ---- | --------------- | ----------------------- | ------------------------- |
| 1    | Die roller      | 0                       | ❌                        |
| 2    | Die roller      | 1                       | ❌                        |
| 3    | Die roller      | 2                       | ✅                        |
| 4    | Non-die roller  | 0                       | ❌                        |
| 5    | Non-die roller  | 1                       | ✅                        |

This table represents when to update `whoseTurn` when users are selecting the `Is player X done?`. In case 4, `whoseTurn` is not updated since `whoseTurn` will be updated when the user rolls the dice.

| Case | Player identity | Did the player select `Is player done?` button? | Toggle whoseTurn to true? |
| ---- | --------------- | ----------------------------------------------- | ------------------------- |
| 1    | Die roller      | 0                                               | ❌                        |
| 2    | Die roller      | 1                                               | ✅                        |
| 3    | Non-die roller  | 0                                               | ❌                        |
| 4    | Non-die roller  | 1                                               | ❌                        |
