var resultado = 'Capuchino';

function cafetera(ingrediente1, ingrediente2){
    if(ingrediente1 == 'leche' && ingrediente2 == 'cafe'){
       return resultado;
    }
}

let taza = cafetera("leche", "cafe");
console.log(taza);