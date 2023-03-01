/*
  Сумма введённых чисел

  Напишите функцию sumInput(), которая:

  Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
  Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
  Подсчитывает и возвращает сумму элементов массива.
  P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
function sumInput() {
  const arr = [];
  let answer;

  while(true) {
    answer = prompt('Введите число: ');
    if(answer === '' || answer === null || Number.isNaN(+answer)) break;
    arr.push(+answer)
  }
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

sumInput()