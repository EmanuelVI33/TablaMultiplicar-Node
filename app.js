const argv = require("./config/yargs");
const { crearArchivoTablaMult } = require("./helpers/multiplicar");

console.clear();

// Quiero obtener el 3er argemento
// Lo tomamos por posición, no es muy recomendable
// const [, , arg3 = "--base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

// console.log(process.argv);

crearArchivoTablaMult(argv.b, argv.l, argv.h)
  .then((msg) => console.log(msg, "creado"))
  .catch((err) => console.log(err));
