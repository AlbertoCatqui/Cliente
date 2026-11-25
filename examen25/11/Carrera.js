export class Carrera {
  #nombre;
  #barrio;
  #fecha;
  #equiposInscritos;

  sumVelocidad = 0;
  sumDerrape = 0;
  sumMecanica = 0;

  constructor(nombre, barrio, fecha) {
    this.#nombre = nombre;
    this.#barrio = barrio;
    this.#equiposInscritos = [];
    if (this.comprobarFecha(fecha) == true) {
      this.#fecha = fecha;
    }
    console.log("Carrera " + this.#nombre + " creada");
  }
  inscribirEquipo(equipo) {
    let esInscrito;

    if (equipo.getValido() == true) {
      esInscrito = true;
    } else {
      esInscrito = false;
      console.log("El equipo no es válido para entrar en la carrera.");
    }

    if (equipo.getNivelBusqueda() < 5) {
      esInscrito = true;
    } else {
      esInscrito = false;
      console.log(
        "El equipo tiene demasiadas estrellas para entrar en la carrera.",
      );
    }

    if (equipo.getPiloto().getEspecialidad() == "derrape") {
      this.sumDerrape++;
      //console.log("SUMA DERRAPE" + this.sumDerrape);
    }
    if (equipo.getPiloto().getEspecialidad() == "velocidad") {
      this.sumVelocidad++;
      //console.log("SUMA VELOCIDAD" + this.sumVelocidad);
    }
    if (equipo.getPiloto().getEspecialidad() == "mecánica") {
      this.sumMecanica++;
      //console.log("SUMA MECANICA" + this.sumMecanica);
    }

    if (equipo.getCopiloto().getEspecialidad() == "derrape") {
      this.sumDerrape++;
      //console.log("SUMA DERRAPE" + this.sumDerrape);
    }
    if (equipo.getCopiloto().getEspecialidad() == "velocidad") {
      this.sumVelocidad++;
      //console.log("SUMA VELOCIDAD" + this.sumVelocidad);
    }
    if (equipo.getCopiloto().getEspecialidad() == "mecánica") {
      this.sumMecanica++;
      //console.log("SUMA MECANICA" + this.sumMecanica);
    }

    if (this.sumVelocidad > 2) {
      esInscrito = false;
      console.log(
        "El equipo contiene pilotos con la especialidad velocidad que ya estan cubiertas, no se les puede inscribir",
      );
      this.sumVelocidad = 2;
    }
    if (this.sumDerrape > 2) {
      esInscrito = false;
      console.log(
        "El equipo contiene pilotos con la especialidad derrape que ya estan cubiertas, no se les puede inscribir",
      );
      this.sumDerrape = 2;
    }
    if (this.sumMecanica > 2) {
      esInscrito = false;
      console.log(
        "El equipo contiene pilotos con la especialidad mecanica que ya estan cubiertas, no se les puede inscribir",
      );
      this.sumMecanica = 2;
    }
    //No consigo hacer la comprobación de que ya este en un equipo inscrito un piloto ya inscrito
    /*for (let i = 0; i < this.#equiposInscritos.length; i++) {
      if (equipo.getPiloto() === this.#equiposInscritos[i].getPiloto()) {
        esInscrito = false;
      }
      if (equipo.getCopiloto() === this.#equiposInscritos[i].getCopiloto()) {
        esInscrito = false;
      }
    }
    if (esInscrito == false) {
      console.log(
        "El equipo comparte pilotos con uno ya inscrito, no se puede inscribir",
      );
    }
*/
    if (esInscrito == true) {
      console.log(equipo.getNombreClave() + " se ha inscrito en la carrera.");
      this.#equiposInscritos.push(equipo);
    }
  }

  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getBarrio() {
    return this.#barrio;
  }
  setBarrio(barrio) {
    this.#barrio = barrio;
  }
  getFecha() {
    return this.#fecha;
  }
  setFecha(fecha) {
    this.#fecha = fecha;
  }

  comprobarFecha(fecha) {
    return true;
  }
}
