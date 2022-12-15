

// rollTheDice(p1Path,p2Path);
// whoWins(randumNumber1,randumNumber2);


document.querySelector(".btn").addEventListener("click",function(){
    var randumNumber1 = Math.floor(Math.random()*6)+1;
    var randumNumber2 = Math.floor(Math.random()*6)+1;
    rollTheDice(randumNumber1,randumNumber2);
    whoWins(randumNumber1,randumNumber2);
});


function rollTheDice(randumNumber1,randumNumber2){
document.querySelector(".img1").setAttribute("src","images/dice"+randumNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randumNumber2+".png");
}


function whoWins(randumNumber1,randumNumber2){
if(randumNumber1>randumNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randumNumber1<randumNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "🎌 Draw 🎌";
}
}


