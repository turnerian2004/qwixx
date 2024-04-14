import "./ExplanationBox.css";

export default function ExplanationBox() {
  return (
    <div className="explanationBoxContainer centreAll">
      <div className="explanationBox">
        <div>
          <strong>How to start?</strong>
          <br />
          <strong> 1. </strong> Read the rules
          <br />
          <strong> 2. </strong> Select a button on the left board or skip your
          turn
          <br />
          <strong> 3. </strong> Repeat for player 2
          <br />
          <br />
          <strong> Game Objective </strong>
          <br />
          Score more points than your opponent.
          <br />
          <br />
          <strong> Definitions </strong>
          <br /> <strong> Public Number </strong>
          <br /> The sum of the two white die. This number is available to both
          players and is displayed in the middle row. The public number allows a
          player to access any colour number with the same value.
          <br />
          <br />
          <strong> Colour Numbers </strong>
          <br /> Each white dice is added with each
          <br />
        </div>
      </div>
      <div className="explanationBox">
        <div>
          colour dice. In the middle row, the resulting sums are displayed.{" "}
          <br />
          <br />
          <strong> Gameplay Rules </strong>
          <br />
          <strong> 1. </strong> A player rolls the dice.
          <br />
          <strong> 2. </strong> The dice roller may cross off any colour number
          <strong> AND </strong> the public number.
          <br />
          <strong> 3. </strong> After the dice roller selects between 0 and 2
          buttons, the other player may only cross off the public number.
          <br />
          <strong> 4. </strong> Both players may only tick off buttons to the
          right of the row’s leftmost crossed off button.
          <strong> Example: </strong> If Red 6 is crossed off, a player may not
          select Red buttons 2 to through 5.
          <br />
          <strong> 5. </strong> A player may only cross off the rightmost number
          of a row if they have already crossed off 5 other numbers on that row.
        </div>
      </div>
      <div className="explanationBox">
        <div>
          <strong> 6. </strong> You must always check the ‘turn complete’ box to
          either roll the dice or update the turn tracker.
          <br />
          <br />
          <strong> End Game </strong>
          <br />
          <strong> 1. </strong> If 2 rows are locked, the game ends immediately.
          <br />
          <strong> 2. </strong> If the dice roller does <strong> NOT </strong>
          select at least 1 number, the dice roller is assessed 1 penalty. When
          a player gets their 4th penalty, the game ends immediately.
          <br />
          <br />
          <strong> Scoring</strong>
          <br />
          <strong> 1. </strong> Every skipped turn penalty is -5 points.
          <br />
          <strong> 2. </strong> Beneath the blue row on the player boards, the
          points awarded for the number of buttons selected per row is listed.
          <br />
          <strong> Example: </strong> A player gets 36 points if 8 blue buttons
          are selected.
        </div>
      </div>
    </div>
  );
}
