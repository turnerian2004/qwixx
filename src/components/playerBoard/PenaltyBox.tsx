import "./PenaltyBox.css";
import "../../App.css";

interface IPenaltyBox {
  isCrossedOff: boolean;
}

export default function PenaltyBox({ isCrossedOff }: IPenaltyBox) {
  const isPenaltyBoxCrossedOff: string = isCrossedOff ? "CrossOffBox" : "";

  return (
    <div className={`penaltyBox centreAll ${isPenaltyBoxCrossedOff}`}></div>
  );
}
