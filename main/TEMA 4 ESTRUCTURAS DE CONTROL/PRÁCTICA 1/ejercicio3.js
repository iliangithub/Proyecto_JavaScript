// para este quiero usar array o algo parecido.

let curso = ["Primero","Segundo","Tercer","Cuarto"]

let numero_aleatorio_entre_0_y_4 = Math.floor( Math.random() * 4)

let mensaje = ""

if (numero_aleatorio_entre_0_y_4 === 0) {

    mensaje = " Te queda mucho"
    
}else if (numero_aleatorio_entre_0_y_4 === 1) {
    
    mensaje = "Yea vas bien"

}else if (numero_aleatorio_entre_0_y_4 === 2) {
    
    mensaje = "te queda nadaaaa"

}else if (numero_aleatorio_entre_0_y_4 === 3) {

    mensaje = "tu ultimo año yeaaa"
}

console.log ("Estás en " + curso[numero_aleatorio_entre_0_y_4] + " eso significa que: " + mensaje)
