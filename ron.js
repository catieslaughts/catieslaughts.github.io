var quotes = [
  '<p align="center"><font size="+1"><b>"When we explore the cosmos, we come to believe and prove that we can solve problems that have never been solved. It brings out the best in us."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
  '<p align="center"><font size="+1"><b>"Nothing in life is to be feared; it is only to be understood."</b></font></p><p align="right"><font size="+1"><b>-Maria Salomea Skłodowska-Curie</b></font></p>',
  '<p align="center"><font size="+1"><b>"I have loved the stars too fondly to be fearful of the night."</b></font></p><p align="right"><font size="+1"><b>-Sarah Williams</b></font></p>',
  '<p align="center"><font size="+1"><b>"Women, therefore, who have taken up any branch of science... need not be discouraged in it.... Labor honestly, conscientiously and steadily, and recognition and success must crown your efforts in the end."</b></font></p><p align="right"><font size="+1"><b>-Williamina Fleming</b></font></p>',
  '<p align="center"><font size="+1"><b>"I wondered had I really oversold the Hubble. I have to admit that, since, I have been convinced that I didn\'t."</b></font></p><p align="right"><font size="+1"><b>-Nancy Grace Roman</b></font></p>',
  '<p align="center"><font size="+1"><b>"To survive as a species on this planet, we\'re going to have to see ourselves as Earthlings."</b></font></p><p align="right"><font size="+1"><b>-Mae Jemison</b></font></p>',
  '<p align="center"><font size="+1"><b>"I\'m not somebody who gets teared up or anything, but I still look up at the stars, and it gives me hope, and it gives me energy."</b></font></p><p align="right"><font size="+1"><b>-Mae Jemison</b></font></p>',
  '<p align="center"><font size="+1"><b>"I like to think of ideas as potential energy. They\'re really wonderful, but nothing will happen until we risk putting them into action."</b></font></p><p align="right"><font size="+1"><b>-Mae Jemison</b></font></p>',
  '<p align="center"><font size="+1"><b>"I hope that we continue with exploration."</b></font></p><p align="right"><font size="+1"><b>-Margaret H. Hamilton</b></font></p>',
  '<p align="center"><font size="+1"><b>"We are the representatives of the cosmos; we are an example of what hydrogen atoms can do, given 15 billion years of cosmic evolution."</b></font></p><p align="right"><font size="+1"><b>-Carl Sagan</b></font></p>',
  '<p align="center"><font size="+1"><b>"Science is a way of thinking much more than it is a body of knowledge."</b></font></p><p align="right"><font size="+1"><b>-Carl Sagan</b></font></p>',
  '<p align="center"><font size="+1"><b>"The universe is not required to be in perfect harmony with human ambition."</b></font></p><p align="right"><font size="+1"><b>-Carl Sagan</b></font></p>',
  '<p align="center"><font size="+1"><b>"The boundary between space and the earth is purely arbitrary."</b></font></p><p align="right"><font size="+1"><b>-Carl Sagan</b></font></p>',
  '<p align="center"><font size="+1"><b>"I\'ve discovered that half the people would love to go into space and there\'s no need to explain it to them. The other half can\'t understand and I couldn\'t explain it to them."</b></font></p><p align="right"><font size="+1"><b>-Sally Ride</b></font></p>',
  '<p align="center"><font size="+1"><b>"The stars don\'t look bigger, but they do look brighter."</b></font></p><p align="right"><font size="+1"><b>-Sally Ride</b></font></p>',
  '<p align="center"><font size="+1"><b>"Science is fun. Science is curiosity. We all have natural curiosity. Science is a process of investigating. It\'s posing questions and coming up with a method. It\'s delving in."</b></font></p><p align="right"><font size="+1"><b>-Sally Ride</b></font></p>',
  '<p align="center"><font size="+1"><b>"I felt very honored, and I knew that people would be watching very closely, and I felt it was very, very important that I do a good job."</b></font></p><p align="right"><font size="+1"><b>-Sally Ride</b></font></p>',
  '<p align="center"><font size="+1"><b>"There is one thing that I can definitely say about the world as it exists right now: We are, at this moment, both creating and solving problems faster than we ever have before. So your job — the only thing anyone can ask of you as a human — is to solve more problems than you create. (Also take care of yourself and have a good time, ideally.)"</b></font></p><p align="right"><font size="+1"><b>-Hank Green</b></font></p>',
  '<p align="center"><font size="+1"><b>"I think curiosity is the best human emotion because while love is the opposite of hate, the source of hate is fear, and curiosity is the opposite of fear."</b></font></p><p align="right"><font size="+1"><b>-Hank Green</b></font></p>',
  '<p align="center"><font size="+1"><b>"Read books. Care about things. Get excited. Try not to be too down on yourself. Enjoy the ever present game of knowing."</b></font></p><p align="right"><font size="+1"><b>-Hank Green</b></font></p>',
  '<p align="center"><font size="+1"><b>"I find it useful to have a list of thoughts that might go somewhere. I don\'t know where they\'re going, and no, you can\'t see it."</b></font></p><p align="right"><font size="+1"><b>-Hank Green</b></font></p>',
  '<p align="center"><font size="+1"><b>"The test will last your entire life, and it will be comprised of the millions of decisions that, when taken together, will make your life yours. And everything, everything, will be on it."</b></font></p><p align="right"><font size="+1"><b>-John Green</b></font></p>',
  '<p align="center"><font size="+1"><b>"In the grand scheme of things, maybe nothing will matter, but we don\'t live in the grand scheme of things--we live here in the day-to-day"</b></font></p><p align="right"><font size="+1"><b>-John Green</b></font></p>',
  '<p align="center"><font size="+1"><b>"Everyone you will ever meet knows something you don’t."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
  '<p align="center"><font size="+1"><b>"Science rules!"</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
  '<p align="center"><font size="+1"><b>"To leave the world better than you found it, sometimes you have to pick up other people’s trash."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
  '<p align="center"><font size="+1"><b>"You and I are made of stardust. We are the stuff of exploded stars. We are therefore, at least 1 way that the Universe knows itself. That, to me, is astonishing."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
  '<p align="center"><font size="+1"><b>"Science is the key to our future, and if you don’t believe in science, then you’re holding everybody back."</b></font></p><p align="right"><font size="+1"><b>-Bill Nye</b></font></p>',
];

//'<p align="center"><font size="+1"><b>"QUOTE"</b></font></p><p align="right"><font size="+1"><b>-PERSON</b></font></p>',

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var quote = quotes[randomNumber];
  document.getElementById('quoteDisplay').innerHTML = quote
}
