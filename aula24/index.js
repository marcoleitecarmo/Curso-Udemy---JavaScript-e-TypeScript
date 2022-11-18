/*
Estruturas condicionais if, else if e else parte(1)
*/

const time = 11;

if (time <= 12) {
    console.log('Bom dia !');
} else {
    console.log ('Boa tarde!');
}

const hora = 0;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia !');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else{
    console.log('Ola hora errada!')
}
