import { useEffect } from "react";
import { GameBoard } from "./components/GameBoard";
import { useGame } from "./hooks/useGame";
import { WordleProps } from "./types";
import Keyboard from "./components/keyboard/Keyboard";

export const WordleGame: React.FC<WordleProps> = ({
  word,
  onWin,
  onLose,
  onGuess,
}) => {
  const { gameState, submitGuess, addLetter, removeLetter, resetGame } =
    useGame({
      word: word.toUpperCase(),
      onWin,
      onLose,
      onGuess,
    });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameState.gameStatus !== "playing") return;

      if (event.key === "Enter") {
        submitGuess();
      } else if (event.key === "Backspace") {
        removeLetter();
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        addLetter(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [submitGuess, addLetter, removeLetter, gameState.gameStatus]);

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <div className="space-y-8">
        {gameState.gameStatus !== "playing" && (
          <div className="text-center">
            <p className="text-xl mb-2">
              {gameState.gameStatus === "won"
                ? "Way to go!! You unlocked the next clue! 🎉"
                : `Game Over! The word was ${word.toUpperCase()}`}
            </p>
            <button
              onClick={resetGame}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}

        <GameBoard gameState={gameState} targetWord={word.toUpperCase()} />

        <Keyboard
          onKey={addLetter}
          onEnter={submitGuess}
          onBackspace={removeLetter}
          letterStates={gameState.letterStates}
        />
      </div>
    </div>
  );
};

// Usage example:
/*
import { WordleGame } from './components/WordleGame';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Daily Wordle</h1>
      <WordleGame 
        word="REACT"
        onWin={() => console.log('Game won!')}
        onLose={() => console.log('Game lost')}
        onGuess={(guess) => console.log('New guess:', guess)}
      />
    </div>
  );
};
*/
