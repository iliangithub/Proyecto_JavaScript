# Apuntes JavaScript

Básicamente, aquí voy a poner los tipos de datos en JavaScript.

### Números.
- 1
- 2
- 3
- 1324124
- -123123

### Operaciones.
- 1+2
- 2 + 2 (los espacios dan igual)
- 2 -2
- 2 * 4
- 10 / 5
- 10 % 5 (cuyo resultado es 0, porque es un operador especial para ver si el número es par o impar, o mejor dicho, devuelve el resto)
- 2 ** 4 (2 elevado a 4; devuelve 16)

### Cadenas de caracteres.
**Tienen que estar entre comillados**

- "Miguel Angel" con comillas dobles (y te devuelve 'Miguel Angel', usando las simples, como si prefiriera las comillas simples a las dobles).
- 'Miguel Angel' o también sirve con simples.
- `Miguel Angel o también con la comilla invertida.

Las cadenas, podemos concatenarlas:
- "Miguel Angel" + "Durán" (Y te devuelve **Miguel AngelDuran**) (SIN EL ESPACIO)

Entonces, lo que puedes hacer es:
- "Miguel Angel" + " " + "Durán" (el espacio también es un caracter)
- "Miguel Angel " + "Duran" (o así también)

Se pueden incrustar valores dentro de un texto y hacer operaciones, que **no es una variable**.
- `Miguel Angel ${10 + 14} (**PERO SE TIENE QUE USAR ESTE TIPO DE COMILLA INVERTIDA**)

> [!IMPORTNAT] 
> ¿Vale y si lo quisiera hacer de otra forma, como lo haría?
> - "Miguel Angel " + 10+14 (**NO**, Me devuelve, 'Miguel Angel 1014')
> - "Miguel Angel " + "10+14" (**NO**, Me devuelve, 'Miguel Angel 10+14')
>
> Sería de esta forma:
> -

### Operadores de comparación. Dicotomía. True, False, Boolean.
- 3 > 2 (Devuelve true)
- 2 > 3 (Devuelve false)
- "Miguel" === "Migueeeeeeel" (Devuelve false)
- "Miguel" == "Migueeeeeeel" (Devuelve false)
- "Miguel" !== "Migueeeeeeel" (Devuelve true, en caso de que sea diferente)
- 2 >= 3 (false, porque el 2 no es ni mayor, ni igual al 3)
- 2 >= 2 (true, porque el 2 no es mayor, pero si igual a 2)

### Operador Lógico.
&& (and)
- true && true && true (devuelve true).
- true && true && false (devuelve false, todas las condiciones se tienen que cumplir).
- ( 2===2 ) && (4===4) (devuelve true, porque las 2 se cumplen)

|| (or)

false || true (almenos una de las condiciones se cumpla, devuelve true)
- 2 > 3 || 3 > 2 (la primera es false, la segunda true, por lo tanto devuelve true, porque al menos una condicion se cumple).

Y bueno, como hemos visto antes, el ! devuelve lo contrario a algo.
- !true (devuelve false) y !false (devuelve true)

### NULL y Undefined.

### Big INT y Symbol.

No puede respresentar numeros enormes como 98127319245719274198274981274891724891274918724.
La máquina no puede, por lo tanto la representa como un 9870976123e2.

Sin embargo, queremos que igualmente lo represente de esa forma, como hemos pedido para ello.
Ponemos una "n" al final del numero para usar el **Big INT**.

Y symbol, básicamente crea algo único y diferente, algo que no existe.
Symbol() === Symbol() siempre devuelve false.
Porque siempre van a ser diferentes.

### Variables.

Para crear una variable, uso "let"
- let dinero = 500 (PRIMERO, me va a devolver *undefined*.)

Porque una cosa es **una expresión** (que nos devuelve un valor) y otra un **declaración** ( que le estamos diciendo a la máquina que hacer)(o sea, que tu puedes hacer que sume 2 numeros o que hague algo, y no te muestre en pantalla nada).


Si yo pongo, dinero, me duelve "500".
- juan = 12 (y luego pongo juan, me devuelve 12)

Podemos ahcer esto también:
```
dinero = 12
dinero = dinero + 20 + 100
```
(que devuelte entonces 132)

### Constante.

No se puede volver a cambiar el contenido que tenía.

- const frase = "This is fine"

Nos va a dar un error si hacemos:

- frase = "manolo" --> error

### Estructura de control. IF.
```
let tenemos_comida_dentro = true

if (tenemos_comida_dentro) {
  "cocinar"
}
```

Lo que va a  hacer este If, es básicamente, imprimir.


Entonces, si hacemos que esta variable, sea false, pues en ese caso, el resultado va ser undefined.
Por lo tanto, sabemos que **La condición, LA TIENE QUE CUMPLIR, tiene que ser TRUE**.

```
let tenemos_comida_dentro = false

if (tenemos_comida_dentro) {
  "cocinar"
}
```

Ahora podemos hacer un else. En caso de que la instrucción no se cumpla. **EN CASO DE QUE SEA FALSE**.

```
let tenemos_comida_dentro = true

if (tenemos_comida_dentro) {
  "cocinar"
} else {
  "ir al supermercado"
}
```

otro if:
```
const Cantidad_de_detergente = 100
if (Cantidad_de_detergente < 10) {
  "detergente insuficiente"
}else if (cantidad_de_detergente < 20){
  "detergente está casi"
}else if (cantidad_de_detergente < 25){
  "detergente está a nada de nada, a un pelo"
}
```

### Indentación

Es importante que los códigos sean legibles. Con tabulaciones justas y suficientes.


### Estructura de control. WHILE.

