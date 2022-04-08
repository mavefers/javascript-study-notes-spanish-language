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
// Tres elementos que controlan el Flujo de ejecusion del bucle:
// Inicializacion: Fija los valores con los que ejecutamos el blucle.
// Condicion de Permanencia: Hace que el loop continue hasta que la condicion deje de ser 'true' y la cadena se rompa.
// Actualizacion de la Variable que controla esa condicion: El loop continua, utilizando diferentes datos. Ejm: i++


// Loop "while" (mientras):
// Mientras se cumpla la condicion, se ejecutara la tarea que tenemos entre llaves.

// ESTRUCTURA:

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
        i++;        //2) Agrega +1 al valor de la variable.
    } while (i <= num); //3)Revisa la condicion.
}
doWhile(10); //Este parametro (10) hace que la condicion sea falsa. Fin. // Solo ejecuto la impresion.
//RESULTADO:
// 11