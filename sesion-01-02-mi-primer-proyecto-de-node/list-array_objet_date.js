//Listas, array, arreglo
const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(2, "hola", false, null)
const lista3 = new Array(3)
lista3[0] = "Soy el primer elemento, index0"
const lista4 = [lista, lista2, lista3]

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)


//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raúl"],
    tarjeta: {
        marca: "Movistar",
        almacenamiento: 64
    },
    "altura-tarjeta": 4
}

movil.anyo = 2019
movil.marca = "Samsung"

console.log(movil.contactos)
console.log(movil.anyo)


//Fechas
//Librerías de apoyo Moment.js
const ahora = new Date()
console.log(ahora)

const fecha_milis = new Date(10) //Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date ("April 03 2024")
console.log(fecha_cadena)

const fecha_valores = new Date(2024, 3, 3) //La fecha se maneja como array 0 = january
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1 //Se suma porque 0 = january
const anyo = ahora.getFullYear()
console.log(dia, mes, anyo)

