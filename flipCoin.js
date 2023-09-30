var coin = document.querySelector(".coin")
var audio = document.querySelector(".flipSound")
var result = document.querySelector(".result")

// randomness

coin.addEventListener("click" ,randomness)

function randomness(){

    coin.style.transform = "rotateY(0deg)"

setTimeout(function(){

    coin.style.transform = "rotateY(1440deg)";
    
    var random = Math.random();
    if(random < 0.5){
        console.log("Heads");
        coin.style.backgroundImage = 'url("./heads.png")';
        result.textContent = "HEADS"
        
    }
    else{
        console.log("Tails");
       coin.style.backgroundImage = 'url("./tails.png")';
       result.textContent = "TAILS"
        
        
    }
    audio.play()
},100)




}