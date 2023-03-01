/*
    Использование "this" в литерале объекта

    Здесь функция makeUser возвращает объект.
    Каким будет результат при обращении к свойству объекта ref? Почему?
*/

function makeUser() {
    return { name: "John", ref: this }; 
} 

let user = makeUser();
console.log(user.ref) // window
console.log( user.ref.name ); //undefined на момент вызова функнии ее this равен undefined

user = makeUser.bind({name: "Salma"})()
console.log(user.ref.name)
