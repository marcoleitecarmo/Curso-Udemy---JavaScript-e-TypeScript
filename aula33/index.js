const pessoa = {
    nome:'Marco',
    sobrenome: 'Antonio',
    idade: 55,
    endereco:{
        rua: 'Manoel Moreira de Sá',
        numero: 40
    }
};

const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);
