// Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor
// de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

let numbers = [1, 5, 6, 12, 34, 11, 10, 5, 8]; // solo usé esta variable para meterla como argumento en consola
let num;

function largestNumber(numbers) {
  numbers.forEach(number => {
    if (num >= number) return;
      else {
      num = number;
    }
  })
  console.log(num);
}

// Ejercicio #2
// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se
// le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6],
// escribe una función en javascript para calcular el número más pequeño.

function smallestNumber(numbers) {
  let listNumbers = [-1, 3, 4, 2, 6];
  numbers = listNumbers
  numbers.forEach(number => {
    if (num <= number) return; // usamos el num del anterior ejercicio
    else {
      num = number;
    }
  })
  console.log(num);
} // Llamas la variable en consola y te da el resultado de -1