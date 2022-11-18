/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(10 == 10 && 5 > 4);
console.log(10 == 9 && 4 > 3);
console.log(5 == 4 && 3 > 5);
console.log(true && true && true);
console.log(true && false && true);
console.log(false && false && false);

const expressaoAnd = true && true && true
console.log(expressaoAnd)
const expressaoOr = true || false
console.log(expressaoOr)
const expressaoNot =  ! false
console.log(expressaoNot)