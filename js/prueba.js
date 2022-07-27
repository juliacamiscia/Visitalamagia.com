let nombreIngresado = prompt("Ingrese su nombre:");
let apellidoIngresado = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("¡ Bienvenido/a " + nombreIngresado + " " + apellidoIngresado + " !");
}

else{
    alert("Error: Ingresar nombre y apellido")
}

function Destino (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const destinoDisney = new Destino ("Disney", 12000);
const destinoUniversal = new Destino ("Universal", 10000);

let listaDestinos = [destinoDisney, destinoUniversal];

let nombresDestinos = listaDestinos.map((destino) => destino.nombre)

let precioTotal = 0;
function calculoPrecio (cantidad, precio){
    precioTotal += cantidad * precio
}


if(edad >= 18){
    alert("Sos mayor de edad, podés pedir presupuesto para tu viaje");
    
    let cantidadLugares = parseInt (prompt("Ingrese la cantidad de lugares que desea visitar: \n-" + nombresDestinos.join("\n-")))

    for(let i = 0; i < cantidadLugares ; i++){

        let presupuesto1 = prompt("Ingrese el nombre del lugar que quieres visitar: \n-" + nombresDestinos.join("\n-"));
    
        if(presupuesto1 == "Disney"){
            alert("Genial!! Elegiste como destino: " + presupuesto1);
            let cantidad1 = parseInt (prompt("Ingrese la cantidad de parques que quieres visitar:"));
            calculoPrecio (cantidad1, destinoDisney.precio);
            alert("El precio es: $ " + (cantidad1 * destinoDisney.precio));
        }

        else if (presupuesto1 == "Universal"){
            alert("Genial!! Elegiste como destino: " + presupuesto1);
            let cantidad1 = parseInt (prompt("Ingrese la cantidad de parques que quieres visitar:"));
            calculoPrecio (cantidad1, destinoUniversal.precio);
            alert("El precio es: $ " + (cantidad1 * destinoUniversal.precio));
        }

        else{
            alert ("Ingrese un nombre válido");
        } 
    }
    alert("Este es el precio total de tu presupuesto: $" + precioTotal + ". Por otras consultas contactate con nosotros!")  
}

else{
    alert("No sos mayor de edad, deberás pedir ayuda a un adulto para pedir un presupuesto")
}
