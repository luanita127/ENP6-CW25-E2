let btninit = document.getElementById("butinit");
let btncuenta = document.getElementById("inicioses")
let btncrear = document.getElementById("crearct")

let enviar = document.getElementById("submitis");
let crear = document.getElementById("iniciemos");

let inicioses = document.getElementById("inicio-de-sesion");
let crearcuenta = document.getElementById("Crear-una-cuenta");

btninit.addEventListener("click", function(event){
    let conten = document.getElementById("center");
    let ocultos = document.getElementsByClassName("hide1");
    for(let i = 0 ; i < ocultos.length ; i++){
        ocultos[i].style.display = "flex"
    }
    btninit.style.display = "none";
    center.style.display = "none";
    
})

btncuenta.addEventListener("click", function(event){
    inicioses.style.display = "flex";
    let ocultos = document.getElementsByClassName("hide1");
    for(let i = 0 ; i < ocultos.length ; i++){
        ocultos[i].style.display = "none"
    }
})

btncrear.addEventListener("click", function(event){
    crearcuenta.style.display = "flex";
    let ocultos = document.getElementsByClassName("hide1");
    for(let i = 0 ; i < ocultos.length ; i++){
        ocultos[i].style.display = "none"
    }
})

inicioses.addEventListener("submit", function(event){

    let nomuser = document.getElementById("nomuser");
    let contrasena = document.getElementById("pass");

    if(nomuser.value == "" || nomuser.value == " "){
        let error = document.getElementById("err1");
        error.textContent = "Nombre de usuario no encontrado";
    }

    if(contrasena.value == "" || contrasena.value == " "){
        let error = document.getElementById("err2");
        error.textContent = "Contraseña incorrecta";
    }
})

crearcuenta.addEventListener("submit", function(event){

    event.preventDefault()

    let nomuser = document.getElementById("nomusernew");
    let contrasena = document.getElementById("password");
    let banda = document.getElementById("fav1");
    let cancion = document.getElementById("fav2");
    let descripcion = document.getElementById("desc");

    if(nomuser.value == "" || nomuser.value == " "){
        let error = document.getElementById("err1");
        error.textContent = "Este nombre de usuario no es valido";
    }

    if(contrasena.value == "" || contrasena.value == " "){
        let error = document.getElementById("err2");
        error.textContent = "Contraseña incorrecta";
    }


})