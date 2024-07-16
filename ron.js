var quotes = ["quotes/billnye.html"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var test = '<object type="text/html" data="quotes/billnye_oneline.html" ></object>';
  document.getElementById('quoteDisplay').innerHTML = '<p align="center"><font size="+1"><b>"When we explore the cosmos, we come to believe and prove that we can solve problems that have never been solved. It brings out the best in us."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>';
}
