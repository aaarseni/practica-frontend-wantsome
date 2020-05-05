
/* 
const pharagraph = document.querySelector('#quote');
let requestUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'text';
request.send();

$("#xhr").on("click", function() {
  $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes/random?exclude=[explicit]", function(json) { 
    $("#quote").html((json.value));
    });
});

request.onload = function() {
  const superHeroesText = request.response; // get the string from the response
  const superHeroes = JSON.parse(superHeroesText); // convert it to an object
  updateTweet(json);
} */

$( document ).ready(function() {
  $.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]", function(json) { 
    $("#quote").html((json.value.joke)); updateTweet(json)
  });
});

$("#xhr").on("click", function() {
  $.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]", function(json) { 
    $("#quote").html((json.value.joke));
    updateTweet(json);
  });
});

function updateTweet(json) {
  var thisQuote = json.value.joke;
  $("#tweet_btn").attr("href", "https://twitter.com/intent/tweet?text=" + thisQuote + "%0a--- ");
}