/*
    Куда будет произведена запись?

    Объект rabbit наследует от объекта animal.
    Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
*/

let animal = { eat() { this.full = true; } }; 
let rabbit = { __proto__: animal }; rabbit.eat();
// св-во full будет добавлено в rabbit
console.log(rabbit.full, animal.full)