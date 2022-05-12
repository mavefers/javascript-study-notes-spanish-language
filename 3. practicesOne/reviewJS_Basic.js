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
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free" ) {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (suscriptionType === "Expert+") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}



RETO:


const tipoDeSuscripcion = [
    {"Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Free": "Solo puedes tomar los cursos gratis",
    "Expert":"Puedes tomar casi todos los cursos de Platzi durante un año",
    "Expert+":"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
 ];

const plan = "Basic";

if (tipoDeSuscripcion[0][plan] ){
    console.log(tipoDeSuscripcion[0][plan]);
}else{
    console.log("No tienes ningun tipo de suscripción")
}

***
var planes = ["Free", "Basic", "Expert", "ExpertPlus"];
function losPlanes(miPlan) {
    for(i=0; planes[1]; i++) {
        element = planes[i]
    }
}
***
***

const tipoDeSuscripcion = [
    {"Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Free": "Solo puedes tomar los cursos gratis",
    "Expert":"Puedes tomar casi todos los cursos de Platzi durante un año",
    "Expert+":"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
 ];

const plan = "Basic";

if (tipoDeSuscripcion[0][plan] ){
    console.log(tipoDeSuscripcion[0][plan]);
}else{
    console.log("No tienes ningun tipo de suscripción")
}
VM80:11 Puedes tomar casi todos los cursos de Platzi durante un mes
undefined
tipoDeSuscripcion[0][plan]
'Puedes tomar casi todos los cursos de Platzi durante un mes'
const tipoDe = [
    {"Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    2: "Solo puedes tomar los cursos gratis",
    6:"Puedes tomar casi todos los cursos de Platzi durante un año",
    "x":"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 1500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Audifonos", costo: 1700},
 ];
undefined
tipoDe[2]['nombre']
'Tv'
tipoDe[2]
{nombre: 'Tv', costo: 1500}
tipoDe[2].costo
1500
tipoDe[2].nombre
'Tv'


const xx = 'nombre';
undefined
tipoDe[2][xx]
'Tv'
tipoDe[1][nombre];
VM704:1 Uncaught ReferenceError: nombre is not defined
    at <anonymous>:1:11
(anonymous) @ VM704:1
tipoDe[1]['nombre'];
'Bici'
tipoDe[0][2];
'Solo puedes tomar los cursos gratis'
tipoDe[0]['2'];
'Solo puedes tomar los cursos gratis'
tipoDe[0]["2"];
'Solo puedes tomar los cursos gratis'
tipoDe[0][`2`];
'Solo puedes tomar los cursos gratis'


***


Quiere decir que tipoDeSuscripcion[0][plan] es un solo código independiente, siendo tipoDeSuscripcion[0] una referencia a un objeto, y [plan], siendo una referencia a una propiedad que a su vez hace referencia al valor que lleva dentro, que es similar a la propiedad que tenemos dentro del objeto tipoDeSuscripcion[0] para que asi conecten como iguales y poder obtener el valor de “Basic”.
O sea que el valor “Basic” de la variable plan, ya no estaría actuando como valor, sino como una propiedad… Interesante…
Muchas gracias!!

Estuve experimentando y me percaté que al declararlo como una sintaxis de array, `tipoDeSuscripcion[0]['Basic']`, es necesario realizarlo bajo string 'Basic', así esa propiedad no sea un string, sino una variable. Algo similar pasa con los números, que esos sí pueden ser declarados como números, como también como cualquier tipo de de cadena de texto, string, como [2], ['2'], ["2"] o [`2`]; todos son iguales, o es lo que veo, que todos funcionan.


***


En los objetos, las propiedades del declaradas con el mismo nombre reemplazan a la propiedad anterior que llevaba el mismo nombre.

Por ejemplo:
let colores = [
    {
        color: "Azul",
        color: "Rojo",
        color: "Naranja"
    },
]
//- Aquí podemos observar que la primera propiedad que lleva el valor "Azul",
    es reemplazada por la nueva propiedad con el mismo nombre, pero que lleva un valor distinto, "Rojo".
    Y esta propiedad declarada, es reemplazada por una última propiedad del mismo nombre, que lleva un diferente valor, "Naranja".
//- Quiere decir que, por más que veamos tres propiedades, en el retorno solo existirá la última propiedad.

//- Lo correcto es lo siguiente:
let colores = [
    {
        color1: "Azul",
        color2: "Rojo",
        color3: "Naranja"
    },
]

***

Hay dos maneras de obtener un valor de un objeto, por su propiedad:
-   Usando la sintaxis de objeto -   nombreObjeto[0].propidad;
-   Usando la sintaxis de array -    nombreObjeto[0][propiedad];
*/