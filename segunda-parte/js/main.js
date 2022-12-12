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

// Variables del ejercicio 5
let numeroSuma1 = document.getElementById("numeroSuma1");
let numeroSuma2 = document.getElementById("numeroSuma2");
let numeroSuma3 = document.getElementById("numeroSuma3");
let btnSuma = document.getElementById("btnSuma");
let alertSuma = document.getElementById("alertSuma");

// Variables del ejercicio 6
let numParImpar = document.getElementById("numParImpar");
let btnNumParImpar = document.getElementById("btnNumParImpar");
let alertNumParImpar = document.getElementById("alertNumParImpar");


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

// Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

btnSuma.addEventListener("click", numerosSuman);

function numerosSuman(num1, num2, num3) {
  num1 = parseInt(numeroSuma1.value);
  num2 = parseInt(numeroSuma2.value);
  num3 = parseInt(numeroSuma3.value);

  if (num1 == (num2 + num3)){
    alertSuma.innerHTML = `El número ${num1} es igual a la suma del ${num2} y ${num3}`;
  } else if (num2 == (num1 + num3)){
    alertSuma.innerHTML = `El número ${num2} es igual a la suma del ${num1} y ${num3}`;
  } else if (num3 == (num2+ num1)){
    alertSuma.innerHTML = `El número ${num3} es igual a la suma del ${num1} y ${num2}`;
  } else {
    alertSuma.innerHTML = "Ningún número es la suma de los otros dos";
  }
}

// Elabora un algoritmo para leer un número y determinar si es par o impar
btnNumParImpar.addEventListener("click", determinaParImpar);

function determinaParImpar(num){
  num = parseInt(numParImpar.value);
  residuo = num % 2;
  if (residuo == 0){
    alertNumParImpar.innerHTML = `${num} es un número par`;
  } else {
    alertNumParImpar.innerHTML = `${num} es un número impar`;
  }
}

// Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
// Variables del ejercicio 3
let adivinarNum = document.getElementById("adivinarNum");
let btnAdivinarNum = document.getElementById("btnAdivinarNum");
let alertAdivinarNum = document.getElementById("alertAdivinarNum");
let vidas = 5;
let numRandom = Math.floor((Math.random() * 100) +1);
let alertNumVidas = document.getElementById("numVidas");
let btnReset;


btnAdivinarNum.addEventListener("click", jugarAdivinarNumero);

function jugarAdivinarNumero(num){
  num = parseInt(adivinarNum.value);
  if (num == numRandom){
    alertAdivinarNum.innerHTML = "Felicidades! Adivinaste el número oculto";
    detenerJuego();
  } else if (vidas == 0){
    alertAdivinarNum.innerHTML = "Haz perdido!";
    alertNumVidas.innerHTML = `Te quedan ${vidas} vidas.`;
    detenerJuego();
  } else if (num < numRandom) {
    alertAdivinarNum.innerHTML = "Tu número es muy pequeño, trata con uno mayor.";
    alertNumVidas.innerHTML = `Te quedan ${vidas} vidas.`;
  } else if (num > numRandom) {
    alertAdivinarNum.innerHTML = "Ese es un número mayor, trata con uno más pequeño.";
    alertNumVidas.innerHTML = `Te quedan ${vidas} vidas.`;
  }

  // if (vidas == 0) {
  //   alertAdivinarNum.innerHTML = "Haz perdido!";
  //   detenerJuego();
  // }

  adivinarNum.focus();
  vidas--;
}

function detenerJuego() {
  btnAdivinarNum.disabled = true;
  adivinarNum.disabled = true;
  btnReset = document.createElement("button");
  btnReset.textContent = "Reiniciar juego";
  document.body.appendChild(btnReset);
  btnReset.addEventListener("click", reiniciarJuego);
}

function reiniciarJuego(){
  btnAdivinarNum.disabled = false;
  adivinarNum.disabled = false;
  adivinarNum.textContent = "";
  vidas = 4;
  numRandom = Math.floor((Math.random() * 100) +1);
  btnReset.parentNode.removeChild(btnReset);
}
