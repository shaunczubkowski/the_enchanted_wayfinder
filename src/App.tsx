import { useState } from "react";
import MagicWordInput from "./components/MagicWordInput";
import SubmitAndNavigateButton from "./components/SubmitAndNavigateButton";

function App() {
  const PROMISES = "promises";
  const [inputText, setInputText] = useState<string>("");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img
        className="self-center"
        alt="Animated logo for the application, The Enchanted Wayfinder."
        src="The-Enchanted.gif"
      />
      <div className="flex flex-col gap-2.5">
        <MagicWordInput value={inputText} setValue={setInputText} />
        <SubmitAndNavigateButton
          guess={inputText}
          magicWord={PROMISES}
          navigateTo="/chapter1"
        />
      </div>
    </div>
  );
}

export default App;
