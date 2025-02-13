import HintButton from "../components/HintButton";
import { WordleGame } from "../components/WordleClone/WordleGame";
import { useNavigate } from "react-router";

const Chapter1Puzzle = () => {
  const navigate = useNavigate();
  const CUPID = "CUPID";

  return (
    <div className="p-6 flex flex-col min-h-screen justify-center">
      <p className="mb-5">
        Clever darling! But before you discover your first gift, let's play a
        game of "Creator's Words" - a puzzle after your own literary heart. You
        have six attempts to guess the word to unlock the next clue!
      </p>
      <WordleGame
        word={CUPID}
        onWin={() => navigate("/chapter1/puzzle/post")}
      />
      <div>
        <HintButton />
      </div>
    </div>
  );
};

export default Chapter1Puzzle;
