/*
    Форматирование относительной даты

    Напишите функцию formatDate(date), форматирующую date по следующему принципу:

    Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    В противном случае, если меньше часа, вывести "m мин. назад".
    В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
    А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
    Например:
*/
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate( date ) {
    let timeDifference = Date.now() - date.getTime();
    let out = '';

    if(timeDifference < 1000) {
        out = "прямо сейчас";
    } else if ( timeDifference < 1000 * 60 ) {
        out = `${date.getSeconds()} сек. назад.`;
    } else if ( timeDifference < 1000 * 60 *60 ) {
        out = `${date.getMinutes()} мин. назад.`;
    } else {
        let day = formattingDateOutput(date.getDate());
        let month = formattingDateOutput(date.getMonth() + 1);
        let year = date.getFullYear();
        let hours = formattingDateOutput(date.getDate());
        let minutes = formattingDateOutput(date.getMinutes());
        out = `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    return out;
}

function formattingDateOutput (num) {
    return num < 10 ? '0' + num : num;
}
