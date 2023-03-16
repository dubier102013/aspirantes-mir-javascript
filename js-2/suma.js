function sum(array){
    var suma=0;
   
    for(var i = 0; i < array.length; i++){
       
        suma =suma+ array[i];
        
    }
    return suma;
}
   
    console.log(sum([1, 2, 3])); // 6
    console.log(sum([10, 8, 12, 5])) // 35
   console.log(sum([])) // 0

