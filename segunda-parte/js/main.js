let numeroMayor1 = document.getElementById("numeroMayor1");
let numeroMayor2= document.getElementById("numeroMayor2");
let numeroMayor3 = document.getElementById("numeroMayor3");
let alertMayor = document.getElementById("alertMayor");
let btnMayor = document.getElementById("btnMayor");

let numeroMenor1 = document.getElementById("numeroMenor1");
let numeroMenor2= document.getElementById("numeroMenor2");
let numeroMenor3 = document.getElementById("numeroMenor3");
let alertMenor = document.getElementById("alertMenor");
let btnMenor = document.getElementById("btnMenor");

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