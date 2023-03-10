/*
    Создайте калькулятор при помощи конструктора, new Calculator

    Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму этих свойств.
    mul() возвращает произведение этих свойств.

    Например:
*/
let calculator = new Calculator(); calculator.read(); 
alert( "Sum=" + calculator.sum() ); alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите число a:');
        this.b = +prompt('Введите число b:');
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}