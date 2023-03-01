/*
Подмассив наибольшей суммы

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
*/
getMaxSubSum([-1, 2, 3, -9]) == 5 //(сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 //(берём все)
//Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(arr) {
    let max = 0;
    
    for( let i = 0; i < arr.length; i++) {
      let sum = 0;
      
      for( let j = i; arr.length > j; j++){
        sum += arr[j];
        max = max < sum ? sum : max;
      }
    }
    return max;
  }