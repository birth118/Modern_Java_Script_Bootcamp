let mybook = {
    title: '1984', 
    author: 'George Owell',
    pageCount: 306
}

console.log(`${mybook.title} by ${mybook.author}`)

mybook.title = 'Animal Farm'
console.log(`${mybook.title} by ${mybook.author}`)


// Challenge

let aPerson = {
    name: '사이암',
    age: 30,
    location: 'Manila'
}


console.log(`${aPerson.name} is ${aPerson.age} years old and lives ${aPerson.location}`)

aPerson.age++;
console.log(`${aPerson.name} is ${aPerson.age} years old and lives ${aPerson.location}`)
