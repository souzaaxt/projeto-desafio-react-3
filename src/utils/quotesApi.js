const QUOTES = [
  {
    id: 1,
    text: "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.",
    author: "Ada Lovelace",
  },
  {
    id: 2,
    text: "The most dangerous phrase in the language is: \"We've always done it this way.",
    author: "Grace Hopper",
  },
  {
    id: 3,
    text: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine",
    author: "Alan Turing",
  },
  {
    id: 4,
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    id: 5,
    text: "Simplicity is prerequisite for reliability",
    author: "Edsger Dijkstra",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
}

export default getRandomQuote;