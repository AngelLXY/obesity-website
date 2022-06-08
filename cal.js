console.log('hi')
var btn = document.getElementById('cal-btn')
console.log(btn)
btn.addEventListener("click", calBMI)
console.log(calBMI)
function calBMI() {
    var weight = document.getElementById('weightInput').value
    var height = document.getElementById('heightInput').value
    var weightVal = Number(weight)
    var heightVal = Number(height)
    console.log(weightVal, heightVal)
    var originalBMI = weightVal / (heightVal * heightVal)
    var BMI = Math.round(originalBMI)
    if (BMI < 18.5) {
        document.getElementById("result").value = "BMI: " + BMI + ' (underweight)'
    } if (BMI > 18.5 && BMI < 24.9) {
        document.getElementById("result").value = "BMI: " + BMI + ' (healthy)'
    } if (BMI > 25) {
        document.getElementById("result").value = "BMI: " + BMI + ' (overweight)'
    }
}
