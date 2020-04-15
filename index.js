var randomNumber1=Math.floor((Math.random()*6)+1);

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor((Math.random()*6)+1);

var randomDiceImage = "dice"+randomNumber2+".png";

var randomImageSource = "images/"+randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

var judul = document.querySelector("h1");
if(randomNumber1>randomNumber2){
  judul.innerHTML = "Player 1 menang!";
}else if(randomNumber1<randomNumber2){
  judul.innerHTML = "Player 2 menang!";
}else if(randomNumber1===randomNumber2){
  judul.innerHTML = "seri! refresh lagi!";
}
