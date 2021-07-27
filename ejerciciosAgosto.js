                             //Ejercicios ECMAScript 6//

//   1-Crear una función flecha que reciba un número y 
//     devuelva el doble del mismo.

/* const dobles = numero => numero*2;
console.log(dobles(7)); */

//   2-Crear una función flecha que reciba dos números 
//     y muestre la suma de ellos.

 /* const suma = (numero1, numero2)=> numero1+numero2;
console.log(suma(10,5)); */


//   3-Crear una función flecha que valide si un número es mayor a otro.
//     Luego mostrar el resultado por consola.

/* const validador=(numero1,numero2)=>{if(numero1>numero2)return numero1;else return numero2;}
console.log(validador(100,89)); */
 

//   4-Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:

/* let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"]

const show = frutas.forEach(elemento =>{alert(elemento)});
 */


//    5-Mostrar por pantalla las raíces cuadradas de los números del siguiente array:

/* let numeros = [16,29,120,64,81]
const raizCuadrada = numeros.forEach(elemento =>{alert(Math.sqrt(elemento))});
 */
//    6- Solicitar al usuario su nombre y su signo del zodíaco y
           // devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

/* let nombre_usuario=prompt("Ingrese su Nombre :");
let signo_zodiacal=prompt("Ingrese su Signo Zodiacal:");

const saludar_con_signo = (nombre_usuario,signo_zodiacal)=>`Su Nombre es ${nombre_usuario} y su signo es 🎊 ${signo_zodiacal}  Su Signo es el Mejor♥`;
alert(saludar_con_signo(nombre_usuario,signo_zodiacal));
 */

//         7-Mostrar por pantalla los números mayores a 100 del siguiente array.

/* let numeros = [160,23,120,60,1,-10,8,9483]

const numeros_mayores_a_100 = numeros.filter(numero =>numero>100);
alert(numeros);
alert (numeros_mayores_a_100);*/


//        8-Generar en base a un array, un nuevo array que tenga todos sus números consecutivos,
//      y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 , y en el array de precedentes irá 7).
//      Al final mostrar por pantalla los tres array formados.

/* let numeros = [15,28,32,40,11,-3,0,100];
 const anteriores = numeros.map(numero=> (numero-(1) ));
 console.log(numeros);
 console.log(anteriores);
 const siguientes = numeros.map(numero => (numero+1));
 console.log(siguientes);
  */


 //        9- Crear una función flecha que reciba un parámetro que indique el momento del día: 
//       “Mañana, tarde, noche” y en base a eso de un saludo personalizado. 
//            Ejemplo: “Buenos días, buenas tardes, buenas noches”.

 /* let hora = parseInt(prompt("Ingrese la hora"));
const saludo = hora =>{ if (hora<12&hora>00) return'Buenos Dias☕'; else if (hora>=12&hora<=18)return'Buenas Tardes👨‍💻'; else return 'Buenas Noches😴'};
alert(saludo(hora)); */


//         10-Mostrar del siguiente array los nombres que comiencen con “M”.
/* let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]
const nombres_con_M = personas.filter((elemento) => elemento[0] == "M");
alert(nombres_con_M);
console.log(nombres_con_M);
 */


//          11-Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:
    //a) function despedir (nombre){
    //console.log("Adios" + nombre) }
    //b) function cobrar (monto,pago){
    //return monto - pago;}
    //console.log("Su vuelto es: " cobrar(monto,pago))
    //c) function saludar () {
    //console.log("Hola")}
    
    
    /* let nombre = prompt("Ingrese su Nombre");
    const despedida = nombre => `...Adios ${nombre}`;
    alert(despedida(nombre));
    
 */
/* let monto=parseInt(prompt("Ingrese el precio del Producto:"))
let pago =parseInt(prompt("Ingrese el monto con el que abona "));

const vuelto=(monto,pago)=>{if(pago>=monto) return `Su vuelto es de :${(pago-monto)}`;else return 'No le Alcanza Sr/a'};
 alert(vuelto(monto,pago));

 */
/* let nombre=prompt("Como se Llama?")
 const saludo =nombre => `Hola ${nombre } 🤝`;

 alert (saludo(nombre));
 */

