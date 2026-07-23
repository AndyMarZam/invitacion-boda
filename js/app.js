const fechaBoda = new Date("September 11, 2026 19:15:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;

    if(diferencia <= 0){

        document.getElementById("countdown").innerHTML =
        "<h2>¡Llegó el gran día!</h2>";

        return;
    }

    const dias = Math.floor(diferencia/(1000*60*60*24));
    const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
    const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));
    const segundos = Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").innerHTML=dias;
    document.getElementById("horas").innerHTML=horas;
    document.getElementById("minutos").innerHTML=minutos;
    document.getElementById("segundos").innerHTML=segundos;

    

}

actualizarContador();

setInterval(actualizarContador,1000);


document.addEventListener("visibilitychange", () => {

    if (document.hidden && !audio.paused) {

        audio.pause();

        icono.innerHTML = "▶";

        boton.classList.remove("playing");

    }

});
