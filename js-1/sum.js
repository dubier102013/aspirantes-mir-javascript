
function suma(dato){
    var conta=0;
    for (let i = 1; i <= dato; i ++)
    conta=conta+i;
    return conta;
}
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120