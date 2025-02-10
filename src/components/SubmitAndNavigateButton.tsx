import { useNavigate } from "react-router";

interface SubmitButtonProps {
  guess: string;
  magicWord: string;
  navigateTo: string;
}

const SubmitAndNavigateButton = ({ guess, magicWord }: SubmitButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className="border w-full my-3 border-dusty-rose rounded-4xl h-12 disabled:bg-deep-gray disabled:opacity-75 disabled:text-light-pink disabled:border-0 shadow-md"
      disabled={guess.trim().toLowerCase() !== magicWord}
      onClick={() => navigate("/chapter1/puzzle")}
    >
      Submit
    </button>
  );
};

export default SubmitAndNavigateButton;
