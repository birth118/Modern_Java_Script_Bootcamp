let gradeCalc = function(score, totalScore){

    let percent = (score/totalScore) *100;

    let grade ='F'

    if(percent >= 90){
        grade = 'A'
    }else if(percent >= 80){
        grade = 'B'
    }else if(percent >= 70){
        grade = 'C'
    }else if(percent >= 50){
        grade = 'D'
    }

    return `Your grade is ${grade} (${percent}%)!`
        
}

let result = gradeCalc(12,20)
console.log(result);