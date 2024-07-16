var quotes = ["quotes/billnye.html", "quotes/test.html"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var fileName = quotes[randomNumber]
  var info = '<object type="text/html" data="'.concat(fileName,'" ></object>');
  document.getElementById('quoteDisplay').innerHTML = '<object type="text/html" data="quotes/billnye.html" ></object>';
}
