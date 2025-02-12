import WordleClone from "../components/WordleClone/WordleClone";

const Chapter1Puzzle = () => {
  const CUPID = "CUPID";

  return (
    <div className="p-6 flex flex-col justify-between min-h-screen">
      <p>
        Clever darling! But before you discover your first gift, let's play a
        game of "Creator's Words" - a puzzle after your own literary heart. You
        have six attempts to guess today's word.
      </p>
      {/* Wordle Clone*/}
      <WordleClone wordOfTheDay={CUPID} />
      <div>Hint...</div>
    </div>
  );
};

export default Chapter1Puzzle;
