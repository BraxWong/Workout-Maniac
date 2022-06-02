
function Calculate() {
    var weight = document.getElementById("Weight").value
    var height = document.getElementById("Height").value
    var BMI = weight/(height*height/10000)
    if(BMI > 18.5 && BMI < 24.9){
        document.getElementById("Results").innerHTML="Your BMI is " + BMI + ". You are healthy!"
    }
    else{
        document.getElementById("Results").innerHTML="Your BMI is " + BMI + ". You are not healthy!"
    }
    
}