alert("Bienvenidos , elija los costos")

let articuloA = Number(prompt("Ingresa el costo del producto \n1. REMERA =2000 \n2. BUZO =2500 "))
let articuloB = Number(prompt("Ingresa el costo del producto \n1. PANTALON = 4500 \n2. CAMPERA = 3500 "))
let agregar = prompt("Colocar +  para agregar al carrito")

do {
   agregar =prompt("Ingresa + para continuar")
   
} while ( agregar != "+");


const calcularPrecio = (precioArticuloUno,precioArticuloDos) => precioArticuloUno+precioArticuloDos

const tarjeta = compraFinal => compraFinal * 1.21

let medioDePago =prompt("Elije medio de pago : \n1. EFECTIVO \n2. TARJETA ")
let compra = calcularPrecio(articuloA,articuloB)
let compraTarjeta =tarjeta(compra)

if (medioDePago !=" ") {
      if ( (medioDePago == "EFECTIVO") ||(medioDePago == "efectivo") ) {
         alert("Precio con descuento en efectivo ="+compra +  "\n Finalizaste tu compra.")
      }
        else if ((medioDePago == "TARJETA")||(medioDePago == "tarjeta") ){
        alert("Precio en tarjeta con IVA = "+compraTarjeta + "\n Finalizaste tu compra.")
    } 
    
    else {
        alert("No agregaste MEDIO DE PAGO . Te guardamos tu carrito para mas tarde.")
    }
    
}
   

    
  



 



 
