// Strings são indexadas 

let umaString ='Um texto';

console.log(umaString[3]);
console.log(umaString[7]);

// tipos de concatenação
console.log(umaString.concat(' uma nova frase.'));
console.log(umaString + ' um novo dia');
console.log(`${umaString} em um lindo dia.`);

let novaString = 'O rato roeu a roupa do rei de roma.';

console.log(novaString.replace(/r/g, '#'));
console.log(novaString.length); 
console.log(novaString.slice(2, 7));
console.log(novaString.split(' '));
console.log(novaString.split(' ', 2));
console.log(novaString.split('r'));
console.log(novaString.toUpperCase());
console.log(novaString.toLowerCase());
