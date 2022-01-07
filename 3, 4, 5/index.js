password = document.getElementById("password")
textIn = document.querySelector(".in")


function submitInput(){
    if(password.value === "12345678"){
        textIn.textContent = "Correct Password. Nuclear Missiles are launched."
    }else{
        textIn.textContent = "Wrong Password. Security Robots have been sent to your locaiton."
    }
    console.log(password.value)
}