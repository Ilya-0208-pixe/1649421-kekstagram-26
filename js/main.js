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

function getRandomPositiveInteger(a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs
  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа
  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}
