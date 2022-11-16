const array = [1, 2, 3];
array.push(4);
array[0] = 'Marco';
console.log(array)

// Criar objeto literal

const pessoa = {
    nome: 'Marco',
    sobrenome: 'Antonio', 
    idade : 55
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

// Criar uma função para criar objetos

function criarPessoa (nome, sobrenome, idade) {
    return{nome, sobrenome, idade };
}
const pessoa1 = criarPessoa('Paulo', 'Ricardo', 47);
const pessoa2 = criarPessoa('Sandra', 'Oliviera', 37);
const pessoa3 = criarPessoa('Ricardo', 'Santos', 41);
const pessoa4 = criarPessoa('Luiza', 'Silva', 27);
const pessoa5 = criarPessoa('Raphael', 'Carmo', 28);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa1.nome, pessoa2.nome, pessoa5.nome);

const pessoa7 = {
    nome: 'Mariane',
    sobrenome: 'Westim',
    idade:25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);

   }
};

pessoa7.fala()

