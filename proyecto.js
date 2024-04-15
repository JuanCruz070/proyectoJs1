
// Alerta Bienvenida

alert("Bienvenido a la trivia de Dragon Ball. Veamos como te va!");


// Loop para repetir la trivia
let repetir = true;
while (repetir) {

    const aceptarTerminos = confirm("Acepta los terminos y condiciones para empezar insecto!!");

    if (aceptarTerminos) {
        const nombreUsuario = prompt("Por favor, ingresa tu nombre:");

        alert("Hola " + nombreUsuario + ", empecemos con la trivia");

        // array con las preguntas
        const preguntas = [
            {
                pregunta: "Quien es el principe de los saiyan?",
                opciones: ["Goku", "Krillin", "Vegeta", "Chaos"],
                respuestaCorrecta: "Vegeta"
            },
            {
                pregunta: "Contra que enemigo se transforma en ssj Goku por primera vez?",
                opciones: ["Majin Buu", "Raditz", "Picollo", "Freezer"],
                respuestaCorrecta: "Freezer"
            },
            {
                pregunta: "Como se llama el padre de Goku?",
                opciones: ["Bardock", "Turles", "Broly", "Rey Vegeta"],
                respuestaCorrecta: "Bardock"
            },
            {
                pregunta: "Con que transformacion/tecnica derrota Goku a Nappa?",
                opciones: ["Kaio Ken", "Ssj", "Ultra instinto", "Ozaru"],
                respuestaCorrecta: "Kaio Ken"
            },
            {
                pregunta: "Quien es el eterno rival de Vegeta?",
                opciones: ["Bills", "Freezer", "Goku", "Mr Satan"],
                respuestaCorrecta: "Goku"
            },
            {
                pregunta: "Con que tecnica es derrotado Cell?",
                opciones: ["Garlickgun", "Bigbang attack", "Kamehameha", "Mazenko"],
                respuestaCorrecta: "Kamehameha"
            },
        ];

        function mostrarTrivia() {
            let puntos = 0;

            for (let i = 0; i < preguntas.length; i++) {
                const respuestaUsuario = prompt(preguntas[i].pregunta + "\n" + preguntas[i].opciones.join("\n"));

                if (respuestaUsuario === preguntas[i].respuestaCorrecta) {
                    alert("Respuesta Correcta!");
                    puntos++;
                } else {
                    alert("Respuesta incorrecta, La respuesta correcta es: " + preguntas[i].respuestaCorrecta);
                }
            }

            alert("Has terminado el cuestionario. Obtuviste " + puntos + " puntos de 5 posibles");
        }

        mostrarTrivia();

        repetir = confirm("Queres volver a intentarlo?");
    } else {
        alert("No puedes contirnuar sin aceptar los terminos y condiciones");
        repetir = false;
    }
}

alert("Gracias por jugar.");