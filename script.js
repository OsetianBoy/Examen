const quizData = [
    {
        pregunta: 'Cual es la capital de Hungria?',
        a: 'Sofia',
        b: 'Samara',
        c: 'Budapest',
        d: 'Bucarest',
        correcta: 'c'
    }, {
        pregunta: 'Población aproximada de América del Sur?',
        a: '300 millones',
        b: '218 millones',
        c: '442 millones',
        d: '223 millones',
        correcta: 'c'
    }, {
        pregunta: 'Quien invento el futbol?',
        a: 'Brasil',
        b: 'Inglaterra',
        c: 'Argentina',
        d: 'Estados Unidos',
        correcta: 'b'
    }, {
        pregunta: 'Cuantos años vivio la persona mas vieja del mundo?',
        a: '122 años',
        b: '116 años',
        c: '110 años',
        d: '132 años',
        correcta: 'a'
    }, {
        pregunta: 'Cual es la velocidad de la luz/h?',
        a: '300 mil kms/h',
        b: '1 billon kms/h',
        c: '1 millon kms/h',
        d: '186 mil kms/h',
        correcta: 'b'
    }
];

const quiz = document.getElementById('quiz');
const respuestasEls = document.querySelectorAll('.respuesta');
const preguntaEl = document.getElementById('pregunta');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const responderBtn = document.getElementById('responder');

let quizActual = 0;
let puntuacion = 0;

cargarQuiz();

function cargarQuiz() {
    deseleccionarRespuestas();

    const quizActualData = quizData[quizActual];

    preguntaEl.innerHTML = quizActualData.pregunta;
    a_text.innerText = quizActualData.a;
    b_text.innerText = quizActualData.b;
    c_text.innerText = quizActualData.c;
    d_text.innerText = quizActualData.d;
}

function seleccion() {

    let respuesta = undefined;

    respuestasEls.forEach((respuestaEl) => {
        if (respuestaEl.checked) {
            respuesta = respuestaEl.id;
        }
    });

    return respuesta;
}

function deseleccionarRespuestas(){
    respuestasEls.forEach((respuestaEl) => {
        respuestaEl.checked = false;
    });
}


responderBtn.addEventListener("click", () => {
    //chekea para ver la respuesta
    const respuesta = seleccion();

    //console.log(respuesta);

    if (respuesta){
        if(respuesta === quizData[quizActual].correcta){
            puntuacion++;
        }

        quizActual++;
        if (quizActual < quizData.length) {
            cargarQuiz();
        } else {
            quiz.innerHTML = `<h2>Respondiste correctamente a ${puntuacion}/${quizData.length} preguntas.</h2> <button onclick="location.reload()">Recargar</button>`;
        }
    }
});