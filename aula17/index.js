function myFunction(a, b){
    return a * b;
}

let x = myFunction(3, 5)

console.log(x);

function saudacao(){
    console.log('Bom dia!!')
}

saudacao()

function parametro(nome){
    console.log(`Bom dia ${nome}`);
}

parametro('Carlos');

function soma(x, y){
    const resultado = x + y;
    return console.log(resultado);
}

soma(3, 5)

const raiz = function(n){
    return n ** 0.5
};

console.log(raiz(9));

const raizquadrada = (n) => {
    return console.log(n ** 0.5);
}

raizquadrada(225);