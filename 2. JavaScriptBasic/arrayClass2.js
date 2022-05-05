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


//



//TEMA PRINCIPAL:
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



//Methods: .map - Crea un nuevo Array con los resultados de la llamada. Funciona como el loop 'for ... of'.

// Ejemplo1:
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


//Ejemplo4:
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
console.log(nombreArticulos);
//['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'Audifonos']



//Method .find();
//Nos ayuda a encontrar algo dentro del array y lo almacena en un nuevo array.
//.find(); devolverá el primer parámetro que coincida con el proceso de validación.
//Una vez que se obtenga el primer valor, ya no analizará los siguientes valores, y finalizará su proceso. Solo procesa el primero.
//Recordatorio: El motor de JavaScript procesa el código leyendo desde arriba hacia abajo, o sea, desde la primera linea, hasta la última.
//Valida un 'true' o un 'false'. Si el elemento existe, lo regresa, y si no existe, no lo regresa (return).

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 1500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Laptop", costo: 10000},
    { nombre: "Laptop", costo: 30000},
    { nombre: "Audifonos", costo: 1700},
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" ;
})
console.log(encuentraArticulo);
//[{nombre: 'Laptop', costo: 20000}]



//



//Method .forEach();
//No genera un nuevo array, solo realiza un filtrado sobre el Array, sin modificarlo, y te retorna los elementos filtrados.


var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 1500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Laptop", costo: 10000},
    { nombre: "Laptop", costo: 30000},
    { nombre: "Audifonos", costo: 1700},
];

articulos.forEach(function(articulo){
    console.log(articulo.costo);
});

//3000
//1500
//320
//10000
//20000
//10000
//30000
//1700



//



//Method .son();
//Sirve para comprobar si al menos un elemento del array cumple con la condición interpuesta por la función realizada.
//Realiza una validación de 'true' o 'false' (verdadero o falso), analizando cada elemento,
// y retorna si la condición es true o es false.
//Solo se necesita que al menos un elemento sea 'true'/verdad para que se valide como verdadero/'true'.
// Si no hay ningún elemento que cumpla con la condición interpuesta, nos retornaría un 'false'.
// No retorna ningún elemento. 

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 1500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Laptop", costo: 10000},
    { nombre: "Laptop", costo: 30000},
    { nombre: "Audifonos", costo: 1700},
];

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo >= 10000;
});

console.log(articulosBaratos);
//true


// - Caso de un ejemplo real:
// Si un usuario que le interese comprar en una e-commerce, quiere validar si hay artículos que cumplan con cierta especificación,
// artículos que tengan alguna promoción, articulos que sean de cierta marca, o de cierto rango de precio; se podría filtrar usando .filter();,
// se le retornaría la validación de 'true' o 'false', usando .some();, para asi inidicarle si hay o no hay cierto artículo,
// y así mostrarle cuáles son esos artículos, usando el método .forEach();


// RESUMEN DEFINITIVO:
//Es importante conocer como funcionan los métodos para no confundirlos y sacarles el máximo provecho.
//Las diferencias más importantes son:
//El .forEach() NO crea un nuevo array y el .map() sí lo hace.
//El .filter() crea un nuevo array con los objetos que cumplan una condición,
//el .some() solamente indica si hay o no algún objeto que cumpla dicha condición.
//El .find() devuelve SOLO el primer objeto que cumpla con la condición.
//  Ejemplo: Si en tu array de artículos tienes una 'bicicleta' de $800 y luego un celular de $800,
//           si usas un .find() para buscar un artículo de $800 como costo, solo aparecerá la 'bicicleta',
//           si deseas ambos tienes que usar un .filter();.
//          -JavaScript lee las lineas de código, desde arriba hacia abajo.