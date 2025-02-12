import { useState } from "react";
import MagicWordInput from "../components/MagicWordInput";
import SubmitAndNavigateButton from "../components/SubmitAndNavigateButton";

const Chapter1PostPuzzle = () => {
  const WHISPER = "enchant the next chapter";
  const [found, setFound] = useState(false);
  const [inputText, setInputText] = useState("");

  return (
    <div className="p-6">
      <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
        Brilliant!
      </h1>
      <p>
        Your gift awaits where your creative journey begins, nestled among the
        tools that help bring your visions to life - those lovely markers for
        romance readers seeking their next adventure, and the thoughtfully
        designed bags that invite readers to pour their hearts into margins.
      </p>

      {found ? (
        <div className="flex flex-col gap-3 mt-3">
          <p>
            How fitting that your first treasure lies here, where imagination
            takes tangible form. Every bookmark you craft is an invitation to
            adventure, every annotation bag a vessel for readers' deepest
            thoughts. You've created more than just products – you've crafted
            companions for countless literary journeys, from sweet romantic
            escapes to passionate adventures.
          </p>

          <p>
            Your art gives readers permission to pause, to feel, to mark every
            precious moment worth remembering. From your elegantly suggestive
            designs to your practical annotation solutions, you've mastered the
            art of making reading a more personal experience.
          </p>

          <p>
            When you're ready to turn the page to your next adventure, whisper
            "Enchant the Next Chapter" to your Wayfinder.
          </p>
          <MagicWordInput value={inputText} setValue={setInputText} />
          <SubmitAndNavigateButton
            guess={inputText}
            magicWord={WHISPER}
            navigateTo="/chapter2"
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

export default Chapter1PostPuzzle;
