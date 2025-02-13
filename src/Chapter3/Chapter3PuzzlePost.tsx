import { useState } from "react";
import MagicWordInput from "../components/MagicWordInput";
import SubmitAndNavigateButton from "../components/SubmitAndNavigateButton";

const Chapter3PostPuzzle = () => {
  const WHISPER = "journey's peace";
  const [found, setFound] = useState(false);
  const [inputText, setInputText] = useState("");

  return (
    <div className="p-6 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
          Tranquility Found
        </h1>
        <p>
          Ah, you've gathered all the elements of tranquility. Now seek the
          chamber where guests find respite, where porcelain dreams await. Your
          final gift rests where still waters would gather, though the vessel
          remains dry... for now.
        </p>
      </div>
      {found ? (
        <div className="flex flex-col gap-3 mt-3 grow">
          <div className="m-3 bg-rose-pink p-3 rounded-sm italic shadow-md space-y-2">
            <p>
              Beloved treasure hunter, you've reached the final gift of our
              quest. Each fizzing sphere in this basket is a small universe of
              tranquility, waiting to transform ordinary waters into
              extraordinary moments of peace. I've chosen these for you because
              you deserve these interludes of pure serenity, these precious
              pauses in life's endless story.
            </p>
            <p>
              When you're ready to close this chapter of our adventure, whisper
              "Journey's Peace" to your Wayfinder.
            </p>
          </div>
          <MagicWordInput value={inputText} setValue={setInputText} />
          <SubmitAndNavigateButton
            guess={inputText}
            magicWord={WHISPER}
            navigateTo="/ending"
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

export default Chapter3PostPuzzle;
