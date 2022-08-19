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

let inputEdad =document.getElementById("edad");
let form = document.getElementById('form');

let formNombre = document.getElementById("formNombre");
let formSexoMasc = document.getElementById("formSexoMasc");
let formSexoFem = document.getElementById("formSexoFem");
let formSexoOtro = document.getElementById("formSexoOtro");
let formTel = document.getElementById("formTel");
let formEmail = document.getElementById("formEmail");


let listaDatos = [formNombre, inputEdad.value, formSexoMasc.value, formSexoFem.value, formSexoOtro.value, formTel, formEmail];


function validateform(e){
    e.preventDefault();
    console.log("¡Tu formulario fue enviado con éxito!");

    Toastify({
        text: "¡Tu formulario fue enviado con éxito!",
        duration: 6000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            color: "black",
            background: "linear-gradient(to right, rgb(84, 76, 141), rgb(214, 182, 188), rgb(248, 243, 253))",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    
    // for(let i= 0; i < 1; i++){
    // if(i==1) {
    //     break;
    // }

    function comprobarBreak(x) {
        var i = 0;
        while (i < 1) {
            if (i == 1)
                break;
            i++;
        }
        return i * x;
    }

    if(inputEdad.value >= 18){
        
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


    else if(inputEdad.value < 18){
        let card2 = document.getElementById("div2");
        let mensajeMenores = document.createElement("div");
        mensajeMenores.style.backgroundColor="#E9C8EC";
        mensajeMenores.style.textAlign="center";
        mensajeMenores.style.margin="50px";

        mensajeMenores.innerHTML += `<h2>No sos mayor de edad, deberás pedir ayuda a un adulto para pedir un presupuesto</h2>
                        <img src="../images/minnietriste.gif" width="300px" height="200px" alt="imagenDestino"</img>`

        card2.append(mensajeMenores);
    }
    comprobarBreak();
}

form.addEventListener("submit", validateform);




let botonGuardado = document.getElementById("botonGuardado");
botonGuardado.addEventListener("click", registroForm);

function registroForm(nuevoUsuario){
    listaDatos.push(nuevoUsuario);
    localStorage.setItem("usuario1", JSON.stringify(listaDatos));


    function getListaDatos(){
        let listaDatos = localStorage.getItem("usuario1");

        if(listaDatos !== null){
            usuario1 = JSON.parse(localStorage.getItem("usuario1"));
        }
    }
    getListaDatos();
}
registroForm(nuevoUsuario);


/*INTENTO*/
// function registroForm(){
    
// localStorage.setItem("array1", JSON.stringify(listaDatos));

// let arrayRecojido = JSON.parse(localStorage.getItem("array1"));
// console.log(arrayRecojido);  
// }

/*OTRO INTENTO*/
    // function registroForm(){
    
    //     let toSave = [];
    
    //     for(let i = 0; i < listaDatos; i++){
    //     let toSave1 = listaDatos(i)
    
    //     let toSaveInfo = {
    //     task: toSave1.innerText,        
    //         }
    
    //     toSave.push(toSaveInfo)
    // }
    
    // localStorage.setItem("formularioGuardado", JSON.stringify(toSave))
    // }

    // function loadForm(){

    //     let formularioGuardado = JSON.parse(localStorage.getItem("formularioGuardado"))
    
    //     for(let i = 0; i < listaDatos; i++)
    // }

    // loadForm()

    // console.log(listaDatos)