import React from "react";
import { LetterState } from "../types";

interface GameTileProps {
  letter: string;
  state: LetterState;
}

export const GameTile: React.FC<GameTileProps> = ({ letter, state }) => {
  const stateClasses = {
    empty: "border-gray-300",
    correct: "bg-green-500 text-white border-green-500",
    present: "bg-yellow-500 text-white border-yellow-500",
    absent: "bg-gray-500 text-white border-gray-500",
  };

  return (
    <div
      className={`
        w-14 h-14 border-2 m-1
        flex items-center justify-center
        text-2xl font-bold
        transition-colors duration-500
        ${stateClasses[state]}
      `}
      role="cell"
      aria-label={`${letter || "Empty"} - ${state}`}
    >
      {letter}
    </div>
  );
};
