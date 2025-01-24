const quotes = [
  "Believe you can and you're halfway there.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
];

const generateBTN = document.getElementById("generate-button");
const copyBTN = document.getElementById("copy-button");
const quotesContainer = document.getElementById("generated-quotes-container");

generateBTN.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  const randomQuotes = quotes[random];
  quotesContainer.textContent = randomQuotes;

  // Check if screen width is 370px or less
  if (window.innerWidth <= 370) {
    quotesContainer.style.fontSize = "1em"; // Apply 1em font size if screen width is <= 370px
  } else {
    quotesContainer.style.fontSize = "1.5em"; // Default font size for larger screens
  }

  quotesContainer.style.fontFamily = "Sour Gummy";
});

copyBTN.addEventListener("click", () => {
  navigator.clipboard.writeText(quotesContainer.textContent);
  copyBTN.innerHTML = "Copied";

  setTimeout(() => {
    copyBTN.innerHTML = "Copy";
  }, 1000);
});
