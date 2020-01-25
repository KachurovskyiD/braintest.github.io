// Task 1 "ODD or EVEN" (ДОЛГ)

// let number = +prompt('Enter your number', '');
// if (!number) {
//   alert('You don\'t enter number...');
// } else {
//   let isNumberEven = (number % 2 === 0) ? `Number ${number} is EVEN!` : `Number ${number} is ODD!`;
//   alert(isNumberEven);
// }

// Task 2 "Ветвление условий"\

/*
let number = +prompt('Enter your number', '');

if (number < 0) {
  if (number % 3 === 0) {
    alert(number ** number);
  } else {
    alert(number % 8);
  }
} else if (number > 0) {
  number = Math.sqrt(number);
  if (Math.round(number) > 1) {
    alert(Math.pow(number, 2));
  } else {
    alert(number - 0.5);
  }
} else if (number == 0) {
  let newString = number.toString();
  alert(newString);
  console.log(typeof newString);
} else {
  alert('What is it?!');
}
*/

// Task 3 "Угадай число"

/*
let askUser = confirm('Are you over 18?')
if (askUser) {
  let numberUser = +prompt('Enter you number from 0 to 9', ''),
    randomNumber = (parseInt(Math.random() * 10));
  if (numberUser === randomNumber) {
    alert(`You guessed it!) Your number : ${numberUser} , and random number : ${randomNumber}`);
  } else {
    alert(`You missed...( Your number : ${numberUser} , and random number : ${randomNumber}`);
  }
} else {
  alert('Too young...')
}
*/