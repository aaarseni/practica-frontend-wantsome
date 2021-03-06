const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

function getQuote() {
  fetch(url)
    .then(response => response.json())
    .then(data => displayQuote(data))
    .catch(function () {
      console.log('An error occurred')
    })
}

function displayQuote(quote) {
  let text = document.getElementById('quote');
  text.textContent = quote
}

const newQuoteButton = document.getElementById('xhr');
newQuoteButton.addEventListener('click', getQuote);
getQuote();
