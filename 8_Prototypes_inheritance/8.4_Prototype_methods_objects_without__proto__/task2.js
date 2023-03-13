/*
    Разница между вызовами

    Давайте создадим новый объект rabbit:
*/
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Вызовет метод из prototype с name обьекта перед точкой
Rabbit.prototype.sayHi(); // undefined в prototype нет name
Object.getPrototypeOf(rabbit).sayHi(); // undefined в prototype нет name
rabbit.__proto__.sayHi(); // undefined в prototype нет name