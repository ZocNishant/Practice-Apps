const newQuoteButton = document.querySelector("#js-new-quote");

const trumpAPI = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

async function getQuote() {
  try {
    const response = await fetch(trumpAPI);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
  } catch (err) {
    console.log(err);
    alert("Failed to fetch quote. Please try again later.");
  }
}

newQuoteButton, addEventListener("click", getQuote);
