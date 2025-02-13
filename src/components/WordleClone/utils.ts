import { WORD_LENGTH } from "./constants";
import { LetterState } from "./types";

export const checkGuess = (guess: string, target: string): LetterState[] => {
  const result: LetterState[] = Array(WORD_LENGTH).fill("absent");
  const targetLetters = target.split("");
  const guessLetters = guess.split("");

  // First pass: mark correct letters
  guessLetters.forEach((letter, i) => {
    if (letter === targetLetters[i]) {
      result[i] = "correct";
      targetLetters[i] = "#"; // Mark as used
      guessLetters[i] = "*"; // Mark as processed
    }
  });

  // Second pass: mark present letters
  guessLetters.forEach((letter, i) => {
    if (letter === "*") return; // Skip processed letters

    const targetIndex = targetLetters.indexOf(letter);
    if (targetIndex !== -1) {
      result[i] = "present";
      targetLetters[targetIndex] = "#"; // Mark as used
    }
  });

  return result;
};
