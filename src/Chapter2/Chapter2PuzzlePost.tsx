import { useState } from "react";
import MagicWordInput from "../components/MagicWordInput";
import SubmitAndNavigateButton from "../components/SubmitAndNavigateButton";

const Chapter2PostPuzzle = () => {
  const WHISPER = "loves next page";
  const [found, setFound] = useState(false);
  const [inputText, setInputText] = useState("");

  return (
    <div className="p-6 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
          Ah, but which shelf?
        </h1>
        <p className="mb-3">Perhaps this final riddle will illuminate:</p>
        <div className="flex flex-col bg-rose-pink p-3 rounded-sm italic shadow-md mb-3">
          <div className="my-1">
            {/* TODO: Update once book is selected to hide gc. */}
            <p>Between the duke and the CEO,</p>
            <p>Past the bad boy's roguish glow,</p>
            <p>Where billionaires and florists meet,</p>
            <p>Your gift awaits, the journey sweet.</p>
          </div>
        </div>
      </div>

      {found ? (
        <div className="flex flex-col gap-3">
          <p>
            What better place to hide a gateway to new stories than among the
            ones you already cherish? Each book on these shelves is a world
            you've visited, a love story you've witnessed, a journey you've
            treasured. May this gift open the door to countless more adventures,
            more passionate encounters, more moments worth bookmarking.
          </p>

          <p>
            Your collection speaks volumes about your heart – how it embraces
            love in all its forms, from sweet first glances to the heat of
            desire, from quiet moments of longing to grand gestures of devotion.
            Each story here is a testament to your belief in love's endless
            possibilities.
          </p>

          <p>
            When you're ready to write the next chapter of our adventure,
            whisper "Love's Next Page" to your Wayfinder.
          </p>
          <MagicWordInput value={inputText} setValue={setInputText} />
          <SubmitAndNavigateButton
            guess={inputText}
            magicWord={WHISPER}
            navigateTo="/chapter3"
          />
        </div>
      ) : (
        <button
          disabled={found}
          className="border w-full my-3 border-dusty-rose rounded-4xl h-12 shadow-md disabled:bg-deep-gray disabled:opacity-75 disabled:text-light-pink disabled:border-0"
          onClick={() => setFound((prev) => !prev)}
        >
          Found!
        </button>
      )}
    </div>
  );
};

export default Chapter2PostPuzzle;
