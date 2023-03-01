/*
    Создайте калькулятор

    Создайте объект calculator (калькулятор) с тремя методами:
    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
let calculator = { 
    read() {
        this.a = +prompt('Введите 1е число');
        this.b = +prompt('Введите 2е число');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
    
}; 

calculator.read(); 
alert( calculator.sum() ); alert( calculator.mul() );

