import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  const { theme } = useContext(ThemeContext);

  const linkStyles =
    "px-3 py-1 rounded-sm text-base leading-7 transition-all duration-300";

  return (
    <nav className="flex justify-between border-b-1 border-gray-300">
      <div className="ml-34 mt-6 mb-6 font-bold text-2xl">Quotely</div>
      <div className=" flex flex-row space-x-4 mr-30 mt-6 mb-6 font-light text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyles} 
        ${
          isActive
            ? theme === "dark"
              ? "text-black bg-white  border border-white"
              : "text-black bg-transparent border border-black hover:border hover:border-gray-600 dark:text-black dark:boder white"
            : theme === "dark"
            ? "text-white bg-gray-900  border border-white"
            : "text-black bg-transparent border border-white hover:border hover:border-gray-600 dark:text-black dark:boder white"
        }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${linkStyles} ${
              isActive
                ? theme === "dark"
                  ? "text-black bg-white  border border-white"
                  : "text-black bg-transparent border border-black hover:border hover:border-gray-600 dark:text-black dark:boder white"
                : theme === "dark"
                ? "text-white bg-gray-900  border border-white"
                : "text-black bg-transparent border border-white hover:border hover:border-gray-600 dark:text-black dark:boder white"
            }`
          }
        >
          Favorites
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${linkStyles} ${
              isActive
                ? theme === "dark"
                  ? "text-black bg-white border border-white"
                  : "text-black bg-transparent border border-black hover:border hover:border-gray-600 dark:text-black dark:boder white"
                : theme === "dark"
                ? "text-white bg-gray-900  border border-white"
                : "text-black bg-transparent border border-white hover:border hover:border-gray-600 dark:text-black dark:boder white"
            }`
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
