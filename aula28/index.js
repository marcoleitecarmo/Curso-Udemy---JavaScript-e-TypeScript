// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_objects/Date

const data = new Date();
console.log(data);
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data1 = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
const data2 = new Date(0 + tresHoras + umDia); // 02/01/1970
console.log(data1.toString());
console.log(data2.toString());

const data3 = new Date(2019, 3, 20, 15, 14, 27); // Data = 20/04/2019 as 15:14:27s
console.log(data3.toString());

const data4 = new Date('2019-04-20 20:20:59.999'); // Data = 20/04/2019 as 20:20:59s
console.log(data4.toString());

console.log('Dia', data4.getDate());
console.log('Mês', data4.getMonth()); // Mês começa com 0 = Janeiro
console.log('Ano', data4.getFullYear());
console.log('Hora', data4.getHours());
console.log('Min', data4.getMinutes());
console.log('Seg', data4.getSeconds());
console.log('Ms', data4.getMilliseconds());
console.log('Dia da Semana', data4.getDay()); // Semana 0 = Domingo e 6 = Sabado

console.log(Date.now());
const data5 = new Date(1669665049963)
console.log(data5.toString());

