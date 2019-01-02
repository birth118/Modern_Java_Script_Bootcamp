// global scope: convertFahrenheittoCelsius, tempOne, tempTwo
    // local: celsius, fahrenheit
        // local: isFreezing

let convertFahrenheittoCelsius = function(fahrenheit){

    let celsius = (fahrenheit - 32) * 5 / 9
    // 32 ->0, 68-> 20

    if(celsius <0){
        let isFreezing = true;
    }

    return celsius;
}

let tempOne = convertFahrenheittoCelsius(32)
let tempTwo = convertFahrenheittoCelsius(68)

console.log(tempOne)
