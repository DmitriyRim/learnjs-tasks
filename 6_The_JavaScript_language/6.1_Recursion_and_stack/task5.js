/*
    Вывод односвязного списка в обратном порядке

    Выведите односвязный список из предыдущего задания 
    Вывод односвязного списка в обратном порядке.
    Сделайте два решения: с использованием цикла и через рекурсию.
*/

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
            }
        }
    }
};

// Рекурсия
function printList(list) {
    list.next === null ? list.value : printList(list.next).value;
    console.log(list.value);
    return list;
}

/*
// For
function printList(list) {
    let item = list;
    const arr = [];

    while(item !== null) {
        arr.push(item.value);
        item = item.next;
    } 

    arr.reverse().forEach(item => console.log(item));
}
*/
printList(list);