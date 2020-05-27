

const url = 'https://api.unsplash.com/'

function getQuote() {
  fetch(url)
    .then(response => response.json())
    .then(data => showImage(data))
    .catch(function () {
      console.log('An error occurred')
    })
}

function showImage(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img);
}

function displayQuote(quote) {
  let text = document.getElementsByClassName('photoshere');
  text.textContent = quote
}

const newQuoteButton = document.getElementById('xhr');
newQuoteButton.addEventListener('click', getQuote);
getQuote();
