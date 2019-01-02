// Multiple arguments
let add = function(a, b, c ){
    return a+b +c;
}

let result = add(5,6, 4)
console.log(result)

// Default argument

let getScoreText = function(name ='Unknown', score = 0){

    //return 'Name: ' + name + ' Score: ' + score;
    return `Name: ${name} Score: ${score}`

}

/* getScoreText('Tommty');
getScoreText('Johnny',20); */

let scoreText = getScoreText(undefined,20);
console.log(scoreText)


// Challenge area
// Input: pay amt, tip percent with default value respectively

let calcTip = function(price = 0, tip = 0.2){
    let tipAmt = price * tip;
    let totalAmt = price + tipAmt;
    return `Price is ${price}, Tip is ${tipAmt}  --> Total payment is ${price+tipAmt}`
}

let payOne = calcTip(40)
console.log(payOne)


let name ='Jimmy'
console.log(`Superv ${name}!`)
