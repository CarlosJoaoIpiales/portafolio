// Funcion para el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className ==""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// Funcion para aplicar el estilo del menu cuando es seleccionado

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    //desaparecemos el menu cuando se selecione una opcion

    var x = document.getElementById("nav");
    x.className = "";
}

// animacion para el scrolling de la pagina web

window.onscroll = function(){
    efectoHabilidades();
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("rt").classList.add("barra-progreso4");
    }
}