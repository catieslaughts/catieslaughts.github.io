var quotes = ["quotes/billnye_oneline.txt"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var fileName = quotes[randomNumber]
  
  fetch("quotes/billnye_oneline.txt").then((res) => res.text()).then((text) => {
    var quote = text
  }).catch((e) => console.error(e));
  document.getElementById('quoteDisplay').innerHTML = quote
}
