import { useNavigate } from "react-router";

const Chapter2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
        Chapter Two: The Library of Love
      </h1>
      <p>
        As your fingertips leave your creative sanctuary, the Wayfinder's
        surface ripples like pages caught in a gentle breeze, revealing text
        that seems to float between worlds:
      </p>
      <div className="flex flex-col bg-rose-pink p-3 rounded-sm italic shadow-md">
        <div className="my-1">
          <p>Where stories stand like loyal guards,</p>
          <p>Their spines aligned like love notes carved,</p>
          <p>Precious worlds stack floor to ceiling—</p>
          <p>Each one a universe revealing.</p>
        </div>
        <div className="my-1">
          <p>Through chapters sweet and pages bold,</p>
          <p>Where heroes chase what hearts foretold,</p>
          <p>A treasure waits in paper seas,</p>
          <p>Between the tales that set hearts free.</p>
        </div>
        <div className="my-1">
          <p>I rest where passion's stories shine,</p>
          <p>Near tales that make your heart entwine,</p>
          <p>You'll find me where the lovers meet,</p>
          <p> Where happy endings feel complete.</p>
        </div>
      </div>
      <p>
        Before you search these literary seas, dear heart, let's play a game of
        "Hidden Chapters." Unscramble these five book-themed words, each one
        bringing you closer to where your gift awaits. The first letter of each
        solved word will guide your way.
      </p>
      <button
        className="border w-full my-3 border-dusty-rose rounded-4xl h-12 shadow-md disabled:bg-deep-gray disabled:opacity-75 disabled:text-light-pink disabled:border-0"
        onClick={() => navigate("/chapter2/puzzle")}
      >
        Play!
      </button>
    </div>
  );
};

export default Chapter2;
