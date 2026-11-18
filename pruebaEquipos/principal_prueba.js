import { Equipo } from "./Equipo.js";
import { Aula } from "./Aula.js";
import { DptoInformatica } from "./DptoInformatica.js";

//pinta aula
function mostrarAula(aula) {
  let equipos = aula.getEquipos();
  for (let i = 0; i < equipos.length; i++) {
    let linea = "Fila " + i + ": ";
    for (let j = 0; j < equipos[i].length; j++) {
      if (equipos[i][j] === null) {
        linea = linea + "null | ";
      } else {
        linea = linea + equipos[i][j].toString() + " | ";
      }
    }
    console.log(linea);
  }
}

let dpto = new DptoInformatica();
let numerosAulas = [213, 214, 215, 216, 217, 218, 220];

for (let i = 0; i < numerosAulas.length; i++) {
  let aula = new Aula(numerosAulas[i], 5, 4);
  if (dpto.addAula(aula, "Grupo " + numerosAulas[i])) {
    console.log("Se ha insertado el aula " + numerosAulas[i]);
  }
}
console.log("TOTAL EQUIPOS: " + dpto.getNEquipos() + " equipos");
console.log("ACTIVANDO EQUIPOS DE SOBREMESA QUE SE VAN A USAR...");
for (let n = 0; n < numerosAulas.length; n++) {
  let aula = dpto.getAula(numerosAulas[n]);
  for (let f = 0; f < 5; f++) {
    for (let c = 0; c < 4; c++) {
      let descripcion =
        "Descripción equipo " + numerosAulas[n] + "-" + f + "-" + c;
      aula.activaEquipo(new Equipo(descripcion, false), f, c);
    }
  }
}
let aula213 = dpto.getAula(213);
mostrarAula(aula213);
console.log(
  "Porcentaje de ocupación tras asignaciones aula 213: " +
    aula213.getPorcentajeOcupacion() +
    "%",
);

function datosPortatiles() {
  console.log("ACTIVANDO PORTÁTILES QUE SE VAN A USAR...");
  let salir = "";

  while (salir.toLowerCase() !== "s") {
    let numAula = prompt("Aula destino:", "220");
    let descripcion = prompt("Descripción:", "Portátil FP Básica 2-1");
    let fila = Number(prompt("Fila:", "2"));
    let columna = Number(prompt("Columna:", "1"));
    let dias = Number(prompt("Nº días:", "30"));

    let aula = dpto.getAula(numAula);
    if (aula === undefined) {
      console.log("El aula " + numAula + " no existe");
    } else {
      let portatil = new Equipo(descripcion, true, dias);
      if (aula.activaEquipo(portatil, fila, columna)) {
        console.log(
          "Equipo portátil " +
            portatil.getId() +
            " añadido correctamente en Aula número: " +
            numAula +
            " *** Fila: " +
            fila +
            "- Columna: " +
            columna,
        );
        mostrarAula(aula);
        console.log(
          "Porcentaje de ocupación aula " +
            numAula +
            ": " +
            aula.getPorcentajeOcupacion() +
            "%",
        );
      } else {
        console.log("No se ha podido añadir el equipo (posición no válida)");
      }
    }

    salir = prompt(
      "Escribe S para terminar (otra tecla para añadir otro):",
      "S",
    );
    if (salir === null) {
      salir = "s";
    }
  }

  console.log(
    "El número total de equipos en el departamento es: " +
      dpto.getNEquipos() +
      " equipos",
  );
}

datosPortatiles();
