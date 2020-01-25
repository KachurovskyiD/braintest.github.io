// Number reverse task

let number = 648325107;
console.log(number, typeof number);
let numberString = number.toString();
let numberReverse = '';

for (let i = 1; i <= numberString.length; i++) {
  let numberResult = numberString[numberString.length - i];
  numberReverse = parseInt(numberReverse + numberResult);
}
console.log(numberReverse, typeof numberReverse);