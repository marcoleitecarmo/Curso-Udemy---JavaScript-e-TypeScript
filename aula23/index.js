/*
Avaliação de Curto-Circuito(Short-Circuit)
&& -> false && true -> false " o valor mesmo"
|| -> true || false - retorna verdadeiro " o valor verdadeiro"
Valores que retornão false
FALSY
false
0
'', "", ``
NaN
null / undfined
*/
console.log('Marco' && 0 && 'Cassia');
console.log('Marco' && true && 'Cassia');
console.log('Marco' && '' && 'Cassia');
console.log('Marco' && NaN && 'Cassia');

function falaOi() {
    return 'Oi';
}

let vaiExecutar;
let fala = 'João'

console.log(vaiExecutar && falaOi());
console.log(fala && falaOi());

console.log(0 || false || null || 'Luiz' || true);

const corUsuario = null
const corPreferida = 'Azul'
const corPadrao = corPreferida
const corPadrao1 = corUsuario || 'preto';
console.log(corPadrao);
console.log(corPadrao1);
