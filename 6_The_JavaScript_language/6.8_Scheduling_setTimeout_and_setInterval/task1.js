/*
    Вывод каждую секунду

    Напишите функцию printNumbers(from, to), 
    которая выводит число каждую секунду, начиная от from и заканчивая to.

    Сделайте два варианта решения.
    Используя setInterval.
    Используя рекурсивный setTimeout.
*/
/*
    //setInterval
    function printNumbers(from, to) {
        let count = from;
        let clearNumber = setInterval(() => count <= to ? console.log(count++): clearInterval(clearNumber), 1000);
    }
*/

//setTimeout
function printNumbers(from, to) {
    let count = from;

    setTimeout(function fun () { 
        console.log(count++);
        if (count <= to) {
            setTimeout(fun, 1000);
        }
    }, 1000)
}

printNumbers(5, 10)