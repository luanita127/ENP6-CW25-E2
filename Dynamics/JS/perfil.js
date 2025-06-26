//VISTA PRINCIPAL: PERFIL DE USUARIO

//Obtiene elementos del HTML (botones) que despliegan las funciones de editar, regresar y cerrar sesión
let editarBtn = document.getElementById('editar');
let sesionBtn = document.getElementById('sesión');
let regresarBtn = document.getElementById('regresar');

//Obtiene elementos del HTML (clases) para crear las funciones de desplegar y ocultar elementos según el botón clickeado
let contPrinc = document.getElementsByClassName('contenidoPrincipal');
let contEdit = document.getElementsByClassName('contenidoEditar');

//Al clickear en "Editar perfil" oculta el contenido que se muestra inicialmente y despliega el de la edición de datos
editarBtn.addEventListener("click", function()
{
    //Ciclo for para que se realice el 'display: none' en todos los elementos de la misma clase
    for (let i = 0; i < contPrinc.length; i++) 
        contPrinc[i].style.display = "none";
    for (let i = 0; i < contEdit.length; i++) 
        contEdit[i].style.display = "flex";
});

//Al clickear en "Regresar" regresa al contenido del perfil de usuario y oculta la edición de datos
regresarBtn.addEventListener("click", function()
{
    for (let i = 0; i < contPrinc.length; i++) 
        contPrinc[i].style.display = "block";
    for (let i = 0; i < contPrinc.length; i++) 
        contEdit[i].style.display = "none";
});


//VISTA SECUNDARIA: EDICIÓN DE PERFIL.
//creación de datos y cookies provisionales para probar el funcionamiento del programa


//duración provisional de las cookies
let duracion = 60 * 60 * 24;

/*document.cookie = `actual = ${datos.nombre}`;
document.cookie = `artista= ${datos.artista}; max-age=${duracion}`;
document.cookie = `cancion= ${datos.cancion}; max-age=${duracion}`;
document.cookie = `descript= ${datos.descript}; max-age=${duracion}`;*/


const galletas = document.cookie.split(";");
let nombreAnterior
for (let cookie of galletas) {
    const [key, valor] = cookie.split('=');
    if(key.startsWith("actual"))
        nombreAnterior = cookie.slice(6)
}

let datosCookies
for (let cookie of galletas) {
    const [key, valor] = cookie.split('=');
    if(key === nombreAnterior)
    {
        datosCookies = decodeURIComponent(valor);
    }    
}

console.log(datosCookies);

datosCookies = JSON.parse(datosCookies);
let nombreAnt = datosCookies.nombred;
let contraseña = datosCookies.pass
let artistaAnt = datosCookies.artistad;
let cancionAnt = datosCookies.canciond;
let descripciond = datosCookies.descripciond;
let bioma = datosCookies.bio
let animal = datosCookies.ani;

//imprime los datos del usuario en la pestaña de perfil.
let nombreTexto = document.getElementById('nombreTexto');
nombreTexto.textContent = `${nombreAnt}`;

let artistaTexto = document.getElementById('artistaTexto');
artistaTexto.textContent = `Artista favorito: ${datos.artista}`;

let cancionTexto = document.getElementById('cancionTexto');
cancionTexto.textContent = `Canción favorita: ${datos.cancion}`;

let descTexto = document.getElementById('descTexto');
descTexto.textContent = `${datos.descript}`;


//Obtiene los datos introducidos por el usuario en el formulario HTML de edición de perfil
let formulario = document.getElementById('editarPerfil');
let nombreUsuario = document.getElementById('nombreUsuario');
let artista = document.getElementById('artista');
let cancion = document.getElementById('canción');
let descripcion = document.getElementById('descripción');

//Al confirmar la edición de datos, estos se actualizan en la pantalla de perfil
formulario.addEventListener("submit", function(event)
{
    event.preventDefault();

    const datos = {
        nombred: `${nombreUsuario.value}`,
        artistad: `${artista.value}`,
        canciond: `${cancion.value}`,
        descripciond: `${descripcion.value}`
    };

    document.cookie = `${nombreAnterior}; max-age=0`;
    let valor = encodeURIComponent(JSON.stringify(datos));

    document.cookie = `${nombreUsuario.value}=${valor}; max-age=${duracion}`;
    document.cookie = `actual=${nombreUsuario.value}; max-age=${duracion}`;

    //Actualiza el valor de las cookies.
    /*document.cookie = `artista= ${artista.value}; max-age=${duracion}`;
    document.cookie = `cancion= ${cancion.value}; max-age=${duracion}`;
    document.cookie = `descript= ${descripcion.value}; max-age=${duracion}`;

    //imprime los datos del usuario en la pestaña de perfil.
    nombreTexto.textContent = `${nombreUsuario.value}`;
    artistaTexto.textContent = `Artista favorito: ${artista.value}`;
    cancionTexto.textContent = `Canción favorita: ${cancion.value}`;
    descTexto.textContent = `${descripcion.value}`;*/
    console.log("Los datos actuales son" + document.cookie);

    window.location.reload();
});

console.log("Los datos actuales son" + document.cookie);


