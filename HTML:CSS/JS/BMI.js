
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
function Calculate_BFP() {
    var BMI = document.getElementById("BMI").value
    var age = document.getElementById("Age").value
    var gender = document.getElementById("Gender").value.toUpperCase()
    if(gender == "M"){
        var BFP = (1.20 * BMI) + (0.23 * age) - 16.2
    }
    else if(gender == "F"){
        var BFP = (1.20 * BMI) + (0.23 * Age) - 5.4
    }
    else {
        alert("Error! I can only take either M or F as an input")
    }
}