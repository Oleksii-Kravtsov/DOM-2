h1 = document.querySelector("h1")

function alertUser(){
    h1.textContent = "Hey! I told you not to hover over me!";
    alert("!ALERT!")
    changeBackgroundColor()
}

function sus(){
    h1.textContent = "Too late! You're done for! 😈"
}

function changeBackgroundColor(){
    h1.style.backgroundColor= "red"; 
}