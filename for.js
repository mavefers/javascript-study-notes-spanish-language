//NOTA: 'function' funciona para pasar el parametro, entre otras cosas mas.

// Loops:
// Es una manera rapida y sencilla de poder hacer que un trabajo se repita de manera automatica dependiendo de una condicion.
//
// Sirve para que ciertos codigos se ejecuten repetidamente, de una manera automatica, dependiendo de una condicion.
// Es una cadena que se rompe, siempre y cuando la condicion ya no sea verdadera.
// La funcion de los Loops se definen en "trabajo" y "condicion".
//
// Existen varios tipos de "Loops", dependiendo del caso de uso, necesitaremos un tipo u otro.
// TIPOS DE LOOPS:
//
// - Tres elementos que controlan el Flujo de ejecucion del bucle:
// > Inicializacion: Fija los valores con los que ejecutamos el blucle.
// > Condicion de Permanencia: Hace que el loop continue hasta que la condicion deje de ser 'true' y la cadena se rompa.
// > Actualizacion: Actualizacion de la Variable que controla esa condicion: El loop continua, utilizando diferentes datos. Ejm: i++


// Loop "while" (mientras):
// Mientras se cumpla la condicion, se ejecutara la tarea que tenemos entre llaves.

// ESTRUCTURA / SINTAXIS :

let condicion;

while(condicion) { // siempre que se cumpla esta condicion,
    codigo          // se ejecutara este codigo.
}

//caso de error común
while(true) {       // si la condicion es 'true'
    codigo          // este codigo se ejecutara infinitas veces.
}                   // Es un error muy comun en programacion. Se recomienda detectar si hay un bucle/loop infinito.


// Ejemplo

let i = 1;          // variable que controla la condicion.
while (i < 11) {
    console.log(i); // codigo que imprime 'i'
    i++; // Sirve para actualizar la variable que controla la condicion.
         // En este caso, en el primer loop i=1, en el sgt loop i=2, y asi, hasta que la condicion deje de ser verdadera.
}

function loopWhile(num) { // 'num' es por donde pasan los parametros
    let i = 0; // declaramos la variable
    while (i < num) { // while es un bloque de codigos. "{}"
        console.log(i);
        i++; // con esto, el valor de 'i' se va incrementando +1;
    }
}
loopWhile(4);




function intVar(num) {
    let i = 1; // empieza en 0, ya que 'i' es igual a '0'
    while (i <= num) {
        console.log(i);
        i++;
    }
}

intVar(4);

//resultado sera la impresion de:
//1
//2
//3
//4

//

// Loop "do while":
//                  Es muy similar al loop while, pero ejecutandose primero el bloque 'do', para luego hacer el bloque 'while'.

// ESTRUCTURA:
function doWhile(num) {
    let i = 0;
    do {
        console.log(i);  //1) El trabajo inicia aqui
        i++     //2) Instruccion que le agrega +1 al valor de la variable.
    } while (i < num);  //3)Se ejecuta la condicion. Si es verdadera, vuelve a realizar el bloque 'do'.
                        //La funcion de while es que se repita el bloque 'do', siempre y cuando la condicion sea verdadera.
                        //La funcion de 'while' es hacer que se repita de nuevo el bloque 'do', hasta que la condicion sea falsa.
}
doWhile(4);
//RESULTADO:
// 0
// 1
// 2
// 3

// Ejemplo, si la condicion es *falsa*.
// Cuando la condicion es *falsa*, el bloque 'do' se ejecuta si o si, al menos 1 vez.
function doWhile(num) {
    let i = 11;
    do {        //Comienza la ejecucion el bloque 'do'.
        console.log(i); //1) Imprime la variable 'i'.
        i++;       //2) Instruccion que agrega +1 al valor de la variable.
    } while (i <= num); //3)Revisa la condicion.
}

doWhile(10); //Este parametro (10) hace que la condicion sea falsa. Fin. // Solo ejecuto la impresion.
//RESULTADO:
// 11
//
//Notas:
// Se realizo el bloque 'do'. Se reviso la condicion de 'while'. No se realizo el loop porque la condicion de 'while' es falsa.





//          Loop 'for'
// El loop 'for' tiene la misma funcion que 'while', pero poniendo 
// En el loop 'for', la variable a tirar se declara dentro de los parametros del 'for'.
// Es muy comun usar y encontrar 'for' en arrays.
// Con 'for' pueden hacer codigo mas eficiente y reducir el gasto en procesamiento.

//SINTAXIS:

// for(inicializacion; condicion de permanencia; actualizacion) {
//     codigo que queremos que se ejecute;
// }

//EJEMPLO

for (i = 0; i < 3; i++) {
    console.log(i);
}
//RESULTADO:
//0
//1
//2

//Ejemplo2
function loopFor(num) {
    for(i=1; i <= num; i++) {
        console.log(i);
    }
}

loopFor(5);

//RESULTADO:
//1
//2
//3
//4
//5

//

// Estructura 'Array'.

// Es una estructura de datos en la cual puedes almacenar en slots, espacios o huecos, diversos datos, como variables, datos, otras estructuras de datos, etc.
// Es como una comoda donde en cada cajon puedes guardar, un numero, un texto, otro array, otro objeto, etc.
// Son varios elementos guardados en una sola variable, con la que se puede trabajar con ella.


//


// Template Strings (ES6) :
//
//Se trata de una nueva función de un grupo de nuevos tipos de funciones relacionados al string, que se llama 'Template Strings'.
//Este grupo de funciones, llamado “Template Strings” son traídos en la nueva actualización de ES6.
//Cabe recalcar que ES6 no está disponible en todos los navegadores, y uno de los navegadores que sí soporta la actualización ES6, es Chrome, a partir de su versión 41.

// Es una cadena de string.
// Se puede hacer un string multilinea con un solo codigo.
// Se declaran utilizando comillas invertidas o *backticks* (` `). NOTE: No es lo mismo `...` que '...' o "..."; estos ultimos son incorrectos.
// Source: https://www.computerhope.com/jargon/b/backquot.htm
// https://www.w3schools.com/js/js_string_templates.asp

//SINTAXIS:
`Hello world`

//EXAMPLE:
var template = `hello world`;
console.log(template);
//IMPRIME:
// hello world

//EXAMPLE2:
console.log(`Bonsoir`);
//THIS PRINT:
//Bonsoir

//Tambien reconoce todo tipos de expresiones, objetos, operaciones, etc.
//EJEMPLO:
var arrayPeople = ["alumnos", "profesores"];
let lugar1 = "la clase";
console.log(`Hay ${4+6} ${arrayPeople[0]} y ${1906/953} ${arrayPeople[1]} en ${lugar1}.`); //Aqui se esta usando *Operaciones Aritmeticas*, *Arrays*, *Objetos*.
//THIS PRINTS:
//Hay 10 alumnos y 2 profesores en la clase.

//Tambien reconoce los 'enters', 'break' o 'saltos de linea', para pasar a la siguiente linea:
//SINTAXIS:
var template = `hello
world`;
console.log(template);
//THIS PRINTS:
//hello
//world

//Tambien reconoce "tabulaciones", whitespace o espacios:
//SINTAXIS

//EXAMPLE:
var temple = `hello
    <<< this is a whitespace
world`;
console.log(temple);
//this prints:
//hello
//  <<< this is a whilespace
//world


//INTERPOLACION
// Es el acto de incrustar *expresiones* de JavaScript en una string o cadena de texto.
// Es muy diferente la practica de *concatenar* a la de *interpolar*
// Al *interpolar* solo estas generando 1 cadena de texto, string, como `texto1 ${expresion} texto1`.
// Al *concatenar* estas generando mas de una cadena de texto, string, como "texto1" + variable + "texto2". No hay limite de concatenacion.
// NOTA: La cadena de texto, o "string", no se rompe.


//EXAMPLE:
let name = "Dominick";
var templ = `Hey ${name}! How's it going?`
console.log(templ);
//THIS PRINTS:
//Hey Dominick! How's it going?


// Source:
// GENRAL:               https://freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/
// PLANTILLAS LITERALES: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
// INTERPOLACION:        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting