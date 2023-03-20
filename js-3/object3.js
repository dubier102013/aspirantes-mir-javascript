let receta={}

receta.nombre="Sandwich";
receta.ingredientes=[];

var ingredientes =[
    {nombre: "Pan",
     cantidad: 2},

     {nombre: "Queso",
     cantidad: 1}
]
let contador=0,suma=0;
for(let llave in ingredientes){
   suma=suma+(ingredientes[contador].cantidad);
    contador=contador+1;
    
    }
    console.log(suma)
console.log("nombre: "+ingredientes[0].nombre)
console.log(suma)