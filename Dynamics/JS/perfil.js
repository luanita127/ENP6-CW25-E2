let editarBtn = document.getElementById('editar');
let sesionBtn = document.getElementById('sesión');
let regresarBtn = document.getElementById('regresar');
let contPrinc = document.getElementsByClassName('contenidoPrincipal');
let contEdit = document.getElementsByClassName('contenidoEditar');

editarBtn.addEventListener("click", function()
{
    for (let i = 0; i < contPrinc.length; i++) 
        contPrinc[i].style.display = "none";
    for (let i = 0; i < contEdit.length; i++) 
        contEdit[i].style.display = "flex";
});

regresarBtn.addEventListener("click", function()
{
    for (let i = 0; i < contPrinc.length; i++) 
        contPrinc[i].style.display = "block";
    for (let i = 0; i < contPrinc.length; i++) 
        contEdit[i].style.display = "none";
}
)

