import { useState } from "react";
import MagicWordInput from "../components/MagicWordInput";
import HintButton from "../components/HintButton";
import { useNavigate } from "react-router";

const Chapter3Puzzle = () => {
  const riddles: { riddle: string; secretWord: string }[] = [
    {
      riddle:
        "Soft as twilight, warm as love's embrace, I rise in tendrils, set the perfect pace.",
      secretWord: "steam",
    },
    {
      riddle:
        "Dancing flames in evening's heart, Silent light, I play my part.",
      secretWord: "candle",
    },
    {
      riddle:
        "Liquid starlight, crystal clear, Drawing tensions far from here.",
      secretWord: "water",
    },
    {
      riddle:
        "Nature's perfume, sweet release, Bringing minds to perfect peace.",
      secretWord: "lavender",
    },
  ];

  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (currentRiddle === riddles.length - 1) {
      navigate("/chapter3/puzzle/post");
    } else {
      setCurrentRiddle((prev) => prev + 1);
      setInputText("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      <div>
        <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
          Elements of Enchantment
        </h1>
        <p>Whisper the correct words to unlock your final clue.</p>
      </div>
      <p className="text-2xl ">{riddles[currentRiddle].riddle}</p>

      <div>
        <MagicWordInput value={inputText} setValue={setInputText} />
        <button
          className="border w-full my-3 border-dusty-rose rounded-4xl h-12 disabled:bg-deep-gray disabled:opacity-75 disabled:text-light-pink disabled:border-0 shadow-md"
          disabled={
            inputText.trim().toLowerCase() !== riddles[currentRiddle].secretWord
          }
          onClick={handleOnClick}
        >
          Whisper
        </button>
      </div>

      <HintButton />
    </div>
  );
};

export default Chapter3Puzzle;
