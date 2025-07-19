import CardQuotes from "../components/CardQuotes";
import NavBar from "../components/NavBar";

function Favorites({ favorites, handleRemoveQuote }) {
  return (
    <>
      <NavBar />

      {favorites.length > 0 &&
        favorites.map((quote) => (
          <div className="flex flex-col max-w-2xl mx-auto rounded-2xl p-7 space-y-4 mt-20 shadow-lg border-1 border-white">
            <CardQuotes
              handleRemoveQuote={handleRemoveQuote}
              key={quote.id}
              quote={quote}
              variant="red"
            />
          </div>
        ))}
    </>
  );
}

export default Favorites;
