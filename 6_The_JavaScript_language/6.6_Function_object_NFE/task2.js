/*
    Сумма с произвольным количеством скобок

    Напишите функцию sum, которая бы работала следующим образом:
    P.S. Подсказка: возможно вам стоит сделать особый метод 
    преобразования в примитив для функции.
*/

let sum = function makeSum( num ) {

    if ( makeSum.sum === undefined ) {
        makeSum.sum = 0;
    }
    
    makeSum.sum += num;
    makeSum.valueOf = () => makeSum.sum;
    
    return makeSum;
}
console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6)
console.log(sum(6)(-1)(-2)(-3) == 0)
console.log(sum(0)(1)(2)(3)(4)(5) == 15)