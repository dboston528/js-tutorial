'use strict';

let numValue = prompt('What is the value?')

if (numValue > 0){
    alert(1)
} else if (numValue <0 ){
    alert(-1)
} else {
    alert(0)
}

// let a = 5;
// let b = 5;

// let result = (a+b < 4) ? 'below': 'Over';
// alert(result)

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let login =  'Director'

let message = (login == 'Employee') ? 'Hello':
    (login == 'Director')? 'Greetings':
    (login == '')? 'No login':
    '';
alert(message)
