let lista = document.getElementById("lista");
let canciones = [];
let numeroCan = 20;
for (let i=1; i<=numeroCan; i++){
    canciones.push({nombre:"Nombre de la cancion"});
}
function listaRepro(){
    for (let i=0; i<canciones.length; i++) {
        let linea=document.createElement("div");
        linea.className="linea";
        linea.innerHTML=`<p>${i+1}.</p><p>${canciones[i].nombre}</p><div class='portada'></div><button>Borrar</button>`;
    lista.appendChild(linea);
    }
}
listaRepro();