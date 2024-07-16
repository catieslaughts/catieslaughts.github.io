var quotes = ["quotes/billnye.html"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = '<object type="text/html" data="quotes/billnye.html" ></object>';
}
