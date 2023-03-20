let pedro = {
    nombre : "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies : ["programar","squash","piano"]
    
    }
    
    console.log("edad: "+pedro.edad);
    
    pedro.estatura = 1.8;
    delete pedro.activo;
    console.log(" ");
    
    for(let llave in pedro){
    console.log(llave+": "+pedro[llave] );
    
    }
    console.log(" ");
    
    pedro.saluda= function(){
        console.log("Hola, me llamo "+this.nombre)
        }
    pedro.saluda();
    
    