let result=document.getElementById("result");

let form = document.getElementById("bioform");

let aniform = document.getElementById("animalform");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let val1 = document.getElementById("pre1");
    let val2 = document.getElementById("pre2");
    let val3 = document.getElementById("pre3");
    let val4 = document.getElementById("pre4");
    let val5 = document.getElementById("pre5");
    let val6 = document.getElementById("pre6");
    let val7 = document.getElementById("pre7");
    let val8 = document.getElementById("pre8");
    let val9 = document.getElementById("pre9");

    // Validaciones 

    let validacion = true;

    let valorespos =["1", "2", "3", "4"];

    if(valorespos.indexOf(val1.value) == -1){ 
        let error = document.getElementById("err1");
        error.textContent = "El valor \"" + val1.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val2.value) == -1){ 
        let error = document.getElementById("err2");
        error.textContent = "El valor \"" + val2.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val3.value) == -1){ 
        let error = document.getElementById("err3");
        error.textContent = "El valor \"" + val3.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val4.value) == -1){ 
        let error = document.getElementById("err4");
        error.textContent = "El valor \"" + val4.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val5.value) == -1){ 
        let error = document.getElementById("err5");
        error.textContent = "El valor \"" + val5.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val6.value) == -1){ 
        let error = document.getElementById("err6");
        error.textContent = "El valor \"" + val6.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val7.value) == -1){ 
        let error = document.getElementById("err7");
        error.textContent = "El valor \"" + val7.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val8.value) == -1){ 
        let error = document.getElementById("err8");
        error.textContent = "El valor \"" + val8.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(valorespos.indexOf(val9.value) == -1){ 
        let error = document.getElementById("err9");
        error.textContent = "El valor \"" + val9.value + "\" no se reconoce como uno valido" ;
        validacion = false;
    }

    if(validacion == true){

        let total = Number(val1.value) + Number(val2.value) + Number(val3.value) + Number(val4.value) + Number(val5.value) + Number(val6.value) + Number(val7.value) + Number(val8.value) + Number(val9.value);
    
        console.log(total)

        if(total >= 9 && total < 16){
            let pregunta = document.getElementsByClassName("ply");
            for(let i = 0 ; i < pregunta.length ; i++){
                pregunta[i].style.display = 'flex';
            }

        }
        else{
            if(total >= 16 && total < 23 ){
                let pregunta = document.getElementsByClassName("bsq");
                for(let i = 0 ; i < pregunta.length ; i++){
                pregunta[i].style.display = 'flex';
                }
            }
            else{
                if(total >= 23 && total < 29){
                    let pregunta = document.getElementsByClassName("slv");
                    for(let i = 0 ; i < pregunta.length ; i++){
                    pregunta[i].style.display = 'flex';
                    }
                }
                else{
                    if(total >= 29 && total <= 36){
                        let pregunta = document.getElementsByClassName("cdd");
                        for(let i = 0 ; i < pregunta.length ; i++){
                        pregunta[i].style.display = 'flex';
                        }
                    }
                }
            }
        }

        form.style.display = 'none';
        aniform.style.display = 'flex';
    }
});

aniform.addEventListener("submit", function(event){

    event.preventDefault();

    let playaAni = document.getElementById("ply");
    let preguntap = document.getElementsByClassName("ply");
    let bosqueAni = document.getElementById("bsq");
    let preguntab = document.getElementsByClassName("bsq");
    let selvaAni = document.getElementById("slv");
    let preguntase = document.getElementsByClassName("slv");
    let ciudadAni = document.getElementById("cdd");
    let preguntac = document.getElementsByClassName("cdd");
    let resulta = document.getElementById("resultani");
    let conte = document.getElementById("resultado");
    let imagenres = document.getElementById("imganiml");
    let valido = true;

    let playalist = ["Tiburon", "Tortuga", "Cangrejo","Pulpo"];
    let bosquelist = ["Nutria", "Mapache", "Ajolote","Zorro"];
    let selvalist = ["Rana", "Capibara", "Tigre","Murcielago"];
    let ciudadlist = ["Perro", "Gato", "Colibri","Hamster"];

    // Animales de la playa

    if(playalist.indexOf(playaAni.value) == -1){
        let error = document.getElementById("err10");
        error.textContent = "No es posible validar la opcion " + playaAni.value;
        valido = false;
    }
    else{
        if(playaAni.value == "Tiburon" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un tiburon";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/tiburón.png";
            conte.style.display="block";
            valido = true;
        }

        if(playaAni.value == "Tortuga" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres una tortuga";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/tortuga.png";
            conte.style.display="block";
            valido = true;
        }

        if(playaAni.value == "Cangrejo" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un cangrejo";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/cangrejo.png";
            conte.style.display="block";
            valido = true;
        }

        if(playaAni.value == "Pulpo" && preguntap[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un pulpo";
            result.textContent = " Felicidades perteneces a la playa";
            imagenres.src="../Statics/img/pulpo.png";
            conte.style.display="block";
            valido = true;
        }

    
    }

    //Animales del bosque

    if(bosquelist.indexOf(bosqueAni.value) == -1){
        let error = document.getElementById("err11");
        error.textContent = "No es posible validar la opcion " + bosqueAni.value;
        valido = false;
         
    }
    else{
        if(bosqueAni.value == "Ajolote" && preguntab[0].style.display == "flex"){
            result.textContent = " Felicidades perteneces a el bosque";
            resulta.textContent = "Felicidades eres un ajolote";
            imagenres.src="../Statics/img/ajolote.png";
            conte.style.display="block";
            valido = true;
        }

        if(bosqueAni.value == "Nutria" && preguntab[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un nutria";
            result.textContent = " Felicidades perteneces a el bosque";
            imagenres.src="../Statics/img/nutria.png";
            conte.style.display="block";
            valido = true;
        }

        if(bosqueAni.value == "Mapache" && preguntab[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un mapache";
            result.textContent = " Felicidades perteneces a el bosque";
            imagenres.src="../Statics/img/mapache.png";
            conte.style.display="block";
            valido = true;
        }

        if(bosqueAni.value == "Zorro" && preguntab[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un zorro";
            result.textContent = " Felicidades perteneces a el bosque";
            imagenres.src="../Statics/img/zorro.png";
            conte.style.display="block";
            valido = true;
        }

    
    }

    // Animales de la selva

    if(selvalist.indexOf(selvaAni.value) == -1){
        let error = document.getElementById("err12");
        error.textContent = "No es posible validar la opcion " + selvaAni.value;
        valido = false;
    }
    else{
        if(selvaAni.value == "Murcielago" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un murcielago";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/murcielago.png";
            conte.style.display="block";
            valido = true;
        }

        if(selvaAni.value == "Tigre" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un tigre";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/tigra.png";
            conte.style.display="block";
            valido = true;
        }

        if(selvaAni.value == "Capibara" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un capibara";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/capibara.png";
            conte.style.display="block";
            valido = true;
        }

        if(selvaAni.value == "Rana" && preguntase[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres una rana";
            result.textContent = " Felicidades perteneces a la selva";
            imagenres.src="../Statics/img/rana.png";
            conte.style.display="block";
            valido = true;
        }

        
    }

    // Animales de la ciudad

    if(ciudadlist.indexOf(ciudadAni.value) == -1){
        let error = document.getElementById("err13");
        error.textContent = "No es posible validar la opcion " + ciudadAni.value;
        valido = false; 
    }
    else{
        if(ciudadAni.value == "Perro" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un perro";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/perro.png";
            conte.style.display="block";
            valido = true;
        }
        
        if(ciudadAni.value == "Gato" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un gato";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/gato.png";
            conte.style.display="block";
            valido = true;
        }

        if(ciudadAni.value == "Colibri" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un colibri";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/colibri.png";
            conte.style.display="block";
            valido = true;
        }

        if(ciudadAni.value == "Hamster" && preguntac[0].style.display == "flex"){
            resulta.textContent = "Felicidades eres un hamster";
            result.textContent = "Feliciddades perteneces a la ciudad";
            imagenres.src="../Statics/img/hamster.png";
            conte.style.display="block";
            valido = true;
        }

        
    }
    if(valido == true){
        aniform.style.display = "none"
    }
})