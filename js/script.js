
// Gerador de cartas com frases bíblicas e de santos
const letters = [
    "O amor é paciente, o amor é bondoso. Tudo sofre, tudo crê, tudo espera, tudo suporta. (1 Coríntios 13:4-7)",
    "Eu e minha casa serviremos ao Senhor. (Josué 24:15)",
    "O amor verdadeiro não é apenas um sentimento, mas uma escolha diária. (São João Paulo II)",
    "Deixe tudo para trás e siga o caminho do amor. (Santa Teresa de Calcutá)",
    "O casamento é um reflexo do amor de Cristo pela Igreja. (Efésios 5:25)"
];
function generateLetter() {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('generated-letter').innerText = letter;
}

// Contagem regressiva
const weddingDate = new Date("2026-02-07T16:00:00");
function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("countdown-timer").innerText = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}
setInterval(updateCountdown, 1000);

// Gerador de músicas brasileiras
const songs = [
    "Como É Grande o Meu Amor Por Você - Roberto Carlos",
    "Aquarela - Toquinho",
    "Trem-Bala - Ana Vilela",
    "Te Amo - Zezé Di Camargo & Luciano",
    "Nuvem de Lágrimas - Chitãozinho & Xororó",
    "Eu Sei Que Vou Te Amar - Tom Jobim",
    "Águas Purificadoras - Diante do Trono"
];
function generateSong() {
    const song = songs[Math.floor(Math.random() * songs.length)];
    document.getElementById("generated-song").innerText = `🎵 ${song}`;
}

// Salvando mensagens personalizadas
function saveMessage() {
    const message = document.getElementById("message-box").value;
    if (message) {
        document.getElementById("saved-message").innerText = `Mensagem salva: "${message}"`;
        document.getElementById("message-box").value = "";
    } else {
        alert("Por favor, escreva uma mensagem antes de salvar!");
    }
}
