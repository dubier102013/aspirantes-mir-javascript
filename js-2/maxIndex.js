function maxIndex(array){
    var mayor=array[0];
    var  indice=0;
   
    if(array.length===0){
        indice=-1
      } 

   for(var i = 0; i <= array.length-1; i++){
      
       if(mayor<array[i]){
         mayor=array[i];
         indice= i ;
       }
    }

   
  
    return indice;
   
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1