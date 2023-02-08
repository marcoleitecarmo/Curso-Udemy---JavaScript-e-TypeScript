let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

// ... rest, ... spread
 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros;
console.log(numeros[0], numeros[8]);
console.log(um, dois, tres);
console.log(resto);

//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numero;
console.log(lista1[1], lista2[2], lista3[0]);