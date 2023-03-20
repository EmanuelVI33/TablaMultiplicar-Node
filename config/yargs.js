const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Toma la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla de multiplicar",
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Limite de la table de multiplicar",
    },
  })
  .check((argv, options) => {
    console.log(argv.b);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true; // No existe nigun error
  }).argv;

// Es lo unico que voy a exportar
module.exports = argv;
