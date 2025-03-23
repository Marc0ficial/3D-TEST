// Contador de FPS
let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;

function updateFPS() {
    const now = performance.now();
    frameCount++;

    // Si ha pasado más de 1 segundo, calcula los FPS
    if (now - lastFrameTime >= 1000) {
        fps = frameCount;
        document.getElementById('fps').innerText = fps;
        frameCount = 0; // Reinicia el contador de frames
        lastFrameTime = now; // Actualiza el tiempo
    }

    requestAnimationFrame(updateFPS); // Llama a la función en el siguiente frame
}

updateFPS(); // Inicia el contador de FPS

// Lógica para manejar los códigos de la barra lateral
const codes = {
    '2342': 'https://www.youtube.com/watch?v=spDfGcoWw8k', // Ejemplo de código válido
    '1234': 'https://www.youtube.com/watch?v=Tz5ldNRjQkE'  // Otro ejemplo
};

document.getElementById('submitCode').addEventListener('click', () => {
    const code = document.getElementById('codeInput').value;

    if (codes[code]) {
        window.location.href = codes[code]; // Redirige al enlace correspondiente
    } else {
        alert('Código no válido');
    }
});
