let contenedorBotones = document.getElementById("botonesGeneros");

for (i = 0; i <= 7; i ++) 
{
    console.log(baseDatosJSON.genero[i].nombre);
    let botonGenero = document.createElement("button");
    botonGenero.textContent = `${baseDatosJSON.genero[i].nombre}`;
    botonGenero.classList.add("botones");
    contenedorBotones.appendChild(botonGenero);

    let imagenGenero = document.createElement("img");
    botonGenero.innerHTML =  `<img src = "${baseDatosJSON.genero[i].url_img}"></img>`
    console.log(imagenGenero.src)
    imagenGenero.classList.add("imagenes");
}
