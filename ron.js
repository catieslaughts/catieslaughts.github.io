var quotes = [
  ""
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var quote = quotes[randomNumber];
  
  document.getElementById('quoteDisplay').innerHTML = quote
}
