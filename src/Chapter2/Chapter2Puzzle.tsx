import { useState } from "react";
import MagicWordInput from "../components/MagicWordInput";
import SubmitAndNavigateButton from "../components/SubmitAndNavigateButton";
import HintButton from "../components/HintButton";

const Chapter2Puzzle = () => {
  const SHELF = "shelf";
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      <div>
        <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
          Hidden Chapters
        </h1>
        <p>
          Use your investigation and perception skills to crack the code.
          Unscramble each word and whisper the magical word when you've got it.
          If you need help, don't forget you can ask for a hint!
        </p>
      </div>
      <div className="self-center text-center text-4xl">
        {/* SWOON */}
        <p className="py-2 text-deep-purple">WONOS</p>
        {/* ENCHANT */}
        <p className="py-2 text-deep-purple">CHNTANE</p>
        {/* LOVE */}
        <p className="py-2 text-deep-purple">VELO</p>
        {/* HEART */}
        <p className="py-2 text-deep-purple">ERTAH</p>
        {/* FLUTTER */}
        <p className="py-2 text-deep-purple">TRUTLEF</p>
      </div>
      <div>
        <MagicWordInput value={inputText} setValue={setInputText} />
        <SubmitAndNavigateButton
          guess={inputText}
          magicWord={SHELF}
          navigateTo="/chapter2/puzzle/post"
        />
        <HintButton />
      </div>
    </div>
  );
};

export default Chapter2Puzzle;
