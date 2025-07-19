import BaseButton from "../ui/BaseButton";

function CardQuotes({ variant, quote, onAddToFavorites, handleRemoveQuote }) {
  const buttonToShow =
    variant === "gray" ? (
      <BaseButton onClick={() => onAddToFavorites?.(quote)} variant="gray">
        Add to Favorites
      </BaseButton>
    ) : (
      <BaseButton onClick={() => handleRemoveQuote(quote.id)} variant="red">
        Remove
      </BaseButton>
    );

  return (
    <div>
      <blockquote className="font-serif text-2xl leading-10">
        {quote.text}
      </blockquote>
      <p className="flex justify-end font-sans italic mb-7">
        {quote.author}
      </p>
      {buttonToShow}
    </div>
  );
}

export default CardQuotes;
