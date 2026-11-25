export class Equipo {
  #piloto;
  #copiloto;
  #lema;
  #nombreClave;
  #matricula;
  #nivelBusqueda;
  #premioNeto;
  #valido;
  constructor(piloto, copiloto, lema) {
    if (piloto.getNombre() != copiloto.getNombre() && lema.length > 0) {
      this.#piloto = piloto;
      this.#copiloto = copiloto;
      this.#lema = lema;
      this.#nivelBusqueda = 0;
      this.#premioNeto = 0;
      this.#valido = true;
      //NOMBRE CLAVE
      if (piloto.getNombre().slice(0, 1) < copiloto.getNombre().slice(0, 1)) {
        let nombreClave;
        nombreClave = piloto.getNombre().slice(0, 1);
        let apellidosPiloto = piloto.getApellido().split(" ");
        for (let i = 0; i < apellidosPiloto.length; i++) {
          nombreClave = nombreClave + apellidosPiloto[i].slice(0, 1);
        }
        nombreClave = nombreClave + "&" + copiloto.getNombre().slice(0, 1);
        let apellidosCopiloto = copiloto.getApellido().split(" ");
        for (let i = 0; i < apellidosCopiloto.length; i++) {
          nombreClave = nombreClave + apellidosCopiloto[i].slice(0, 1);
        }
        this.#nombreClave = nombreClave;
      } else {
        let nombreClave;
        nombreClave = copiloto.getNombre().slice(0, 1);
        let apellidosCopiloto = copiloto.getApellido().split(" ");
        for (let i = 0; i < apellidosCopiloto.length; i++) {
          nombreClave = nombreClave + apellidosCopiloto[i].slice(0, 1);
        }

        nombreClave = nombreClave + "&" + piloto.getNombre().slice(0, 1);
        let apellidosPiloto = piloto.getApellido().split(" ");
        for (let i = 0; i < apellidosPiloto.length; i++) {
          nombreClave = nombreClave + apellidosPiloto[i].slice(0, 1);
        }
        this.#nombreClave = nombreClave.toUpperCase();
      }

      //MATRICULA
      let matricula = "";
      let lemaSeparado = this.#lema.split(" ");
      for (let j = 0; j < lemaSeparado.length; j++) {
        if (lemaSeparado[j].length % 2 == 0) {
          matricula = matricula + lemaSeparado[j].slice(0, 1).toUpperCase();
        }
      }
      matricula = matricula + "-" + lemaSeparado.length;
      this.#matricula = matricula;
    } else {
      this.#valido = false;
      console.log("Datos no válidos para hacer un equipo");
    }
  }
  aniadirInfraccion(infraccion) {
    let infracciones = new Map([
      ["exceso de velodidad", 1],
      ["saltase un semáforo", 1],
      ["conducción temeraria", 2],
      ["huir de la policía", 3],
    ]);
    if (this.#nivelBusqueda < 5) {
      this.#nivelBusqueda = this.#nivelBusqueda + infracciones.get(infraccion);

      if (this.#nivelBusqueda > 5) {
        this.#nivelBusqueda = 5;
      }
    }
    console.log(
      "El nivel de búsqueda de " +
        this.#nombreClave +
        " es de " +
        this.#nivelBusqueda +
        " estrellas",
    );
  }
  aniadirPremio(premio) {
    if (premio > 5000) {
      this.#premioNeto = this.#premioNeto + premio * 0.8;
    } else {
      this.#premioNeto = this.#premioNeto + premio;
    }
    console.log(
      "El nivel premio neto de " +
        this.#nombreClave +
        " es de " +
        this.#premioNeto +
        " euros",
    );
  }

  getPiloto() {
    return this.#piloto;
  }
  setPiloto(piloto) {
    this.#piloto = piloto;
  }
  getCopiloto() {
    return this.#copiloto;
  }
  setCopiloto(copiloto) {
    this.#copiloto = copiloto;
  }
  getValido() {
    return this.#valido;
  }
  setValido(valido) {
    this.#valido = valido;
  }
  getNombreClave() {
    return this.#nombreClave;
  }
  setNombreClave(nombreClave) {
    this.#nombreClave = nombreClave;
  }
  getMatricula() {
    return this.#matricula;
  }
  setMatricula(matricula) {
    this.#matricula = matricula;
  }
  getNivelBusqueda() {
    return this.#nivelBusqueda;
  }
  setNivelBusqueda(nivelBusqueda) {
    this.#nivelBusqueda = nivelBusqueda;
  }
}
