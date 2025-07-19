import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [favorites, setFavorites] = useState([]);

  const { theme } = useContext(ThemeContext);

  const handleAddToFavorites = (newQuote) => {
    setFavorites((prevFavorites) => [...prevFavorites, newQuote]);
  };

  const handleRemoveQuote = (quoteToRemove) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((quo) => quo.id !== quoteToRemove)
    );
  };

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                handleRemoveQuote={handleRemoveQuote}
                favorites={favorites}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
