import NavBar from "../components/NavBar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <NavBar />

      <div className=" flex flex-col items-center mt-44">
        <div className=" border-1 flex justify-between p-4 rounded-lg w-full max-w-sm shadow hover:bg-gray-900 hover:text-white">
          <div className="flex flex-col py-5 px-10">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <p className="text-base">Appearance</p>
          </div>

          <div>
            <button
              onClick={toggleTheme}
              className={`font-mono font-medium text-sm mt-16 border-1 px-4 py-2 rounded-lg whitespace-nowrap  hover:cursor-pointer transition-all duration-400
                ${
                  theme === "dark"
                    ? "bg-gray-900 hover:bg-white hover:text-black"
                    : "hover:bg-white hover:text-black"
                }
              `}
            >
              {theme == "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
