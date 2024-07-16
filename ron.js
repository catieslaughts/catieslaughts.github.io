var quotes = ["quotes/billnye.html"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = 'TEST';
}
