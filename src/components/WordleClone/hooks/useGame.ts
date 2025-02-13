import { useState, useEffect, useCallback } from "react";
import { WORD_LENGTH, MAX_ATTEMPTS } from "../constants";
import { GameState, LetterState } from "../types";
import { checkGuess } from "../utils";

interface UseGameProps {
  word: string;
  onWin?: () => void;
  onLose?: () => void;
  onGuess?: (guess: string) => void;
}

export const useGame = ({ word, onWin, onLose, onGuess }: UseGameProps) => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    guesses: [],
    currentGuess: "",
    gameStatus: "playing",
    letterStates: new Map(),
  }));

  // Validate word length
  useEffect(() => {
    if (word.length !== WORD_LENGTH) {
      console.error(`Word must be ${WORD_LENGTH} letters long`);
    }
  }, [word]);

  const updateLetterStates = useCallback(
    (guess: string, states: LetterState[]) => {
      const newStates = new Map(gameState.letterStates);

      guess.split("").forEach((letter, index) => {
        const currentState = newStates.get(letter);
        const newState = states[index];

        if (!currentState || newState === "correct") {
          newStates.set(letter, newState);
        } else if (newState === "present" && currentState !== "correct") {
          newStates.set(letter, newState);
        }
      });

      return newStates;
    },
    [gameState.letterStates]
  );

  const submitGuess = useCallback(() => {
    if (gameState.currentGuess.length !== WORD_LENGTH) return;

    const guess = gameState.currentGuess.toUpperCase();
    const states = checkGuess(guess, word);
    const newLetterStates = updateLetterStates(guess, states);

    setGameState((prev) => {
      const newGuesses = [...prev.guesses, guess];
      const isWon = guess === word;
      const isLost = newGuesses.length === MAX_ATTEMPTS && !isWon;

      // Call appropriate callbacks
      if (isWon) onWin?.();
      if (isLost) onLose?.();
      onGuess?.(guess);

      return {
        ...prev,
        guesses: newGuesses,
        currentGuess: "",
        gameStatus: isWon ? "won" : isLost ? "lost" : "playing",
        letterStates: newLetterStates,
      };
    });
  }, [
    gameState.currentGuess,
    word,
    updateLetterStates,
    onWin,
    onLose,
    onGuess,
  ]);

  const addLetter = useCallback(
    (letter: string) => {
      if (
        gameState.currentGuess.length < WORD_LENGTH &&
        gameState.gameStatus === "playing"
      ) {
        setGameState((prev) => ({
          ...prev,
          currentGuess: prev.currentGuess + letter.toUpperCase(),
        }));
      }
    },
    [gameState.currentGuess.length, gameState.gameStatus]
  );

  const removeLetter = useCallback(() => {
    if (gameState.currentGuess.length > 0) {
      setGameState((prev) => ({
        ...prev,
        currentGuess: prev.currentGuess.slice(0, -1),
      }));
    }
  }, [gameState.currentGuess]);

  const resetGame = useCallback(() => {
    setGameState({
      guesses: [],
      currentGuess: "",
      gameStatus: "playing",
      letterStates: new Map(),
    });
  }, []);

  return {
    gameState,
    submitGuess,
    addLetter,
    removeLetter,
    resetGame,
  };
};
