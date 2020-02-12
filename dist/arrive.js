// Arrive

// 1 - Массив случайных чисел
/*
let randomRange = 30 + Math.round(Math.random() * (50 - 30));
let randomArr = [];
console.log(`Массив длинной ${randomRange} эллементов`); // определяем размер массива

for (let i = 0; i < randomRange; i++) {
  randomArr.push(-100 + Math.round(Math.random() * 200));
}
console.log('' + randomArr); // массив из рандомных чисел

const newArr = [];
const iterCallback = (element) => {
  element += 2;
  newArr.push(element);
}
randomArr.forEach(iterCallback);
console.log('' + newArr); // массив с +2 к эллементу

let centralElement = Math.ceil((newArr.length - 1) / 2);
console.log(`Центральный эллемент массива : ${centralElement} значение ${newArr[centralElement-1]}`); // центральный эллемент массива

newArr.shift();
newArr.unshift(centralElement);
console.log('' + newArr); // поменяли первый эллемент массива

let filteredArr = newArr.filter(function (number) {
  return number > 0;
});
console.log('' + filteredArr); // проверяем эллементы > 0

if (newArr.indexOf(0) !== -1) {
  console.log('В массиве есть число 0!');
} else {
  console.log('В массиве нет числа 0!');
} // проверяем наличие 0 в массиве
*/

// 2 - Разворот строки
/*
let array = 'Lorem ipsum dolor sit amet';
let newArray = array.split('').reverse().join('');
console.log(newArray);
*/

// 3 - Изменение текста
/*
let array = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let arrayOfStrings = array.split('. ');
arrayOfStrings[arrayOfStrings.length - 1] = arrayOfStrings[arrayOfStrings.length - 1].toUpperCase();
console.log(arrayOfStrings);

let gatherArrow = arrayOfStrings.join('. \n');
console.log(gatherArrow);
*/

// 4 - Два массива вместе
/*
let firstArr = [];
for (let i = 0; i < 10; i++) {
  firstArr.push(Math.round(Math.random() * 10));
}
console.log(firstArr);

let secondArr = [];
for (let i = 0; i < 20; i++) {
  secondArr.push(-10 + (Math.round(Math.random() * 10)));
}
console.log(secondArr);

let concatArr = firstArr.concat(secondArr);
console.log('Соедененные массивы : ' + concatArr);

let splitArr = concatArr.map(item => (item / 5));
console.log('Разделенный на 5 : ' + splitArr);

let sortedArr = splitArr.sort((prev, next) => {
  return next - prev;
});
console.log('Отсортированный MAX-MIN: ' + sortedArr);

let filteredArr = sortedArr.filter(function (number) {
  return Number.isInteger(number);
});
console.log(filteredArr);

delete filteredArr;
*/

// 5 - Задание со звездочкой*
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.sort((el) => {
  return 0.5 - Math.random();
});
console.log(newArr);
*/