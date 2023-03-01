/*
    Максимальная зарплата

    У нас есть объект salaries с зарплатами:
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
/*
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
    P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
function topSalary(salaries) {
    let winner = '';
    let maxSum = 0;
    const arr = Object.entries(salaries);
    arr.forEach((item) => {
        let [name, sum] = item;
        if(maxSum < sum) {
            winner = name;
            maxSum = sum;
        }
    })
    console.log(winner);
}
topSalary(salaries)