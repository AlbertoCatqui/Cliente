let array = ["José", "Perez", "García", "C/ Mayor,1"];
let array2 = ["José", "Perez", 999999999, 888888888];
let [nombre, apellido1, apellido2, direccion, telefono = 123123123] = array;
let [nombre2, , ...telefonos] = array2;
//let [nombre, , apellido2, direccion] = array; Para "saltarse" un dato ", ,"
console.log(nombre + " " + apellido1 + " " + apellido2 + " " + direccion);
console.log(nombre2 + " " + telefonos);
console.log(telefono);
let [a, b, c] = [1, 2, 3]; //inicializar 3 variables a la vez a,b,c
console.log(a + " " + b + " " + c);
[a, b, c] = [c, b, a]; //a=c, b=b, c=a
console.log(a + " " + b + " " + c);
