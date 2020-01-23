//Switch task

let symbolUser = prompt('Enter any symbol:', '');
if (!symbolUser) {
  alert('You don\'t wanna enter...');
} else {
  if (symbolUser.length > 1) {
    alert(symbolUser.toLowerCase());
  } else {
    switch (symbolUser) {
      case 'a':
      case 'o':
      case 'e':
        alert(symbolUser.toUpperCase());
        break;
      case 'x':
      case 'y':
        alert(symbolUser + symbolUser);
        break;
      case 's':
      case 'd':
      case 'q':
      case 'm':
        let randomNum1 = (parseInt(Math.random() * 10)),
          randomNum2 = (parseInt(Math.random() * 10)),
          summRandom = Math.trunc(randomNum1 + randomNum2);
        let finalNumber = summRandom > 0 ? summRandom : 1;
        alert(finalNumber, console.log(randomNum1, randomNum2));
        break;
      case ' ':
        alert(!!symbolUser);
        break;
      default:
        let randomNumber1 = (parseInt(Math.random() * 10)),
          randomNumber2 = (parseInt(Math.random() * 10)),
          randomNumber3 = (parseInt(Math.random() * 10));
        alert(Math.max(randomNumber1, randomNumber2, randomNumber3), console.log(randomNumber1, randomNumber2, randomNumber3));
    }
  }
}