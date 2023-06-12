document.querySelector(".play").addEventListener("click",function () {

var randomNumber1;
randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImgSource =  randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImgSource );

var randomNumber2;
randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImgSource2 );



//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🏆 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🏆";
}
else {
  document.querySelector("h2").innerHTML = "Draw!";
}
};

document.querySelector(".reset").addEventListener("click",function() {
    location.reload();
});                                                 
                                                 
