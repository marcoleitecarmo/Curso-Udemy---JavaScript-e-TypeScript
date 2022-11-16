/*
Tipos de dados primitivos: (Valores imutáveis)
    string, number, boolean, underfined, null (bigint, symbol)

Referência (mutável) - array, object, function

*/
let nome = 'Luiz';
console.log(nome[0]);

let array = ['Paulo', 'Ricardo', 'Pedro'];
console.log(array[1]);

let a = "A";
let b = a;  // copia de a para  b
console.log(a, b)

let x = [1, 2, 3];
let y = x;
console.log(x, y);

const c = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const d = c;

b.nome = 'João';
console.log(c);
console.log(d);