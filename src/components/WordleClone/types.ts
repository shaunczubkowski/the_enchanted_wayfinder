export type LetterState = "correct" | "present" | "absent" | "empty";

export interface GameState {
  guesses: string[];
  currentGuess: string;
  gameStatus: "playing" | "won" | "lost";
  letterStates: Map<string, LetterState>;
}

export interface WordleProps {
  /** The word players need to guess (5 letters) */
  word: string;
  /** Optional callback when game is won */
  onWin?: () => void;
  /** Optional callback when game is lost */
  onLose?: () => void;
  /** Optional callback for each guess */
  onGuess?: (guess: string) => void;
}

export interface KeyboardProps {
  onKey: (key: string) => void;
  onEnter: () => void;
  onBackspace: () => void;
  letterStates: Map<string, LetterState>;
}
