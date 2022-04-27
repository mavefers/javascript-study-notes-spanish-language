//Nota1:     Template = Modelo o Plantilla.
//Nota2:    Los parámetros son los nombres que aparecen en la definición de una función.
//          Por su parte, los argumentos son los valores que le pasamos (y que, por tanto, recibe) una función.


//OBJETOS
//Un objeto es una colección de datos y/o funcionalidades que se relacionan.
//Es una representacion abstracta de una cosa de la vida real.
//Los objetos se manejan con propiedades, y las propiedades son una combinacion de palabras clave y sus valores.
//Las llaves indican desde donde inicia y hasta donde termina el objeto. {...}
//Los números de funcionan como valor, se escriben y manejan como datos numéricos, no como string.
//Al igual que los números, los datos booleanos también se manejan como booleans, no como strings.
//--- Las propiedades se separan con *coma*.

//SYNTAX:
//Están conformados por propiedades y su valor; siendo representados en el ejemplo, las *propiedades* como *palabraClave* y su valor.
var objeto = {
    palabraClave: "valor",
    palabraClave2: 40,
    palabraClave3: "valor 3"
};

//

//EXAMPLE:
let miAuto = {
    color: "Amarillo",
    puertas: 5,
    marca: "Jeep",
    annio: 2016
};

//Para utilizar las variables que se encuentran dentro del objeto:

miAuto.color; //Amarillo
miAuto.puertas; //5
miAuto.annio; //2016
console.log(miAuto.marca); //Jeep


//EXAMPLE2:
let objetoLula = {
    ser: "can",
    color: "sal y pimienta",
    nombre: "Lulú",
    edad: 9,
    peso: 11
};

console.log(`Tengo una ${objetoLula.ser} llamada ${objetoLula.nombre}, ella es de color ${objetoLula.color}, pesa ${objetoLula.peso} kilos y tiene ${objetoLula.edad} años de edad.`);
//Tengo una can llamada Lulú, ella es de color sal y pimienta, pesa 11 kilos y tiene 9 años de edad.


//

//Funciones en Objetos (o *Metodos* de Objeto) // *FUNCIONES CONSTRUCTORAS*
//Las *propiedades que llevan una funcion como *valor* se le llaman *Metodos*.
//NOTA IMPORTANTE: Para acceder a un valor específico, primero se necesita escribir el 'nombre del objeto.'
//                 seguido del nombre de la propiedad o método. Ejemplo: objeto.propiedad;   /   objeto.metodo();

let objeto2 = {
    propiedadNormal: "valor x",
    metodo: function() {
        console.log(`Interpolación de ${this.propiedadNormal}Aqui se pone una tarea. Se está usando un console.log(), como ejemplo.`)
    } //No se necesita cerrar con 'punto y coma' (;)
}
//Para utilizar las propiedades que se encuentran dentro de los Metodos de Objeto:
objeto.metodo();



//this. (Objetos Literales)
//Es una variable que hace referencia al 'objeto padre'. - Funciona solo estando dentro de una variable u objeto.

//EXAMPLE:
let miCarro = {
    color: "Amarillo",
    puertas: 5,
    marca: "Jeep",
    annio: 2016,
    detallesDelCarro: function() {
        console.log(`${this.marca} ${this.color}`)
    }
};

miCarro.detallesDelCarro();
//Jeep Amarillo



////


//funcion constructora:
//Es la manera de hacer objetos de forma automatica.
//Loop para hacer multi objetos de manera automatica.
//Generar objetos de forma automatica, menos manual.
//Para generar varios objetos de manera automatica.
//--- Las propiedades se separan con punto y coma.
//El nombre de la propiedad, no tiene nada que ver con el argumento o parametro.
//Para que la propiedad tenga que ir acorde con el valor, se le pone el mismo nombre, pero no llevan ninguna relacion.
//En los argumentos no se especifican los tipos de datos, solo son nombres para introducir un dato.


//SYNTAX:
function NombreDeLaFunction(argumento1, argumento2, argumento) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


//construir el objeto
var llamarFuncionXnombre = "x";
var nombreDescriptivo = new llamarFuncionXnombre("aqui van los parametros"); //new, operador que genera un *objeto* que deriva de otro objeto.
//new, genera una una instancia de la funcion constructora.


//EXAMPLE-TEMPLATE:
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//EXAMPLE/Construccion de objeto:
var autoNuevo = new auto("Tesla", "Model S", 2020);
var autoNuevo2 = new auto("Jeep", "Raptor", 2021);


//EXAMPLE2:
function anillo(metal, color, peso, annio) {
    this.metal = metal;
    this.color = color;
    this.peso = peso;
    this.annio = annio;
}

var anillo1 = new anillo("oro", "dorado", 5.5, 2019);
var anillo2 = new anillo("plata", "plata", 5.3, 2018);



//EXAMPLE3 (OBJETO dentro de una Function Constructora)
//Template de funcion constructora:
function Celular(marca, modelo, color, material, tecnologia, red, sO, version) {  //Funcion constructora
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.hardware = {       //Objeto que esta dentro de una funcion contructora. /el nombre agrupa el contenido de manera descriptiva.
        cuerpo: material,
        pantalla: tecnologia,
        antena: red,
    }
    this.software = {       //Objeto que esta dentro de una funcion constructora. /el nombre agrupa el contenido, de manera descriptiva
        sO: sO,
        version: version
    }
}

//Crear objeto:
let celular1 = new Celular("Xiaomi", "Poco X3 NFC", "Azul", "Plastico", ["FHD+", "LCD", "IPS"], ["3G", "4G"], "Android", 12);



//


//Source:
//Diferencia entre 'parametros' y 'argumentos': https://didacticode.com/curso/curso-javascript/leccion/javascript-1-17-funciones-parametros-argumentos/#:~:text=As%C3%AD%2C%20los%20par%C3%A1metros%20son%20los,tanto%2C%20recibe)%20una%20funci%C3%B3n.
// https://www.google.com/search?q=argumento+o+parametro+diferencia+javascript&sourceid=chrome&ie=UTF-8
//Funciones constructoras: https://youtu.be/jr1pXcQ_70Y





//Ejemplos extras:

var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]
var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var annio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]
function Autos(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}
for (var i = 0; i < marca.length && i < modelo.length && i < annio.length; i++) {
    var newAuto = new Autos(marca[i], modelo[i], annio[i]);
    console.log(newAuto);
}


//


let marca = ["Mi", "iPhone", "Galaxy"];
let modelo = ["11 Pro", "12 Pro", "Z Fold 3 5G"];
let annio = [2019, 2020, 2022];

function Celulares(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}

for(i = 0; i < marca.length && i < modelo.length && i < annio.length; i++) {
    var  celular = new Celulares(marca[i], modelo[i], annio[i]);
    console.log(celular);
}