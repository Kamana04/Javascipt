var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6    //dice1-6
var randomImgSource = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomNumber1 > randomNumber2)
{
	document.querySelectorAll("h1").innerHTML = "player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
	document.querySelector("h1").innerHTML = "player 2 wins";
}
else
{
	document.querySelector("h1").innerHTML = "draw";
}
