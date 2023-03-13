/*
    Изменяем "prototype"

    В коде ниже мы создаём нового кролика new Rabbit, 
    а потом пытаемся изменить его прототип.
    Сначала у нас есть такой код:

    function Rabbit() {}

    Rabbit.prototype = {
        eats: true
    };

    let rabbit = new Rabbit();

    alert( rabbit.eats ); // true

    //Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
*/
/*
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // true Rabbit.prototype = {}; было замененено после создания значение осталос в инстансе класса
*/
/*
//…А если код такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
    eats: true 
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;
console.log( rabbit.eats ); // false изменен обьек записанный в прототип
*/
/*
//Или такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;
console.log( rabbit.eats ); // true в rabbit нет св-ва eats оно доступно через прототип 
*/

//Или, наконец, такой:
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // undefined - св-ва нет в rabbit, а из Rabbit.prototype оно было удалено
