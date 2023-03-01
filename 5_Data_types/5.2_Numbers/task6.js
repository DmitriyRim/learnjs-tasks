/*
    Случайное целое число от min до max

    Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
    Любое число из интервала min..max должно появляться с одинаковой вероятностью.
    Пример работы функции:
*/
console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5

function randomInteger (min, max) {
    let randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
}