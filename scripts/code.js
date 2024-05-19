function convert(){

let celsius = parseFloat(document.getElementById('celsius'));
let result = document.getElementById("result");

let fahrenheit = (celsius * 9/5) + 32;
result.innerHTML = "°C to °F is: " + fahrenheit.toFixed(2)
// document.getElementById('result').innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F"
}


