// functions - input, code, output

let greetUser = function(){
    console.log('welcome users')
}

greetUser();

let square = function(num){

    let result = num * num;
    return result;
}

let value = square(3)
let otherValue = square(10)

console.log(value);
console.log(otherValue)

let convertFahrenheittoCelsius = function(fahrenheit){

    let celsius = (fahrenheit - 32) * 5 / 9
    // 32 ->0, 68-> 20

    return celsius;
}

console.log(convertFahrenheittoCelsius(32))

console.log(convertFahrenheittoCelsius(68))


console.log(convertFahrenheittoCelsius(100))

