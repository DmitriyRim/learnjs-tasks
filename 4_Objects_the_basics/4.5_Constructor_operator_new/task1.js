

/*
    Две функции - один объект
    Возможно ли создать функции A и B, чтобы new A() == new B()?
*/
let instance = null;
function A() { 
    if(instance !== null) {
        return instance;
    }
    instance = this;
} 
function B() {
     if(instance !== null) {
        return instance;
    }
    instance = this;
} 

let a = new A(); 
let b = new B(); 
console.log( a == b ); // true

//Если да – приведите пример вашего кода.

