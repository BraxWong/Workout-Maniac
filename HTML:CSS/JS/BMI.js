
function Calculate() {
    var weight = document.getElementById("Weight").value
    var height = document.getElementById("Height").value
    var BMI = weight/(height*height/10000)
    alert("Your BMI is " + BMI)
}