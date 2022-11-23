// Operação ternária = ? : -> ? = true, : = false

const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

// if (pontuacaoUsuario > 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal');
// }

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);




