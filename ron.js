var quotes = [
  '<p align="center"><font size="+1"><b>"When we explore the cosmos, we come to believe and prove that we can solve problems that have never been solved. It brings out the best in us."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
  '<p align="center"><font size="+1"><b>"TEST."</b></font></p><p align="right"><font size="+1"><b>-Test Test</b></font></p>',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var quote = quotes[randomNumber];
  document.getElementById('quoteDisplay').innerHTML = quote
}
