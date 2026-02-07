// script.js


window.addEventListener('load', () => {
    // Salida Confeti
    setTimeout(() => {
        startConfetti();
    }, 5000); // Espera 5 segundos antes de iniciar el confeti   aqui
});

function startConfetti() {
    const container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
    `;
    document.body.appendChild(container);

    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#a4ffc4', '#ffffff'];

    // muchos confetis
    for (let i = 0; i < 200; i++) {
        const dot = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 5; // stagger start
        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -20px;
            left: ${Math.random() * 100}vw;
            border-radius: 50%;
            opacity: ${Math.random()};
            transform: translateY(0) rotate(${Math.random() * 360}deg);
            animation: confettiFall ${Math.random() * 3 + 3}s linear ${delay}s infinite;
        `;
        container.appendChild(dot);
    }

    // Agregar keyframes para la animación
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}




document.getElementById('crema').addEventListener('endEvent', function() {
    const btn = document.getElementById('btn-magico');
    btn.classList.add('boton-visible');
});

// Lógica para abrir la dedicatoria
document.getElementById('btn-magico').onclick = function() {
    // 1. Ocultamos el pastel, el texto de "Happy Birthday" y el botón
    document.getElementById('cake').style.display = 'none';
    document.querySelector('.text').style.display = 'none';
    document.getElementById('wrapper-boton').style.display = 'none';
    
    // 2. Mostramos la pantalla de la dedicatoria
    const pantalla = document.getElementById('pantalla-dedicatoria');
    pantalla.style.display = 'flex';
    


    // 4. Lógica de Máquina de Escribir
    const parrafo = document.querySelector('.tarjeta p');
   const textoOriginal = parrafo.innerText; // Guardamos el texto 
    parrafo.innerHTML = ""; // Limpiamos para empezar a escribir
    parrafo.classList.add('escribiendo'); // Activamos la pluma

    let i = 0;
    function escribir() {
        if (i < textoOriginal.length) {
            parrafo.innerHTML += textoOriginal.charAt(i);
            i++;
            setTimeout(escribir, 50); // Velocidad: 50ms por letra
        } else {
            parrafo.classList.remove('escribiendo'); // Quitamos pluma al terminar
        }
    }
    escribir();
};



// Función para regresar 
function cerrar() {
    // Mostramos todo de nuevo
    document.getElementById('cake').style.display = 'block';
    document.querySelector('.text').style.display = 'block';
    document.getElementById('wrapper-boton').style.display = 'flex';
    
    // Ocultamos la carta
    document.getElementById('pantalla-dedicatoria').style.display = 'none';
    document.getElementById('musica').pause();
}