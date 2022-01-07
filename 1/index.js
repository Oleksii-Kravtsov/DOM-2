let middle = document.querySelector(".middle")
let rightButton = document.querySelector(".right-button")
let text = undefined 

function whoIsRight(align = ""){
    if(text == undefined){
        text = document.createElement("p", {class:"text"})
        middle.insertBefore(text, rightButton)
        text.textContent = "I'm right"
    }else{
        text.textContent = "No, I'm right"
    }
    if(align.toUpperCase() == "LEFT"){
        text.style.marginLeft = "0px";
        text.style.marginRight = "auto"
        text.style.color = "green";
    }else if(align.toUpperCase() == "RIGHT"){
        text.style.marginLeft = "auto";
        text.style.marginRight = "0px"
        text.style.color = "yellow";
    }

}