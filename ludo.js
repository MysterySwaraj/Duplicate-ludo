var randomno1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "download" + randomno1 + ".png";
var randomImageSource="image/"+ randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomno2 = Math.floor(Math.random()*6)+1;
var randomImage = "download" + randomno2 + ".png";
var randomImagSource="image/"+ randomImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagSource);

if(randomno1>randomno2){
   document.querySelector("h1").innerHTML="🥂Player1 Wins!";
}
else if(randomno1<randomno2){
       document.querySelector("h1").innerHTML="🥂Player2 Wins!";
}
else{
 document.querySelector("h1").innerHTML="🤭OPPS Draw";
}