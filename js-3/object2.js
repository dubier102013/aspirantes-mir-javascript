let persona={
    nombre:"dubier",
    edad: 20,
    cuidad: "medellin",
    profesión: "abogado"
}

for(let llave in persona){
    console.log(llave+": "+persona[llave] );
    
    }
console.log("");

       persona.presentacion= function(){
        espacio=" ";
            nom=this.nombre;
            eda=this.edad;
            cui=this.cuidad;
            profesion=this.profesión;
          
           mensaje=this.nombre+espacio+this.edad+espacio+this.cuidad+espacio+this.profesión;
            console.log(mensaje);
       return mensaje ;

        }
       mensajes= persona.presentacion();
       
       persona.hobbies= ["jugar futbol","pasear","leer"]
       console.log("");

       console.log("hobbies: "+persona.hobbies);