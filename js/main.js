// Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor
// de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

let numbers = [1, 5 ,6, 12, 34, 11, 10, 5 ,8];
let num = 0;

function smallNumber(numbers) {
  numbers.forEach(number => {
    if (num >= number) return;
      else {
      num = number;
    }
  })
  console.log(num);
}

