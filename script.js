document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("#botao-nao");
    botao.addEventListener("mouseover", () => {
        const x = Math.floor(Math.random() * (window.innerWidth - botao.clientWidth))
        const y = Math.floor(Math.random() * (window.innerHeight - botao.clientHeight))
        botao.style.position = "absolute";
        botao.style.left = `${x}px`;
        botao.style.top = `${y}px`;
    })
});

function vaiDarNamoro () {
    window.location.href = "https://www.youtube.com/watch?v=mz3tnaCh5aQ";
}

const audio = new Audio('./boa-noite-meu-consagrado.mp3');

audio.play();