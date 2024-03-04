const respuesta = document.getElementById('resp');
const btnejecutar = document.getElementById('ejecuta');
// almacenar arreglo
let frutas = ['manzana','platano','Pera','Melon','mango','fresa'];

btnejecutar.addEventListener('click',vistasArray);
function vistasArray(){
    // conteo con length;
    // respuesta.innerText = frutas.length;
    // Contar index
    // respuesta.innerText = frutas[0];
    // ultimo elemento
    // respuesta.innerText = frutas[frutas.length-1];
    // recorrer un array
   frutas.forEach(function(item,index,array){
        respuesta.innerText = array;
   })

}