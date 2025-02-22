// Data de início do namoro (23 de junho de 2024 às 17:40)
const startDate = new Date("2024-06-23T17:40:00").getTime();  

function updateTime() {
    const now = new Date().getTime();  // Pega o horário atual
    const timeElapsed = now - startDate;  // Diferença entre agora e o início do namoro

    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Atualiza o contador na página
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Atualiza o contador a cada segundo
setInterval(updateTime, 1000);

// Chama a função imediatamente para evitar delay
updateTime();

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("player");

    // Tenta tocar a música assim que o usuário interage com a página
    document.body.addEventListener("click", function() {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay bloqueado pelo navegador:", error));
        }
    });
});
