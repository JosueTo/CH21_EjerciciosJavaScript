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


// Ejercicio #3
// Escribir una función que permita saber si un número se repite dentro de un arreglo.
// Blockquote Casos de prueba:
// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

function numberRepeated(arreglo) {
  let num = 0;
  
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 1; j < arreglo.length; j++) {
      if (arreglo[i] == arreglo[j]) {
        num = arreglo[i];
      };     
    } 
    
  }

  if (num != 0) {
    return `El número ${num} se encuentra más de una vez`;
  } else {
    return `No hay números repetidos`;
  }
}

// Ejercicio #4
// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado 
// Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

function randomArray(array) {
  
  let arrayLength = array.length;

  for (let i = 0; i < array.length; i++){
    let randomPosition = Math.floor(Math.random() * arrayLength);
    let currentIndex = array[i];
    array[i] = array[randomPosition];
    array[randomPosition] = currentIndex;
  }
  return array;
}

// ESTE LO INTENTÉ PERO NO ME DA EL RESULTADO ESPERADO, ME REGRESA UN NUEVO ARRAY RANDOM, PERO 
// ME PUEDE REGRESAR NÚMEROS REPETIDOS Y NO UTILIZAR TODOS.
  // let randomArray = []
  // for (let i = array.length; i > 0; i--){
  //   let randomPosition = Math.floor(Math.random() * arrayLength)
  //   randomArray.push(array[randomPosition]);
  // }
  // return randomArray;

