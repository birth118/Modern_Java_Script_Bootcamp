// undefined: unassigned variables

let name

//name = 'Tommy'
if (name === undefined) {
    console.log('the variable is undefined')
}else {
    console.log(name)
}

// undefined: not given argument
// undefined: as function return default value

let square = function(num){
    console.log(num)
}

let result = square();
console.log(result)

// null: as assigned value

let age = 34
age = null

console.log(age)