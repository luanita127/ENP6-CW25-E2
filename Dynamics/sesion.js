let btninit = document.getElementById("butinit");
let btncuenta = document.getElementById("inicioses")
let btncrear = document.getElementById("crearct")

let enviar = document.getElementById("submitis");
let crear = document.getElementById("iniciemos");

let inicioses = document.getElementById("inicio-de-sesion");
let crearcuenta = document.getElementById("Crear-una-cuenta");

let nomusereg = document.getElementById("nomusernew");
let contrasenareg = document.getElementById("password");
let banda = document.getElementById("fav1");
let cancion = document.getElementById("fav2");
let descripcion = document.getElementById("desc");

let nomuser = document.getElementById("nomuser");
let contrasena = document.getElementById("pass");


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

    event.preventDefault();

    if(nomuser.value == "" || nomuser.value == " "){
        let error = document.getElementById("err1");
        error.textContent = "Nombre de usuario no encontrado";
    }

    if(contrasena.value == "" || contrasena.value == " "){
        let error = document.getElementById("err2");
        error.textContent = "Contraseña incorrecta";
    }

    const galletas = document.cookie.split(";");
    let info
    console.log(galletas);
    for(let cookie of galletas) {
        const [key, valor] = cookie.split("=");
        if(key.trim() === nomuser.value.trim()){
            info = decodeURIComponent(valor);
        }
        else{
        }
    }

    if(info){

        console.log("chmba");
        info = JSON.parse(info);

        let passcokie = info.pass

        if (contrasena.value.trim() == passcokie.trim()){
            console.log("log in exitoso");
        }
        else{
            console.log("la contrasna es incorrecta");
        }
    }



})

crearcuenta.addEventListener("submit", function(event){

    event.preventDefault()
    let validacion = true;

    let datosreg = {
        nombred: nomusereg.value.trim(),
        pass: contrasenareg.value.trim(),
        artistad: banda.value.trim(),
        canciond: cancion.value.trim(),
        descripciond: descripcion.value.trim(),
    };

    let nombrereg = nomusereg.value.trim();

    if(nomusereg.value == "" || nomuser.value == " "){
        let error = document.getElementById("err1");
        error.textContent = "Este nombre de usuario no es valido";
        validacion = false;
    }

    if(contrasenareg.value == "" || contrasena.value == " "){
        let error = document.getElementById("err2");
        error.textContent = "Contraseña incorrecta";
        validacion = false;
    }

    if(validacion == true){
        crearCookie(nombrereg, datosreg);
    }

    inicioses.style.display = "flex";
    let ocultos = document.getElementsByClassName("hide1");
    for(let i = 0 ; i < ocultos.length ; i++){
        ocultos[i].style.display = "none"
    }

})



function crearCookie(nombrereg, datosreg){
    let date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    expiracion = date.toGMTString();
    datosreg = encodeURIComponent(JSON.stringify(datosreg));
    document.cookie = `${nombrereg}=${datosreg}; expires=${expiracion}`;
}

