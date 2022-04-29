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

// Example:
//Ejemplo1:
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) { // .map recorre, independientemente, cada elemento del array con el que está trabajando.
                                        // En cada loop, el elemento de turno se guarda en el parámetro de la función.
   return x * 2;        // Cada recorrido de un elemento equivale a un ciclo; y en cada ciclo, el elemento que toca se va modificando.
                        // Y cada elemento modificado pasa a ser guardado como un nuevo elemento de la nueva variable, en este caso, doubles.
});
// doubles ahora es [2, 10, 20, 30]
// numbers sigue siendo [1, 5, 10, 15]

//Ejemplo2:
var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots ahora es [1, 2, 3]
// numbers sigue siendo [1, 4, 9]

//Ejemplo3:
var numbers = [3, 6, 13, 18];
var doubles = numbers.map(x => x - 1);  // Aquí ocurre lo mismo que en *Ejemplo1* y *Ejemplo2*,
                                        // solo que tiene un diferente sintaxis por el uso de 'arrow function',
                                        // en reemplazo del 'function' tradicional.
// doubles is now [2, 5, 12, 17]
// numbers is still [3, 6, 13, 18]


//


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