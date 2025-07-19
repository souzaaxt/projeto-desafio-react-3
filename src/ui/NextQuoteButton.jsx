import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NextQuoteButton({ onClick }) {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`border-1 rounded-md py-3 px-8 font-mono font-medium text-sm leading-5 hover:cursor-pointer transition-all duration-300 mt-6
        ${
          theme === "dark"
            ? "hover:border-gray-400 active:bg-white active:text-white"
            : " bg-white text-black border-black hover:border-gray-400 active:bg-black active:text-white"
        }
          `}
      >
        Next Quote
      </button>
    </div>
  );
}

export default NextQuoteButton;
