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

let inputEdad =document.getElementById("edad").value;

if(inputEdad>=18){
    
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
    }

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

else if(inputEdad < 18){
    let card2 = document.getElementById("div2");
    let mensajeMenores = document.createElement("div");
    mensajeMenores.style.backgroundColor="#E9C8EC";
    mensajeMenores.style.textAlign="center";
    mensajeMenores.style.margin="50px";

    mensajeMenores.innerHTML += `<h2>No sos mayor de edad, deberás pedir ayuda a un adulto para pedir un presupuesto</h2>
                    <img src="../images/minnietriste.gif" width="300px" height="200px" alt="imagenDestino"</img>`

    card2.append(mensajeMenores);
}

else{
    laCard.remove();
    mensajeMenores.remove();
}

// let formulario = document.getElementById("form")
let form = document.getElementById('form');
// let formulario = form.value;

function validateform(e){
    e.preventDefault();
    console.log("¡Tu formulario fue enviado con éxito!");
}

form.addEventListener("submit", validateform);


let botonGuardado = document.getElementById("botonGuardado");
botonGuardado.addEventListener("click", saveForm);


let respuestas = document.getElementsByClassName("respuestas");

function saveForm(){

    let toSave = [];
    
    for(let i = 0; i < respuestas; i++){
        let toSave1 = respuestas(i)
    
        let toSaveInfo = {
            task: toSave1.innerText,
        }
    
        toSave.push(toSaveInfo)
    }
    
    localStorage.setItem("formularioGuardado", JSON.stringify(toSave))
}

function loadForm(){

    let formularioGuardado = JSON.parse(localStorage.getItem("formularioGuardado"))
    
    for(let i = 0; i < respuestas.length; i++)
        console.log(respuestas[i].value);
    }

    loadForm()

    console.log(respuestas)