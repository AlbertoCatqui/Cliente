let arrMeses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "dicembre",
];
function mesesRandomizer() {
  for (let i = 0; i < arrMeses.length; i++) {
    document.write(
      "<div style='top:" +
        (Math.floor(Math.random() * 200) + 1) +
        "px; left: " +
        (Math.floor(Math.random() * 600) + 1) +
        "px; background-color: rgb(" +
        Math.floor(Math.random() * 255) +
        " " +
        Math.floor(Math.random() * 255) +
        " " +
        Math.floor(Math.random() * 255) +
        ")'>" +
        arrMeses[i] +
        "</div>",
    );
  }
}
mesesRandomizer();

//setInterval(mesesRandomizer, 1000);
