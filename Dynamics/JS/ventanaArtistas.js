let contenedorBotones = document.getElementById("botonesArtistas");

for (i = 0; i <= 9; i ++) 
{
    console.log(baseDatosJSON.artistas[i].nombre);
    let botonArtista = document.createElement("button");
    botonArtista.textContent = `${baseDatosJSON.artistas[i].nombre}`;
    botonArtista.classList.add("botones");
    contenedorBotones.appendChild(botonArtista);

    let imagenArtista = document.createElement("img");
    botonArtista.innerHTML =  `<img src = "${baseDatosJSON.artistas[i].url_img}"></img>`
    console.log(imagenArtista.src)
    imagenArtista.classList.add("imagenes");
}
    