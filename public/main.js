// Focus div based on nav button click

const { response } = require("express")

// Flip one coin and show coin image to match result when button clicked
const coin = document.getElementById("coin")
coin.addEventListener("click", flipCoin)

async function flipCoin(){
    const endpoint="app/flip/"
    const url = document.baseURI+endpoint
    await fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        console.log(result);
        document.getElementById("result").innerHTML = result.flip;
        //document.getElementById("quarter").setAttribute("src".)
    }

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
