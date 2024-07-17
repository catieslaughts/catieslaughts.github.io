var quotes = ["quotes/billnye_oneline.txt"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var fileName = quotes[randomNumber];
  
  var fr = new FileReader();
  fr.onload = function(e) {
    // e.target.result should contain the text
  };
  fr.readAsText(file);
  
  var quote = e.target.result
  
  document.getElementById('quoteDisplay').innerHTML = quote
}
