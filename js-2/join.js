function join(array){
    var cadena1="",cadena="  ";
   
    for(var i = 0; i < array.length; i++){
       
        cadena1=array[i];
        cadena=cadena+cadena1+" ";
       
      
       }
       return cadena;
    }
    

    console.log(join([1, 3, 2])) // 1
    console.log(join([10, 9, 8, 7, 6, 5, 4])) // 0
    console.log(join([])) // -1
