import { IDiceObject } from "../commandCentre/RollDiceButton";

import Dice from "./Dice";

interface IDie {
  die: IDiceObject[];
}

export default function Die({ die }: IDie) {
  return (
    <div className="die">
      {die.map((dice, index) => (
        <Dice key={index} dice={dice}></Dice>
      ))}
    </div>
  );
}
