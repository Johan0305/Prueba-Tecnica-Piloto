// Ejercicio 1
function count(str, char) {
  let count = 0;
  let string = str.split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }

  return count;
}

count("Hola", "a");

//Ejercicio 2

function filter(numbers) {
  let numbersarr = [];

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      numbersarr.push(numbers[i]);
    }
  }

  return numbersarr;
}

filter([3, 12, 45, 7]);

//Ejercicio 3

function hypotenuse(a, b) {
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  return c;
}

hypotenuse(10, 13); // retorna 16.401219466856727
