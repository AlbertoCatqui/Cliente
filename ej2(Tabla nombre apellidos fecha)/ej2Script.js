let filas = ["Nombre", "Primer apellido", "Segundo apellido", "Fecha"];
let datos = prompt(
  //Pepe,Fernandez,García,1995/9/12
  "Introduce nombre, apellidos y fecha de nacimiento separado por comas:",
  "Pepe,Fernandez,García,1995/9/12",
);
let datosSeparados = datos.split(",");
if (datosSeparados.length == 4) {
  let fechaSeparada = datosSeparados[3].split("/");
  let fecha = new Date(
    parseInt(fechaSeparada[2]),
    parseInt(fechaSeparada[1]),
    parseInt(fechaSeparada[0]),
  );
  if (!isNaN(Date.parse(fecha)) == true) {
    datosSeparados[3] = fecha;
  } else {
    datosSeparados[3] = "La fecha introducida no tiene el formato adecuado";
  }
  document.write("<table>");
  for (let i = 0; i < 4; i++) {
    document.write("<tr>");
    document.write("<td>" + filas[i] + "</td>");
    document.write("<td>" + datosSeparados[i] + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
} else {
  alert("Intruduzca los datos indicados correctamente");
}
