const LIBRO1 = {
  nombre: "Libro1",
  color: "Azul",
  autor: "Autor1",
  nPaginas: 160,
  editorial: "Editorial1",
  forrado: true,
  urlCover: "url1",
  comprar: function () {
    console.log(`Libro de aventuras del autor ${this.autor} comprado.`);
  },
  toString: function () {
    return `${this.nombre}-${this.autor}(${this.nPaginas})**${this.forrado}`;
  },
  getNPag: function () {
    return this.nPaginas;
  },
};
const LIBRO2 = {
  nombre: "Libro1",
  color: "Rojo",
  autor: "Autor2",
  nPaginas: 200,
  editorial: "Editorial2",
  forrado: false,
  urlCover: "url2",
  comprar: function () {
    console.log(`Libro de aventuras del autor ${this.autor} comprado.`);
  },
  toString: function () {
    return `${this.nombre}-${this.autor}(${this.nPaginas})**${this.forrado}`;
  },
  getNPag: function () {
    return this.nPaginas;
  },
};
const LIBRO3 = {
  nombre: "Libro3",
  color: "Verde",
  autor: "Autor3",
  nPaginas: 50,
  editorial: "Editorial3",
  forrado: true,
  urlCover: "url3",
  comprar: function () {
    console.log(`Libro de aventuras del autor ${this.autor} comprado.`);
  },
  toString: function () {
    return `${this.nombre}-${this.autor}(${this.nPaginas})**${this.forrado}`;
  },
  getNPag: function () {
    return this.nPaginas;
  },
};
const LIBRO4 = {
  nombre: "Libro4",
  color: "Amarillo",
  autor: "Autor4",
  nPaginas: 350,
  editorial: "Editorial4",
  forrado: false,
  urlCover: "url4",
  comprar: function () {
    console.log(`Libro de aventuras del autor ${this.autor} comprado.`);
  },
  toString: function () {
    return `${this.nombre}-${this.autor}(${this.nPaginas})**${this.forrado}`;
  },
  getNPag: function () {
    return this.nPaginas;
  },
};

let bibloteca = [LIBRO1, LIBRO2, LIBRO3];
console.log(bibloteca.toString());

//Sacar editoriales
for (const libro of bibloteca) {
  console.log(libro.editorial);
}
//Comprar todos los libros
bibloteca.forEach((libro) => {
  libro.comprar();
});
//funcion flecha que devuelve true si el num de paginas es mas de 150
let checkPages = (libro) => libro.getNPag() > 150;
console.log(checkPages(LIBRO1));

//funcion flecha que pasandole biblioteca y libro devuelve true si lo contiene
let checkLibro = (biblio, libro) => biblio.includes(libro);
console.log(checkLibro(bibloteca, LIBRO4));
