const numeros = [10, 7, 2, 9, 5, 22, 1, 333];

let suma = 0;

for (const num of numeros) {
  suma += num;
}

console.log("Suma:", suma);
console.log("Promedio:", suma / numeros.length);

let mayor = numeros[0];
let menor = numeros[0];

for (const num of numeros) {
  if (num > mayor) mayor = num;
  if (num < menor) menor = num;
}

console.log("Mayor:", mayor);
console.log("Menor:", menor);

// función
const generarAsteriscos = (n) => {
  let resultado = "";

  for (let i = 0; i < n; i++) {
    resultado += "*";
  }

  return resultado;
};

console.log(generarAsteriscos(22));