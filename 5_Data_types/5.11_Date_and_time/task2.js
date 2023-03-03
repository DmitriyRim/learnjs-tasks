/*
    Покажите день недели

    Напишите функцию getWeekDay(date), 
    показывающую день недели в коротком формате: 
    «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

    Например:
*/
let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {
    let weekday= ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return weekday[date.getDay()];
}

console.log( getWeekDay(date) ); // нужно вывести "ВТ"