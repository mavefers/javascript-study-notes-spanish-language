/*
Repaso - Review

Tipo de valores:
PRIMITIVOS
Numero, 10
Texto, String, cadena de texto, "string"
Boolean, true o false; sirven para validar si tomamos una decision o no.
Empty values, valores playsholder, null o undefined

NO PRIMITIVOS o TIPO OBJETO:
Valor tipo Array, [1,2,3]
Valor tipo Objeto, {nombre: "Andres"}

Para saber que tipo de valor es un valor, se usa la palabra, typeof.
Ejemplo:
    typeof "hola" // "string"
    typeof "" // string
    typeof Adfer // "undefined"
    typeof 39 // "number"
    typeof true // boolean
    typeof false // boolean
    typeof null // object
    typeof undefined // undefined
    typeof [] // object
    typeof {} // object




REPASO

Variables y operaciones

1.
Variable:
- Una variable es un espacio en memoria, sirve para almacenar todo tipo de dato o valor.
Es la representacion de algun lugar en memoria que nosotros vamos a reservar para poder guardar un valor de diferentes tipos.


Diferencia entre declarar e iniciar una variable:
- Al declarar una variable, comienzas a crear un espacio en memoria, al cual le das un nombre como identificador. Ejm: 'var pack;'
Cuando inicializas una variable, estás otorgando un valor a un espacio vacío en memoria, que vendría a ser una variable no inicializada. Ejm: 'var pack = 47;'


Diferencia entre sumar numeros y concatenar strings:
-Sumar numeros es un calculo matematico que retorna un nuevo valor, en base al tipo de operacion que se esta realizando.
-Concatenar Strings es la accion de agrupar valores de tipo texto, siendo combinados en un nuevo valor; si los valores concatenados son numeros, pasan a convertirse en strings.


Operador que permite sumar o concatenar:
- El signo de suma, +.
-   Otros operadores para realizar concatenaciones son   `texto ${variable} texto`


2.
Nombre, variable tipo string = 'Tomas'
Apellido, variable tipo string = 'Thomson'
Nombre de usuario en Platzi, variable tipo string = 'Tom'
Edad, variable tipo number = 32
Correo electronico, variable tipo string = hola@mundo.com
Mayor de edad, variable tipo Boolean = true
Dinero ahorrado, variable tipo number = 19000
Deudas, variable tipo Number = 4000


3.
let name = 'Tomas';
let lastname = 'Thomson';
let usernamePlatzi = 'Tom';
let age = 32;
let email = 'hola@mundo.com';
let adult = true;
let savedMoney = 19000;
let debts = 4000;


4.
let nombreCompleto = name + ' ' + lastname; || let nombreCompleto = `${name} ${lastname}`;
let dineroNeto = savedMoney - debts;



Funciones
1.
¿Qué es una función?
-   Una función es un pedazo de código reutilizable en el que hay un conjunto de instrucciones, 
este código solo se ejecuta cuando se llama a dicha función.

¿Cuándo me sirve usar una función en mi código?
-   Cuando hay un pedazo de código que se tiene que repetir constantemente.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
-   Los parámetros son la lista de variables que ponemos cuando se construye una función.
Ejemplo:
    function sum(a, b) {    // a, b son los parámetros
        return a + b;
    }
-   Los argumentos son los valores que se pasan a los pámetros de dicha función, teniendo en cuenta la posición en la que se declara.
Ejemplo:
    const result = sum(4, 8);    // viéndolo desde otra perspectiva, a = 4, b = 8




2.
Convierte el siguiente código en una función, pero,
cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
***
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
***
=>
***
const name = "Juan David";
const lastname = "Castro Gallego";
function datos(completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
datos(name + " " + lastname, "juandc");
//
"Mi nombre es Juan David Castro Gallego, pero prefiero que me digas juandc."
***



Condicionales
1.
¿Qué es una condicional?
-   Las condicionales o condicionadores son *reglas* que aplicamos *para poder validar* si algo es *verdadero* o es *falso*,
    y podamos generar ciertas acciones con eso. Valida el proceso solo si es verdadero; si no es verdadero, no parará nada.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
-   if... else: Si la primera condición es falsa, sucede lo siguiente, si es verdadera, ocurre solo la primera parte.
    if... else if... else: Si la primera condición es falsa, sucede lo siguiente; si también es falsa, sucede la última parte sí o sí;
    si la condición en algún punto es verdadera, ese bloque se detiene ahí, y ya no recorre todo el bloque de código.
    switch... case... break... default: 

¿Puedo combinar funciones y condicionales?
-   Sí. Todo es posible en JavaScript.


2.
Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
***
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
***

||

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free" ) {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


3.


*/