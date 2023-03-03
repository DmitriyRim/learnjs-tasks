/*
    Сколько секунд осталось до завтра?

    Создайте функцию getSecondsToTomorrow(), 
    возвращающую количество секунд до завтрашней даты.

    Например, если сейчас 23:00, то:

    getSecondsToTomorrow() == 3600
    P.S. Функция должна работать в любой день, т.е. в ней не 
    должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    let date = new Date();
    let milliseconds = (new Date() - date.setHours(0, 0, 0 ,0)) / 1000;
    return 86400 - Math.round(milliseconds);
}

console.log(getSecondsToTomorrow());