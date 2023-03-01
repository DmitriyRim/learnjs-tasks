/*
    Переведите текст вида border-left-width в borderLeftWidth

    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
    То есть дефисы удаляются, а все слова после них получают заглавную букву.
    Примеры:
*/
console.log(camelize("background-color"), 'backgroundColor');
console.log(camelize("list-style-image"), 'listStyleImage');
console.log(camelize("-webkit-transition"), 'WebkitTransition');

function camelize(str) {
    const arr = str.split('-').map((item, index) => {
        if(index > 0){
            return item[0].toUpperCase() + item.slice(1);
        } 
        return item;
    });
    return arr.join();
}
//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.