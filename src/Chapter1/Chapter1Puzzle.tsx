const Chapter1Puzzle = () => {
  const MOMENT = "moment";

  return (
    <div className="p-6 flex flex-col justify-between min-h-screen">
      <p>
        Clever darling! But before you discover your first gift, let's play a
        game of "Creator's Words" - a puzzle after your own literary heart. You
        have six attempts to guess today's word, with each guess revealing which
        letters are correct and in the right position (shown in gold) or correct
        but in the wrong position (shown in silver).
      </p>
      {/* Wordle Clone*/}
      <div className="text-center">Wordle Clone</div>
      <div>Hint...</div>
    </div>
  );
};

export default Chapter1Puzzle;
