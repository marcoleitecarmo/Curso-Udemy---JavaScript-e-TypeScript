/*
Operadores de comparação: >: maior, >=: maior igual, <: menor, <=: menor igual, ==: igual (valor), ===: igualdade estrita (Valor e tipo),
!=: diferente (valor), !==: diferente estrito (valor e tipo)

*/
console.log(10 > 5);
console.log(10 < 5);
console.log(10 != 5);
console.log(3 == 4);
console.log(4 <= 5);
console.log(5 >= 5);

const c = 10;
const d = '10';

const com = c == d;  // compara um numero com uma string e confirma como TRUE por isto e pouco usado o operador == no JS
console.log(com)

const v = 10;
const z = '10';

const comparar = v === z; // Este ja verifica o valor e o tipo de variável antes de confirmar e deu resultado False sendo mais usado no JS
console.log(comparar)

const a = 10;
const b = '10';

const comp = a != b;  // compara um numero com uma string e confirma como TRUE por isto e pouco usado o operador == no JS
console.log(comp)

const x = 10;
const y = '10';

const compara = x !== y; // Este ja verifica o valor e o tipo de variável antes de confirmar e deu resultado False sendo mais usado no JS
console.log(compara)