// let nombreIngresado = prompt("Ingrese su nombre:");
// let apellidoIngresado = prompt("Ingrese su apellido:");
// let edad = parseInt(prompt("Ingrese su edad:"));

// if((nombreIngresado !="") && (apellidoIngresado !="")){
//     alert("¡ Bienvenido/a " + nombreIngresado + " " + apellidoIngresado + " !");
// }

// else{
//     alert("Error: Ingresar nombre y apellido")
// }

function Destino (nombre, precio, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
}

const destinoDisney = new Destino ("Disney", 12000, "../images/CinderellaCastle.jpg");
const destinoUniversal = new Destino ("Universal", 10000, "../images/universal.jpg");

let listaDestinos = [destinoDisney, destinoUniversal];

let nombresDestinos = listaDestinos.map((destino) => destino.nombre)

let precioTotal = 0;
function calculoPrecio (cantidad, precio){
    precioTotal += cantidad * precio
}

let edad = parseInt(prompt("Ingrese su edad:"));

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

let card = document.getElementById("div1");
for(const destino of listaDestinos){
    let laCard = document.createElement("div");
    laCard.style.backgroundColor="#E9C8EC";
    laCard.style.textAlign="center";
    laCard.style.margin="50px";

    laCard.innerHTML += `<h3>${destino.nombre}</h3>
                    <p> $${destino.precio} por día</p>
                    <img src=${destino.imagen} width="450px" height="280px" alt="imagenDestino"</img>`

    card.append(laCard);

    if(edad < 18){
        laCard.remove();
    }
} 

let formulario = document.getElementById("form")

function validateform(e){
    e.preventDefault()
    console.log("¡Tu formulario fue enviado con éxito!")
}  

form.addEventListener("submit", validateform);