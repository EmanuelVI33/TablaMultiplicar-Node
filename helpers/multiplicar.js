// Import es ESM no todos lo soportan
const fs = require("fs");
const colors = require("colors");

const crearArchivoTablaMult = async (base = 5, listar, hasta) => {
  try {
    if (listar) {
      console.log("======================".red);
      console.log("    Table del:".yellow, `${base}`.yellow);
      console.log("======================".green);
    }

    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${colors.red(base)} x ${colors.yellow(i)} = ${colors.green(
        base * i
      )}\n`;
    }

    if (listar) console.log(consola);

    // Si existe un error debemos capturarlo con un try catch
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }

  // fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
  //   if (error) throw error;
  //   console.log("Se guardo tabla-5.txt corectamente");
  // });
};

module.exports = {
  crearArchivoTablaMult,
};
