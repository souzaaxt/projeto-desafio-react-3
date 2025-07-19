import { useState } from "react";
import CardQuotes from "../components/CardQuotes";
import NavBar from "../components/NavBar";
import getRandomQuote from "../utils/quotesApi";
import NextQuoteButton from "../ui/NextQuoteButton";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

function Home({ onAddToFavorites }) {
  const controls = useAnimation();

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  const handleNextQuote = () => {
    controls.start({ opacity: 0 }).then(() => {
      setCurrentQuote(getRandomQuote());

      controls.start({ opacity: 1, y: 0 });
    });
  };

  return (
    <div>
      <NavBar />
      <motion.div
        className="flex flex-col max-w-2xl mx-auto rounded-2xl p-7 space-y-4 mt-20 border-1"
        animate={controls}
        initial={{ opacity: 5 }}
        transition={{ duration: 0.5 }}
      >
        <CardQuotes
          quote={currentQuote}
          onAddToFavorites={onAddToFavorites}
          variant="gray"
          variant2="home"
        />
      </motion.div>
      <NextQuoteButton onClick={handleNextQuote}></NextQuoteButton>
    </div>
  );
}

export default Home;
