//alert("estoy vivo!");
//comentario de una sola linea

/* 
comentario
varias 
lineas
*/
//variable es un elemento que  su valor puede cambiar dependiendo de las circunstancias
//varible es un espacio de memoria, y dependiendo de su valor o del elemento que esté dentro es el tipo de variable que tenemos

recipiente = "agua";
recipiente = "cafe"; 
recipiente = "colores y lapices";
//usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente
console.log(recipiente);
/*quieresSerMiNovia;
edad;
altura;
peso;
genero;
tipos de datos(primitivos y no primitivos)
se le llaman primitivos porque son datos que no pueden ser modificados, ya vienen el el lenguaje y se consideran el dato mas simple
y basico que existe.
-string: sirve para agregar valores en texto. para que se considere así, el valor debe estar dentro de comillas simples (''), dobles (""), y backticks(´´).
-number: sirve para agregar valores en formato numerico(para poder usarlos en operaciones aritmeticas) estos valores no usan comillas
-boolean: sirven para representar valores del tipo true o false
-undefined: sirve para representar un tipo de dato que no tiene valor. Cuando declaramos variables son inicializar, tendremos datos del tipo undefined.
-null: sirve para definir que un valor es nulo.
-symbol:
-object (no es primitivo)
-Nan: not a numnber sirve para representar un valor que no es un numero. Lo obtenemos cuando hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.

*/
apodoDeFelipe ="el 'amante numero uno' de los chilaquiles verdes";
console.log(apodoDeFelipe);
edadDeFelipe =31;
costoDeUnGansito = 18.50;
cuentaDeFelipe =-156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);


 //ejemplos booleanos
esAdministrador =true;
contraseniaCorrecta =false;
cuentaPremium = false;
//ejemplo de datos indefinidos
//respuestaDeMiCrush;
//precioBoletoEstacionamiento;

//console.log(respuestaDeMiCrush);


//ejemplos de valores nulos
respuestaDeMiCrush = null; 
console.log(respuestaDeMiCrush);

//ejemplos con NaN
operacionMatematica = 0/0;
console.log(operacionMatematica);


/* typeOf
Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando
typeOf(el dato a evaluar);
todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.
*/
console.log(typeof(esAdministrador)); //boolean
console.log(typeof(edadDeFelipe)); //number
console.log(typeof(operacionMatematica)); //number
