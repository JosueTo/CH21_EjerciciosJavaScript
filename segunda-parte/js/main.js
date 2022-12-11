// Variables del ejercicio 1
let numeroMayor1 = document.getElementById("numeroMayor1");
let numeroMayor2= document.getElementById("numeroMayor2");
let numeroMayor3 = document.getElementById("numeroMayor3");
let alertMayor = document.getElementById("alertMayor");
let btnMayor = document.getElementById("btnMayor");

// Variables del ejercicio 2
let numeroMenor1 = document.getElementById("numeroMenor1");
let numeroMenor2= document.getElementById("numeroMenor2");
let numeroMenor3 = document.getElementById("numeroMenor3");
let alertMenor = document.getElementById("alertMenor");
let btnMenor = document.getElementById("btnMenor");

// Variables del ejercicio 4
let inputMultiplo3 = document.getElementById("multiplo3");
let btnMultiplo3 = document.getElementById("btnMultiplo3");
let alertMultiplo3 = document.getElementById("alertMultiplo3");


// Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor
btnMayor.addEventListener("click", function(event) {
  let num1 = parseInt(numeroMayor1.value);
  let num2 = parseInt(numeroMayor2.value);
  let num3 = parseInt(numeroMayor3.value);
  let largestNum;
  let numbers = [];
  numbers.push(num1, num2, num3);

  numbers.forEach(number => {
    if (largestNum >= number) return;
      else {
      largestNum = number;
    }
  })

  alertMayor.innerHTML = largestNum;
})

// Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
btnMenor.addEventListener("click", function(event) {
  let num1 = parseInt(numeroMenor1.value);
  let num2 = parseInt(numeroMenor2.value);
  let num3 = parseInt(numeroMenor3.value);
  let smallerNumber;
  let numbers = [];
  numbers.push(num1, num2, num3);

  numbers.forEach(number => {
    if (smallerNumber <= number) return;
      else {
      smallerNumber = number;
    }
  })

  alertMenor.innerHTML = smallerNumber;
})

// Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
btnMultiplo3.addEventListener("click", multiplo3);

function multiplo3(number) {
  number = parseInt(inputMultiplo3.value);
  let residuo = number % 3;
  if (number >= 100 && number <= 200){
    if (residuo == 0){
      alertMultiplo3.innerHTML = `El número ${number} es múltiplo de 3`;
    } else {
      alertMultiplo3.innerHTML = `El número ${number} no es múltiplo de 3`;
    }
  } else if (number == NaN){
    alertMultiplo3.innerHTML = "Por favor, ingrese un número entre 100 y 200"
  } else {
    alertMultiplo3.innerHTML = "Por favor, ingrese un número entre 100 y 200"
  }
}



