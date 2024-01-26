const button = document.querySelector('.greeting');
button.addEventListener('mouseover', () => {
  var greet = ["Greetings!","Hóla!","Namaste!","Marhaba!","Vanakkam!"];
  var ran_greet = greet[Math.floor(Math.random()*greet.length)];
  button.innerHTML= ran_greet;
});
button.addEventListener('mouseout', () => {
  var greet = ["Nǐ Hǎo!","Bonjour!","Konnichiwa!","Ciao!","Namaskaar!"]
  var ran_greet = greet[Math.floor(Math.random()*greet.length)];
  button.innerHTML = ran_greet;
});