let nombreIngresado = prompt("Ingresar nombre:");
let apellidoIngresado = prompt("Ingresar apellido");
let edad = parseInt(prompt("Ingrese su edad:"));

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("¡ Bienvenido " + nombreIngresado + " " + apellidoIngresado + " !");
}

else{
    alert("Error: Ingresar nombre y apellido")
}

let lugarDisney = "Disney"
let precioDisney = 12000
let lugarUniversal = "Universal"
let precioUniversal = 10000
let precioTotal = 0

function calculoPrecio (cantidad, precio){
    precioTotal += cantidad * precio
}


if(edad >= 18){
    alert("Sos mayor de edad, podés pedir presupuesto para tu viaje");
    
    let cantidadLugares = parseInt (prompt("Ingrese la cantidad de lugares que desea visitar: \n- Disney\n- Universal"))

    for(let i = 0; i < cantidadLugares ; i++){

        let presupuesto1 = prompt("Ingrese el nombre del lugar que quieres visitar: \n- Disney\n- Universal");
    
        if(presupuesto1 == "Disney"){
            alert("Genial!! Elegiste como destino: " + presupuesto1)
            let cantidad1 = parseInt (prompt("Ingrese la cantidad de parques que quieres visitar:"));
            calculoPrecio (cantidad1, precioDisney);
            alert("El precio es: $ " + (cantidad1 * precioDisney));
        }

        else if (presupuesto1 == "Universal"){
            alert("Genial!! Elegiste como destino: " + presupuesto1);
            let cantidad1 = parseInt (prompt("Ingrese la cantidad de parques que quieres visitar:"));
            calculoPrecio (cantidad1, precioUniversal);
            alert("El precio es: $ " + (cantidad1 * precioUniversal));
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

