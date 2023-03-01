/*
Сумма свойств объекта

Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
Например:
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = Object.values(salaries).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
alert( sumSalaries(salaries) ); // 650