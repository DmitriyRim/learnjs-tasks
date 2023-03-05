/*
    Вывод односвязного списка

    Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

    Напишите функцию printList(list), которая выводит элементы списка по одному.
    Сделайте два варианта решения: используя цикл и через рекурсию.
    Как лучше: с рекурсией или без?
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
/*
    // Рекурсия
    function printList(list) {
        console.log(list.value);
        let item = list.next === null ? null : printList(list.next);
    }
*/

// For
function printList(list) {
    let item = list;

    while(item !== null) {
        console.log(item.value);
        item = item.next;
    } 
}

printList(list);