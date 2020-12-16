function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return 'Did parents allow you?'
    }
  }

//refactor the above code using the or

function checkAge2(age) {
    return age > 18 || 'Did parents allow you?'
  }


let solution1 = checkAge(22)
let solution = checkAge2(22)


console.log(solution1);