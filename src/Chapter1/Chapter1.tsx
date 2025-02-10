import { useState } from "react";
import MagicWordInput from "../components/MagicWordInput";
import SubmitAndNavigateButton from "../components/SubmitAndNavigateButton";

const Chapter1 = () => {
  const CRICUT = "cricut";
  const [inputText, setInputText] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      <h1 className="text-4xl text-saddle-brown mb-3">
        Chapter One: Where Dreams Take Form
      </h1>
      <p>
        In the sanctuary where creativity blooms and readers' dreams are marked
        with grace, your journey begins. The Wayfinder's surface shimmers with
        golden script, each letter flowing like ink across parchment:
      </p>
      <div className="flex flex-col gap-2 m-3 bg-rose-pink p-3 rounded-sm italic shadow-md">
        <p>
          "In this space where art meets story, Where bookish dreams find their
          glory, Seek the place where you create Those perfect pauses in
          readers' fate.
        </p>
        <p>
          Among tools that guide creative flight, And craft the vessels for
          margin-side delight, Your gift awaits, artfully concealed Where
          precision's touch is revealed.
        </p>
        <p>
          What guides the hand that marks the way, Keeps inspiration's lines
          from going astray, Measures twice so dreams stay true, Guards the
          magic in all you do?"
        </p>
      </div>
      <p>
        Let your creator's intuition guide you to the answer, beloved. After
        all, you've mastered the art of marking life's most memorable moments.
      </p>
      <MagicWordInput value={inputText} setValue={setInputText} />
      <SubmitAndNavigateButton
        guess={inputText}
        magicWord={CRICUT}
        navigateTo="/chapter1/puzzle"
      />
    </div>
  );
};

export default Chapter1;
