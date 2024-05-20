function convert(){
<<<<<<< HEAD
    const celsius = document.getElementById('celsius').value ;
    const fahrenheit = (celsius * 9/5) +32 ;

    document.getElementById('result').innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`; 
}
=======

let celsius = parseFloat(document.getElementById('celsius'));
let result = document.getElementById("result");

let fahrenheit = (celsius * 9/5) + 32;
result.innerHTML = "°C to °F is: " + fahrenheit.toFixed(2)
// document.getElementById('result').innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F"
}


>>>>>>> 72a7eab94bebf021c5d5a67f2fe78bfb2f90ba41
