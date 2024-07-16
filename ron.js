var quotes = ["quotes/billnye.html"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var test = '<object type="text/html" data="quotes/billnye_oneline.html" ></object>';
  document.getElementById('quoteDisplay').innerHTML = test;
}
