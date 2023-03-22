
const input = document.querySelector('#texto')
const resultado = document.querySelector('#resultado')
const boton=document.querySelector('#btn')

input.addEventListener("click",imprimir)
boton.addEventListener("click",imprimir)


  
    
  function imprimir(){
    
    var resultado = document.querySelector('#resultado')
    resultado.innerText = input.value

    var resultadoMayusculas=document.querySelector('#resultadoMayusculas')
    resultadoMayusculas.innerText=input.value.toUpperCase();
  }