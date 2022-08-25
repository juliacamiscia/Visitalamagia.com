setTimeout(()=>{
    Swal.fire({
        title: '<strong>¡ Bienvenido !</strong>',
        imageUrl: '../images/bienvenidos.gif',
        imageWidth: 180,
        imageHeight: 250,
        imageAlt: 'bienvenidos',
        html:
            'Aquí podrás completar un <b>formulario </b>para que luego nos contactemos con vos.',
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
    })
}, 4000)


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

let botonLimpiar = document.getElementById("botonLimpiar");
botonLimpiar.addEventListener ("click", mensajeLimpiar)

function borrarForm(){
    listaDatos.clear
}

function mensajeLimpiar(){
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn',
            cancelButton: 'btn'
        },
        buttonsStyling: true,
    })
    swalWithBootstrapButtons.fire({
        title: '¿Estás seguro que quieres borrar todo?',
        text: "Una vez eliminado no podrás recuperar el contenido",
        imageUrl: '../images/minnieDuda3.gif',
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: 'MinnieDuda',
        showCancelButton: true,
        confirmButtonText: 'Sí, deseo borrarlo',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#bc65c4',
        cancelButtonColor: 'rgb(84, 76, 141)',
        reverseButtons: false,
    }).then((result) => {
        if (result.isConfirmed) {            
            borrarForm(),
            localStorage.clear(),

            swalWithBootstrapButtons.fire(
                '¡ Listo !',
                'El contenido ha sido eliminado',
        )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            '¡ Genial !',
            'Tu información se mantiene a salvo :)',
        )    
        }
    })
}

function validateform(e){
    e.preventDefault();
    console.log("¡Tu formulario fue enviado con éxito!");

    let botonGuardado = document.getElementById("botonGuardado");
    botonGuardado.addEventListener("click", registroForm);
    
    function registroForm(){
        listaDatos.push();
        localStorage.setItem("usuario1", JSON.stringify(listaDatos));
    
        function getListaDatos(){
            let listaDatos = localStorage.getItem("usuario1");
    
            if(listaDatos !== null){
                usuario1 = JSON.parse(localStorage.getItem("usuario1"));
            }
        }
        getListaDatos();
    
        Toastify({
            text: "Tu información se ha guardado correctamente",
            duration: 6000,
            newWindow: false,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: false,
            style: {
                color: "black",
                background: "linear-gradient(to right, rgb(84, 76, 141), rgb(214, 182, 188), rgb(248, 243, 253))",
            },
            onClick: function(){}
        }).showToast();
    }
    registroForm(); 

    fetch("data.json")
    .then((response) => response.json())  
    .catch((error) => console.log(error))
    .then((data) => {

    let botonSubmit = document.getElementById("botonSubmit");
    botonSubmit.addEventListener ("click", mensajeEnviado)

    function mensajeEnviado(){
        Toastify({
            text: "¡Tu formulario fue enviado con éxito!",
            duration: 6000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            style: {
                color: "black",
                background: "linear-gradient(to right, rgb(84, 76, 141), rgb(214, 182, 188), rgb(248, 243, 253))",
            },
            onClick: function(){}
        }).showToast();
    }
    if(inputEdad.value >= 18){
        
        let card = document.getElementById("div1");
        for(const destino of data){
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
    })
}

form.addEventListener("submit", validateform);