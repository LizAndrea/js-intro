function licencia(){
//var user = prompt("Ingresa tu nombre de usuario: ").toLowerCase();
//var pass = prompt("Ingresa tu password: ").toLowerCase();

let userI = document.getElementById("user").value;
let ageI = document.getElementById("age").value >= 18 ? true : false;
let testI = document.getElementById("test").value;

const userRegister = "henry";
const passRegister = 123456;

if(ageI && testI){
    console.log("El usuario es mayor de 18 y aprobo el examen de la vista !!!");
    document.write("Felicidades "+userI+" obtuviste tu licencia");
    
}else{
    console.log("El usuario no obtuvo su licencia");
    document.write("El usuario no obtuvo su licencia");
}
};

// Crear un programa para evaluar si tenemos covid
// 1.- Solicitar al usuario si tiene los siguientes sintomas
// a.- dolor de cabeza
// b.- Dificultad para respirar
// c.- temperatura mayor a 37grados
// d.- Dolor de cuerpo
// e.- Si tengo vacunas aplicadas
// 2 a- Debo evaluar si  tengo 3 de los sintomas
// (dolor de cabeza, disficultad al respirar, temperatura)
// y no tengo vacunas tengo un 70% de tener covid
// 2,b Si presento 3 sintomas y tengo mis vacunas tendre un 40% de tener covid
//2.c - si presento todos los sintomas pues tengo 100% aunque tenga las vacunas

function covid(){
    
    let cabeza = document.getElementById("head").value;
    let respiracion = document.getElementById("breathe").value;
    let temperatura = document.getElementById("temperature").value >= 37 ? true : false;
    let cuerpo = document.getElementById("body").value;
    let vacunas = document.getElementById("vaccine").value;
    
    if(cabeza == "si" && respiracion == "si" && temperatura && vacunas == "no"){
        console.log("Usted tiene un 70% de tener covid!!!");
        document.write("Usted tiene un 70% de tener covid!!!");
        
    }else if(cabeza == "si" && respiracion == "si" && temperatura && vacunas == "si"){
        console.log("Usted tiene un 40% de tener covid!!!");
        document.write("Usted tiene un 40% de tener covid!!!");
        }
    }