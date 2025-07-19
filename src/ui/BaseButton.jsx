import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function BaseButton({ variant, children, onClick }) {
  const { theme } = useContext(ThemeContext);

  const baseStyles =
    "rounded-md py-3 px-3 font-mono font-medium text-sm leading-5 hover:cursor-pointer transition-all duration-300";

  const variantStyles =
    variant === "gray"
      ? theme === "dark"
        ? "bg-gray-900 text-white border-1 border-white hover:border-gray-400 active:bg-white active:text-black"
        : "border-1 hover:border-gray-400 active:bg-gray-900 active:text-white"
      : variant === "red"
      ? "bg-white hover:bg-rose-500 hover:border-gray-700 transition-all transition-300 text-black border-1"
      : "";

  return (
    <div className="flex justify-end">
      <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
        {children}
      </button>
    </div>
  );
}

export default BaseButton;
