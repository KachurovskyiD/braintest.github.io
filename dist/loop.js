//1 - Loop task

// let symbolRow = '',
//   range = 122 - 65;

// while (symbolRow.length < 25) {
//   let charSymbol = String.fromCharCode(65 + Math.round(Math.random() * range));
//   if (charSymbol === 'E' || charSymbol === 'w') break;
//   symbolRow += charSymbol;
// }
// console.log(symbolRow);

// let charNumber = Math.round(Math.random() * symbolRow.length);
// console.log('Случайное число:', charNumber, ', индекс которого соотвецтвует символу:', symbolRow[charNumber - 1]);

// if (symbolRow.length < 5) {
//   console.log(symbolRow.repeat(4), '- строка, повторенная 4 раза');
// } else {
//   console.log(symbolRow.slice(5), '- подстрока начиная с 5 символа и до конца строки');
// }


//2 - Factorial of 12

// let result = 1,
//   count = 12;
// while (count >= 1) {
//   result = result * count;
//   count--;
// }
// console.log(result);

//3 - Triangle

// let myString = '';
// for (let i = 0; i < 5; i++) {
//   myString = myString + '#'
//   console.log(myString);
// }

//4 - Reverse triangle

// let myString = '',
//   spaceCount = 4,
//   hashCount = 1,
//   space = ' ',
//   hash = '#';
// i = 0;
// while (i < 5) {
//   myString = space.repeat(spaceCount) + hash.repeat(hashCount);
//   console.log(myString);
//   i++;
//   spaceCount--;
//   hashCount++;
// }