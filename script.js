// Configuração da data final do temporizador
const targetDate = new Date("2025-12-25 00:00:00").getTime(); // Altere a data aqui

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Atualiza o temporizador a cada segundo
setInterval(updateCountdown, 1000);

// Configuração do carrossel de fotos
const images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Substitua pelos nomes das suas imagens
let currentImageIndex = 0;

document.getElementById("prev").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("carousel-img").src = images[currentImageIndex];
});

document.getElementById("next").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("carousel-img").src = images[currentImageIndex];
});

// Controle da música do YouTube
const player = document.getElementById("youtube-player");
const playButton = document.getElementById("play-music");
const pauseButton = document.getElementById("pause-music");

playButton.addEventListener("click", () => {
    const playerSrc = player.src;
    if (!playerSrc.includes("autoplay=1")) {
        player.src += "&autoplay=1";  // Inicia a música
        playButton.innerText = "⏸️ Pausar Música";
    }
});

pauseButton.addEventListener("click", () => {
    const playerSrc = player.src.replace("&autoplay=1", "");  // Pausa a música
    player.src = playerSrc;
    playButton.innerText = "🎵 Tocar Música";
});
