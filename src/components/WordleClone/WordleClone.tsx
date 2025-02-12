import { useCallback, useEffect, useState } from "react";

interface WordleCloneProps {
  wordOfTheDay: string;
}

const WordleClone = ({ wordOfTheDay }: WordleCloneProps) => {
  const WORD_LENGTH = 5;
  const MAX_ATTEMPTS = 6;

  const [currentAttempt, setCurrentAttempt] = useState("");
  const [attempts, setAttempts] = useState(Array(MAX_ATTEMPTS).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [won, setWon] = useState(false);

  // Handle keyboard input
  const handleKeyDown = useCallback(
    (event) => {
      if (currentRow >= MAX_ATTEMPTS) return; // TODO: Finish this logic

      if (event.key === "Enter" && currentAttempt.length === WORD_LENGTH) {
        // Check if user guessed word of the day
        if (currentAttempt.toLowerCase() === wordOfTheDay.toLowerCase()) {
          setWon(true);
        }
        const newAttempts = [...attempts];
        newAttempts[currentRow] = currentAttempt;
        setAttempts(newAttempts);
        setCurrentAttempt("");
        setCurrentRow(currentRow + 1);
      } else if (event.key === "Backspace") {
        setCurrentAttempt((prev) => prev.slice(0, -1));
      } else if (
        event.key.length === 1 &&
        event.key.match(/[a-z]/i) &&
        currentAttempt.length < WORD_LENGTH
      ) {
        setCurrentAttempt((prev) => (prev + event.key).toUpperCase());
      }
    },
    [attempts, currentAttempt, currentRow, wordOfTheDay]
  );

  // Add event listener for keyboard input
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentAttempt, currentRow, attempts, handleKeyDown]);

  const renderGrid = () => {
    const grid = [];

    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      const row = [];
      for (let j = 0; j < WORD_LENGTH; j++) {
        let letter = "";
        if (i === currentRow) {
          letter = currentAttempt[j] || "";
        } else {
          letter = attempts[i][j] || "";
        }

        row.push(
          <div
            key={`${i}-${j}`}
            className={`
              w-12 h-12 border-2 border-dusty-rose m-1
              flex items-center justify-center
              text-2xl font-bold
              ${letter ? "border-deep-purple" : ""}
              ${letter && won ? "bg-green-700" : ""}
            `}
          >
            {letter}
          </div>
        );
      }
      grid.push(
        <div key={i} className="flex justify-center">
          {row}
        </div>
      );
    }
    return grid;
  };

  return (
    <>
      <div className="p-8">
        <div
          className="focus:outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {renderGrid()}
        </div>
        <div className="mt-4 text-center text-gray-600">
          Type letters to play. Press Enter to submit.
        </div>
      </div>
    </>
  );
};

export default WordleClone;
