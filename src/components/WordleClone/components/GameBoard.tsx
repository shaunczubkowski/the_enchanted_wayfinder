import { MAX_ATTEMPTS, WORD_LENGTH } from "../constants";
import { GameState, LetterState } from "../types";
import { checkGuess } from "../utils";
import { GameTile } from "./GameTile";

interface GameBoardProps {
  gameState: GameState;
  targetWord: string;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  gameState,
  targetWord,
}) => {
  const getLetterState = (rowIndex: number, colIndex: number): LetterState => {
    if (rowIndex >= gameState.guesses.length) {
      return rowIndex === gameState.guesses.length &&
        colIndex < gameState.currentGuess.length
        ? "empty"
        : "empty";
    }

    const guess = gameState.guesses[rowIndex];
    const states = checkGuess(guess, targetWord);
    return states[colIndex];
  };

  const rows = Array(MAX_ATTEMPTS)
    .fill(null)
    .map((_, rowIndex) => {
      const tiles = Array(WORD_LENGTH)
        .fill(null)
        .map((_, colIndex) => {
          const letter =
            rowIndex < gameState.guesses.length
              ? gameState.guesses[rowIndex][colIndex]
              : rowIndex === gameState.guesses.length
              ? gameState.currentGuess[colIndex] || ""
              : "";

          return (
            <GameTile
              key={colIndex}
              letter={letter}
              state={getLetterState(rowIndex, colIndex)}
            />
          );
        });

      return (
        <div key={rowIndex} className="flex justify-center" role="row">
          {tiles}
        </div>
      );
    });

  return (
    <div className="grid gap-1" role="grid" aria-label="Wordle game board">
      {rows}
    </div>
  );
};
