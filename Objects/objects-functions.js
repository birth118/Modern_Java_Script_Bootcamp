let mybook1 = {
    title: '1984', 
    author: 'George Owell',
    pageCount: 306
}

let mybook2 = {
    title: 'A Peoples History', 
    author: 'Howard Schultz',
    pageCount: 281
}

let getSummary = function(book){
    return {    //To return multiple values
         summary: `${book.title} by ${book.author}`,
         pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}


let bookSummary1 = getSummary(mybook1)
console.log(bookSummary1.pageCountSummary)

let bookSummary2 = getSummary(mybook2)
console.log(bookSummary2.pageCountSummary)

//Challenge
// Input a temperature in fahrenheit
// Return 3 values; Celsius, Fahrenheit and Kelvin

let temperatureConvert = function(temperature){

    return {
        celsius: (temperature - 32) * 5 / 9, 
        fahrenheit: temperature,
        kelvin: (temperature + 459.67) * 5 / 9
    }
}


let myTemp = temperatureConvert(68);
console.log(myTemp)
//console.log(`My temperature ${myTemp.fahrenheit} is ${myTemp.celsius} in Celsius and ${myTemp.kelvin} in Kelvin`)