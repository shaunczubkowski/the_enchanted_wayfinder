import { KeyboardProps } from "../../types";

const Keyboard = ({
  onKey,
  onEnter,
  onBackspace,
  letterStates,
}: KeyboardProps) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const getKeyClass = (key: string): string => {
    if (key === "Enter" || key === "⌫") {
      return "bg-gray-200 hover:bg-gray-300";
    }

    const state = letterStates.get(key);
    switch (state) {
      case "correct":
        return "bg-green-500 text-white hover:bg-green-600";
      case "present":
        return "bg-yellow-500 text-white hover:bg-yellow-600";
      case "absent":
        return "bg-gray-500 text-white hover:bg-gray-600";
      default:
        return "bg-gray-200 hover:bg-gray-300";
    }
  };

  const handleClick = (key: string) => {
    if (key === "Enter") {
      onEnter();
    } else if (key === "⌫") {
      onBackspace();
    } else {
      onKey(key);
    }
  };

  return (
    <div className="mt-8 max-w-full px-1 sm:px-4">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center mb-1 sm:mb-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`
                mx-0.5 p-1 rounded
                font-bold text-sm
                transition-colors duration-150
                ${key.length > 1 ? "w-16" : "w-8"}
                h-12 sm:h-14
                sm:mx-1 sm:w-10
                ${key.length > 1 ? "sm:w-20" : "sm:w-10"}
                ${getKeyClass(key)}
              `}
              aria-label={key === "⌫" ? "Backspace" : key}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
