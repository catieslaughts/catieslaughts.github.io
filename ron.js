var quotes = ["quotes/billnye_oneline.html"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var fileName = quotes[randomNumber]
  var info = '<object type="text/html" data="'.concat(fileName,'" ></object>');
  document.getElementById('quoteDisplay').innerHTML = info;
}
