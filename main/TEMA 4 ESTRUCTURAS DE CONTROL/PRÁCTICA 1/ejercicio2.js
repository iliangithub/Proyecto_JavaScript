// generar dos num aleatorios entre 14 y 59 y decir si es par o impar.


/* LA FUNCIÓN QUE GENERA NUMEROS ALEATORIOS ENTRE:

[0,1)

es decir, entre el 0 y el 1.

El 0 SÍ VIENE INCLUIDO.
El 1 NO viene, ESTÁ excluido.

Por lo tanto, devuelve un valor decimal

console.log( Math.random() ) --> 0.432134
console.log( Math.random() ) --> 0.992756
console.log( Math.random() ) --> 0.003214

Para que no devuelva decimales, lo que hay que hacer es multiplicar por 10.

console.log( Math.random() * 10 ) --> 3.6224433206435136
console.log( Math.random() * 10 ) --> 5.058977575377723

Ahora, una vez hecho eso, quitamos la parte decimal (NO RENDONDEA, SOLO QUITAR LA PARTE DECIMAL):

console.log ( Math.floor( Math.random() * 10) ) --> 1
console.log ( Math.floor( Math.random() * 10) ) --> 8
console.log ( Math.floor( Math.random() * 10) ) --> 10

Por último, para que esté comprendido entre 2 números, sea el 14 y 59

console.log ( Math.floor( Math.random() * (59 - 14) + 14) ) --> 54... o el numero comprendido entre eso.





Pero no hemos terminado, para colmo, tenemos que incluir el 59 y el 14 como posibles númeroes que se generen.

console.log ( Math.floor( Math.random() * (1 + 59 - 14) + 14) )
*/

let num_1 = Math.floor( Math.random() * (1 + 59 - 14) + 14)
let num_2 = Math.floor( Math.random() * (1 + 59 - 14) + 14)
let resultado = ""
let resultado_2 = ""

if (num_1 % 2 === 0) {
    resultado = " es par"
}else{
    resultado = " es impar"
}

console.log("El primer número es el: " + num_1 + resultado )

if (num_2 % 2 === 0) {
    resultado_2 = " es par"
}else{
    resultado_2 = " es impar"
}

console.log("El segundo número es el: " + num_2 + resultado_2 )
