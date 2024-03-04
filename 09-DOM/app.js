// const input1 = document.querySelector('#n1');
const input1 = document.getElementById("n1");
const input2 = document.getElementById('n2');
const res = document.getElementById("respuesta");
const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener('click', calcular);
function calcular(){
    // Leer input
    const op1 = parseFloat(input1.value); 
    const op2 = parseFloat(input2.value); 
    let respuesta = op1 + op2;
    res.innerText = respuesta;
    res.style = "color:red"
}