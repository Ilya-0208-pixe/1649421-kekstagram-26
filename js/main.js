//имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

function checkString(stringToTest, maximumLength) {
  let result;
  if (stringToTest.length <= maximumLength) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
checkString('qwerty', 100); //true

//имя_функции(от, до); // Результат: целое число из диапазона "от...до"
console.log('---1 ', Math.random());

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) {
    return +Math.abs(min);
  }
  if (max > min) {
    return +Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
  } else {
    return +Math.abs(Math.floor(Math.random() * (min - max + 1) + max));
  }
}
console.log('1, 10  == ', getRandom(1, 10));
console.log('20, 30  == ', getRandom(20, 30));
console.log('30, 20  == ', getRandom(30, 20));
console.log('-10, 5  == ', getRandom(-10, 5));
console.log('-10, -10  == ', getRandom(-10, -10));
console.log('20, 20  == ', getRandom(20, 20));
