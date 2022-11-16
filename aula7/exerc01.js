// Exercício 
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 39
const Altura = 1.80;
const peso = 84;
let imc = peso / (Altura * Altura);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${Altura.toFixed(2)} de altura e seu IMC é de ${imc.toFixed(2)}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)