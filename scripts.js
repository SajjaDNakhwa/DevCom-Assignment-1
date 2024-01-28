//funtion to greet in different languages when hovered
const button = document.querySelector('.greeting');
button.addEventListener('mouseover', () => {
  var greet = ["Greetings!","Hóla!","Namaste!","Marhaba!","Vanakkam!","Nǐ Hǎo!","Bonjour!","Konnichiwa!","Ciao!","Namaskaar!"];
  var ran_greet = greet[Math.floor(Math.random()*greet.length)];
  button.innerHTML= ran_greet;
});
