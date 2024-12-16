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
- `Miguel Angel ${10 + 14}` (**PERO SE TIENE QUE USAR ESTE TIPO DE COMILLA INVERTIDA**)
