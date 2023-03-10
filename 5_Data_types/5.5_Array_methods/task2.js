/*
Фильтрация по диапазону

Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
Например:
*/
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);


function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <=b)
}

console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr ); // 5,3,8,1 (без изменений)