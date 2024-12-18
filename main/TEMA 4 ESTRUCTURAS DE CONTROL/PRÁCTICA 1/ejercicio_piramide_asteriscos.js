/* ESTO NO ES PHP

for (i = 1; i < 11; i++) {
    for (j = 1; j < i; j++) {
    
        console.log("*")
    }

}
*/

// CONSOLE.LOG HACE AUTOMÁTICAMENTE UN SALTO DE LINEA
// el problema es que necesitamos de alguna forma, que acumule en una linea los caracteres...
// NECESITO CONCATENAR.

for (i = 1; i < 11; i++) {
    let linea = ""; // POR CADA VEZ que se recorra el bucle for, la cantidad de asteriscos va a ser diferente es por eso que lo ponemos dentro, para que se vuelva 0 cada vez que inicie
    for (j = 1; j < i; j++) {
        linea += "*";
        
    }
    console.log(linea)
}