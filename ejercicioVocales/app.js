/* Dado un string, recorrerlo e intecarmbiar las vocales por números
    a = 4, e = 3, i = 1, 0 = 0, 5 = u
*/

const nombre = "Daniel";
let nombreNum = [];
let caracter;
let nombreInverso = [];

// podemos usar la función split() para separar los caracteres en un array explicitamente
// console.log(nombre.split(''))

//vamos a recorrer el string con un ciclo FOR
for(i = 0; i < nombre.length; i++){
  //console.log(nombre[i]) verificamos que se accede correctamente a cada letra
  
  //podemos pasar a minisculas todas las letras para evitar ambiguedades entre Min y May
  switch( nombre[i].toLowerCase() ){
    case 'a':
      //cambiamos por 4
      caracter = 4;
      break;
    case 'e':
      //cambiamos por 3
      caracter = 3;
      break;
    case 'i':
      //cambiamos por 1
      caracter = 1;
      break;
    case 'o':
      //cambiamos por 0
      caracter = 0;
      break;
    case 'u':
      //cambiamos por 5
      caracter = 4;
      break;
    default:
      caracter = nombre[i];
      //dejamos la letra original
      break;
  }
  nombreNum.push(caracter);
  nombreInverso.unshift(nombre[i]);
}
//imprimimos el resultado, sin alterar el string original
console.log(nombreNum);
// Bonus track imprimimos el nombre inverso
console.log(nombreInverso)