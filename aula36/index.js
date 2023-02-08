const frutas = ['pera', 'maçã', 'uva', 'abacaxi', 'ameixa']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log()

for (let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Alberto',
    idade: 37
};

console.log()

for (let p in pessoa){
    console.log(pessoa[p]);
}