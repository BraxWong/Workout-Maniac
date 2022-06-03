
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
    if(gender == 'F'){
        var BFP = (1.20 * BMI) + (0.23 * age) - 5.4
        if(age > 20 && age < 40) {
            if(BFP < 21){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are underfat!"
            }
            else if(BFP > 21 && BFP < 33){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are healthy!"
            }
            else if(BFP > 33 && BFP < 39){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are overweight!"
            }
            else {
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are obese!"
            }
        }
        else if(age > 41 && age < 60){
            if(BFP < 23){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are underfat!" 
            }
            else if(BFP > 23 && BFP < 35){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are healthy!"
            }
            else if(BFP > 35 && BFP < 40){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are overweight!"
            }
            else {
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are obese!"
            }
        }
        else if(age > 61 && age < 79){
            if(BFP < 24){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are underfat!"
            }
            else if(BFP > 24 && BFP < 36){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are healthy!"
            }
            else if(BFP > 36 && BFP < 42){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are overweight!"
            }
            else {
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are obese!"
            }
        }
        else {
            document.getElementById("results").innerHTML = "You are either too old or too young for this!"
        }
    }
    else if(gender == 'M'){
        var BFP = (1.20 * BMI) + (0.23 * age) - 16.2
        if(age > 20 && age < 40){
            if(BFP < 8){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are underfat!"
            }
            else if(BFP > 8 && BFP < 19){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are healthy!"
            }
            else if(BFP > 19 && BFP < 25){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are overweight!"
            }
            else {
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are obese!"
            }
        }
        else if(age > 31 && age < 60){
            if(BFP < 11){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are underfat!"
            }
            else if(BFP > 11 && BFP < 22){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are healthy!"
            }
            else if(BFP > 22 && BFP < 27){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are overweight!"
            }
            else {
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are obese!" 
            }
        }
        if(age > 61 && age < 79){
            if(BFP < 13){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are underfat!"
            }
            else if(BFP > 13 && BFP < 25){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are healthy!"
            }
            else if(BFP > 25 && BFP < 30){
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are overweight!"
            }
            else {
                document.getElementById("results").innerHTML = "Your body fat percentage is: " + BFP + ". You are obese!"
            }
        }
        else if(age > 79){
            document.getElementById("results").innerHTML = "You are either too old or too young for this!"
        }
    }
    else {
        alert("Error! I can only take either M or F as an input")
    }
}