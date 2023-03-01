/*
    Функция min(a, b)
    Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
    Пример вызовов:
*/
console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

function min(a, b){
    return a > b ? b : a;
}