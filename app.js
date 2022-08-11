alert("Bienvenidos!!! Elija los costos.")

let articuloA = Number(prompt("Ingresa el costo del producto \n1. REMERA =2000 \n2. BUZO =2500 "))
let articuloB = Number(prompt("Ingresa el costo del producto \n1. PANTALON = 4500 \n2. CAMPERA = 3500 "))
let agregar = prompt("Colocar + O - para agregar al carrito")


function carrito(art1,art2,operador){

    switch(operador){
    
    case"+":
    
    return alert(art1+art2);
    
    case"-":
    
    return alert(art1-art2);
    
    default:
    
    alert("Agrega un producto")
    
    break;
    
    }
    
    }


do {
    agregar =prompt("Ingresa + O - para continuar")
   
}while ((agregar !="+" ) && ( agregar !="-"));
 
carrito(articuloA,articuloB,agregar);

const calcularPrecio = (precioArticuloUno,PrecioArticuloDos)=> precioArticuloUno+PrecioArticuloDos
const tarjeta = compraFinal => compraFinal * 1.21


let compraEfectivo = calcularPrecio(articuloA,articuloB)
let compraTarjeta =tarjeta(compraEfectivo)
let medioDePago =prompt("Elije medio de pago : \n1. EFECTIVO \n2. TARJETA ")



if (medioDePago !=" ") {
      if ( (medioDePago == "EFECTIVO") ||(medioDePago == "efectivo") ) {
         alert("Precio con descuento en efectivo ="+compraEfectivo +  "\n Finalizaste tu compra.")
      }
     
     
        else if ((medioDePago == "TARJETA")||(medioDePago == "tarjeta") ){
        alert("Precio en tarjeta con IVA = "+compraTarjeta + "\n Finalizaste tu compra.")
    } 
    
    else {
        alert("No agregaste MEDIO DE PAGO . Te guardamos tu carrito para mas tarde.")
    }
    
}

    
  



 



 
