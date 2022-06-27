function iniciar(){
    let botonMenu = document.getElementById("botonMenu");
    let botonLondres = document.getElementById("botonLondres");
    let botonParis = document.getElementById("botonParis");
    let botonTokyo = document.getElementById("botonTokyo");

    if (botonMenu.addEventListener){
        botonMenu.addEventListener("onclick", funcion(botonMenu.value));        
    } else {
        botonMenu.attachEvent("onclick", funcion(botonMenu.value));
    }
    if (botonLondres.addEventListener){
        botonLondres.addEventListener("onclick", funcion(botonLondres.value));        
    } else {
        botonLondres.attachEvent("onclick", funcion(botonLondres.value));
    }
    if (botonParis.addEventListener){
        botonParis.addEventListener("onclick", funcion(botonParis.value));        
    } else {
        botonParis.attachEvent("onclick", funcion(botonParis.value));
    }
    if (botonTokyo.addEventListener){
        botonTokyo.addEventListener("onclick", funcion(botonTokyo.value));        
    } else {
        botonTokyo.attachEvent("onclick", funcion(botonTokyo.value));
    }
}

function funcion(x){
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    console.log("dato recibido: " + x);
    switch (x) {
        case 0:
            titulo.innerHTML = "De que ciudad quieres obtener informacion?";
            parrafo.innerHTML = "Selecciona un pais en el menu";
            break;
        case 1:
            titulo.innerHTML = "Londres";
            parrafo.innerHTML = "Informacion de Londres";
            break;
        case 2:
            titulo.innerHTML = "Paris";
            parrafo.innerHTML = "Informacion de Paris";
            break;
        case 3:
            titulo.innerHTML = "Tokyo";
            parrafo.innerHTML = "Informacion de Tokyo";
            break;
    
        default:
            titulo.innerHTML = "Ciudad?";    
        break;
    }
}


if (window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent){
    window.addEventListener("onload", iniciar);
}