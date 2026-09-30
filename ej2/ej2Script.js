let Filas = ["Nombre", "Primer apellido", "Segundo apellido", "Fecha"];
let datos = prompt(
  //Pepe,Fernandez,García,1995/9/12
  "Introduce nombre, apellidos y fecha de nacimiento separado por comas:",
);
let separados = datos.split(",");
console.log(separados[3]);
let separadosFecha = separados[3].split("/");
let fecha = new Date(
  parseInt(separadosFecha[2]),
  parseInt(separadosFecha[1]),
  parseInt(separadosFecha[0]),
);
let fechaValida = !isNaN(Date.parse(fecha));
if (fechaValida == true) {
  separados[3] = fecha;
} else {
  separados[3] = "La fecha introducida no tiene el formato adecuado";
}
document.write("<table border>");
for (let i = 0; i < 4; i++) {
  document.write("<tr>");
  document.write("<td>" + Filas[i] + "</td>");
  document.write("<td>" + separados[i] + "</td>");
  document.write("</tr>");
}
document.write("</table>");
