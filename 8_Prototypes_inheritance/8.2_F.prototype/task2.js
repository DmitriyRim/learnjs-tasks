/*
    Создайте новый объект с помощью уже существующего

    Представьте, что у нас имеется некий объект obj, 
    созданный функцией-конструктором – мы не знаем какой именно, 
    но хотелось бы создать ещё один объект такого же типа.
    Можем ли мы сделать так?

    let obj2 = new obj.constructor();

    Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
    И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

function F1() {
    
}
F1.prototype.name = 'Vasia';

function F2() {
    this.name = 'Vika';
}
F2.prototype = {
    name: 'Vika',
}

let user1 = new F1();
let userClone1 = new user1.constructor();

console.log(user1.name, userClone1.name);

let user2 = new F2();
let userClone2 = new user2.constructor();

console.log(user2.name, userClone2.name);