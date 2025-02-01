document.addEventListener("DOMContentLoaded", function() {
    let textos = [
        "Te prometo que seré inolvidable.",
        "Piénsalo de nuevo.",
        "Vamos, atrévete a decir que sí.",
        "No dejes que el miedo te detenga.",
        "Di sí por favor."
    ];
    let index = 0;  // Iniciamos el contador
    let btnSi = document.getElementById("btnSi");
    let btnNo = document.getElementById("btnNo");
    let pregunta = document.getElementById("pregunta");
    let msmGif = document.getElementById("msmGif");

    btnNo.addEventListener("click", function() {
        // Cambiamos el texto en el botón "No"
        this.textContent = textos[index];

        // Cambiamos la imagen según el nombre de archivo
        let imagenes = ["uno.gif", "dos.gif", "tres.gif", "cuatro.gif", "cinco.gif"];
        msmGif.src = imagenes[index];  // Cambia la imagen según el índice

        // Aumentamos el índice
        index++;

        // Si el índice supera la longitud del array, lo reiniciamos a 0
        if (index >= textos.length) {
            index = 0;  // Reinicia el ciclo
        }

        // Aumenta el tamaño del botón "Sí" en cada clic
        let currentSize = parseInt(window.getComputedStyle(btnSi).fontSize);
        btnSi.style.fontSize = (currentSize + 4) + "px";
    });

    btnSi.addEventListener("click", function() {
        btnNo.style.display = "none";
        btnSi.style.display = "none";
        $("#msmGif").addClass("d-none");
        
        pregunta.textContent = "Sabía que dirías que sí ❤️!";
        $("#endGif").removeClass("d-none");

        // Llamamos a la función de confeti
        lanzarConfeti();
    });

    function lanzarConfeti() {
        // Disparar confeti desde las esquinas
        confetti({
            particleCount: 150,    // Número de partículas
            angle: 45,             // Ángulo de disparo
            spread: 90,            // Ángulo de dispersión
            origin: { x: 0, y: 0 } // Esquina superior izquierda
        });

        confetti({
            particleCount: 150,    // Número de partículas
            angle: 135,            // Ángulo de disparo
            spread: 90,            // Ángulo de dispersión
            origin: { x: 1, y: 0 } // Esquina superior derecha
        });
    }
});
