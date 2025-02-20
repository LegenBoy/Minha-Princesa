// Data de início do namoro, com hora exata de 17:40
const startDate = new Date("2024-06-23T17:40:00").getTime();  // Início do namoro com hora e minuto específicos

function updateTime() {
    const now = new Date().getTime();  // Hora atual
    const timeElapsed = now - startDate;  // Diferença entre a data atual e o início do namoro

    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Atualiza os elementos do DOM
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Atualiza o temporizador a cada segundo
setInterval(updateTime, 1000);
