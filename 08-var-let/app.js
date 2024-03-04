let resultado = "Capuchino";

function cafetera(ingrediente1) {
  if (ingrediente1 == "leche") {
    // let vive dentro de bloques y no te deja declararlo varias veces
    // let resultado = 'otra cosa'
    let resultado = 'otra cosa2'
    return resultado;
  }
}

let taza = cafetera("leche");
console.log(taza);