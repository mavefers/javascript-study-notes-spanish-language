//Previamente:
//Tema: Array
//Tema: Objetos en JS.
//Hay dos grupos de Methods de Array principales: -Methods para mutar.   -Methods para recorrer el Array.

//Remember:
//Array SYNTAX:
[element0, element1, element2];
//Objetos SYNTAX:
let objeto = {
    propiedad: valor,
    propiedad2: valor,
    propiedad3: valor,
}
//Function constructoras:
function Name(argument1, argument2, argument3) {
    this.argument1 = argument1;
    this.argument2 = argument2;
    this.argument3 = argument3;
}
//



// Array con Objetos / Objetos dentro de Arrays

//Tema:
//Methods de recorrido para *obtener propiedades especificas de los objetos que estan dentro de un Array*.


//Methods: .filter() - Nos ayuda a filtrar solo los elementos que seleccionemos (segun ciertos criterios), y devolverlos en un nuevo Array.
//Sirve para validar cosas. No modifica el array origianl.

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 1500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Audifonos", costo: 1700},
];

var grupoArticulos = articulos.filter(function(articulos) {
    return articulo.costos <= 1000
});

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

var articulosFiltrados2 = articulos.filter(function(articulo) {
    return articulo.costo >= 2000
});



//Methods: .map - Crea un nuevo Array con los resultados de la llamada. Funciona como el loop 'for ... of'


var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 1500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Audifonos", costo: 1700},
];

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});