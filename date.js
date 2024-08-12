const dateEventDOM = document.querySelector(".hero-content h1 span").innerHTML;

function getDate(str) {
    // Separar a data e a hora usando split por espaço
    const [date, time] = str.trim().split(" ");
    
    // Separar dia, mês e ano da data
    const [day, month, year] = date.split("/").map(Number);
    
    // Separar horas e minutos da hora
    const [hour, minute] = time.split("H").map(Number);
    
    // Criar um objeto Date com os valores extraídos
    return new Date(year, month - 1, day, hour, minute);
}

const dateEvent = getDate(dateEventDOM);

function pickTimeLeft() {
    const instantTime = new Date();
    const timeStamp = instantTime.getTime();
    const timeStampDOM = dateEvent.getTime();

    const timeLeft = timeStampDOM - timeStamp;

    const days = Math.floor(timeLeft / 86400000); // 1 dia = 86400000 milissegundos
    const hours = Math.floor((timeLeft % 86400000) / 3600000); // 1 hora = 3600000 milissegundos
    const minutes = Math.floor((timeLeft % 3600000) / 60000); // 1 minuto = 60000 milissegundos
    const seconds = Math.floor((timeLeft % 60000) / 1000); // 1 segundo = 1000 milissegundos

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCountdown() {
    const countdown = pickTimeLeft();
    const countdownTimer = document.getElementById("countdown-timer");

    countdownTimer.innerHTML = `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Inicializa a contagem regressiva na primeira vez
updateCountdown();