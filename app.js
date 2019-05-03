//preguntas para JS
var pregJs = ["¿Cuál es la forma correcta de conectar tu archivo javascript con el archivo HTML?",
    "¿Para qué sirve el evento onchange?",
    "¿Para qué sirve el elemento select?"
];

var pregCss = ["¿Cómo se escribe un selector ID de un elemento con id = 'destacado'?",
    "¿Preg2?",
    "¿Preg3?"
];

//alternativas para JS

//alternativas 1
var alt1 = ["<button class=btn1 onclick=qa1()>Con text/javascript y src=app.js dentro de un script.</button>","<button class=btn1 onclick=qb1()>Con 'text/javascript' y src='app.js' dentro de un script.</button>","<button class=btn1 onclick=qc1()>Con 'text/javascript' y 'src=app.js' dentro de un script.</button>"];

// alternativas 2
var alt2 = ["<button class=btn1 onclick=qa2()>Para saber cuando el usuario selecciona una opción en una lista desplegable.</button><br /><br/><button class=btn1 onclick=qb2()>Para saber cuando el usuario hace click a un elemento de una lista.</button><br/><br /><button class=btn1 onclick=qc2()>Para saber cuando el usuario pasa el cursor sobre el elemento de una lista.</button>"];

// alternativas 3
var alt3 = ["<button class=btn1 onclick=qa3()>Para insertar un menú de opciones de selección única.</button><br /><br /><button class=btn1 onclick=qb1()>Es un control que muestra un menú de opciones que son representadas por elementos option.</button><br /><br /><button class=btn1 onclick=qc1()>Para seleccionar elementos personalizados.</button>"];

//alternativas para CSS

//alternativas 1
var altC1 = ["<button class=btn1 onclick=qa1()>.destacado</button><br /><br/><button class=btn1 onclick=qb1()>#destacado</button><br/><br /><button class=btn1 onclick=qc2()>id#aviso</button>"];

// alternativas 2
var altC2 = ["<button class=btn1 onclick=qa2()>Alt 1.</button><br /><br/><button class=btn1 onclick=qb2()>Alt 2</button><br/><br /><button class=btn1 onclick=qc2()>Alt 3.</button>"];

// alternativas 3
var altC3 = ["<button class=btn1 onclick=qa3()>Alt 1.</button><br /><br /><button class=btn1 onclick=qb1()>Alt 2.</button><br /><br /><button class=btn1 onclick=qc1()>Alt 3.</button>"];

//alternativas para CSS
function GuardarNombre() {
    const nombre = document.getElementById('name-user').value;
    if (nombre != "") {
        document.getElementById("titulo").innerHTML = "Hola " + nombre + "! Esta es la trivia para pre-admisión a Laboratoria!";
        document.getElementById("divNameUser").innerHTML = "";
        document.getElementById("divIngresar").innerHTML = "";
        document.getElementById('divJavascript').style.display = "block";
        document.getElementById('divCss').style.display = "block";
    } else {
        alert("Por favor ingrese su nombre.")
    }
}

var a = 0;
a++;

// para el resultado
let score = 0;

function EmpezarQuizJs() {
    c = 20;
    document.getElementById("titulo").innerHTML = "Éxitos en el Quiz!";
    document.getElementById("numberQuest").style.display = "block";
    document.getElementById("numQuest").innerHTML = "Pregunta " + a++;
    document.getElementById("tempQuest").style.display = "block";
    document.getElementById("time001").innerHTML = 20;
    document.getElementById('cuerpo-formulario').style.display = "block";
    document.getElementById("divJavascript").innerHTML = "";
    document.getElementById("divCss").innerHTML = "";
    document.getElementById("preg-formulario").innerHTML = pregJs[0];
    document.getElementById("alt1-formulario").innerHTML = alt1[0];
    document.getElementById("alt2-formulario").innerHTML = alt1[1];
    document.getElementById("alt3-formulario").innerHTML = alt1[2];
}

function EmpezarQuizCss() {
    c = 20;
    document.getElementById("titulo").innerHTML = "Éxitos en el Quiz!";
    document.getElementById("numberQuest").style.display = "block";
    document.getElementById("numQuest").innerHTML = "Pregunta " + a++;
    document.getElementById("tempQuest").style.display = "block";
    document.getElementById("time001").innerHTML = 20;
    document.getElementById('cuerpo-formulario').style.display = "block";
    document.getElementById("divJavascript").innerHTML = "";
    document.getElementById("divCss").innerHTML = "";
    document.getElementById("preg-formulario").innerHTML = pregCss[0];
    document.getElementById("alt1-formulario").innerHTML = altC1[0];
    document.getElementById("alt2-formulario").innerHTML = altC1[1];
    document.getElementById("alt3-formulario").innerHTML = altC1[2];
}

function qa1(){
    window.clearInterval(update);
    document.getElementById("btnNext").style.display = "block";
}

function qb1(){
    window.clearInterval(update);
    score = score + 1;
    document.getElementById("btnNext").style.display = "block";
}

function qc1(){
    window.clearInterval(update);
    document.getElementById("btnNext").style.display = "block";
}

function qa2(){
    window.clearInterval(update);
    score = score + 1;
    document.getElementById("btnNext").style.display = "block";
}

function qb2(){
    window.clearInterval(update);
    document.getElementById("btnNext").style.display = "block";
}

function qc2(){
    window.clearInterval(update);
    document.getElementById("btnNext").style.display = "block";
}

function qa3(){
    window.clearInterval(update);
    document.getElementById("btnResult").style.display = "block";
}

function qb3(){
    window.clearInterval(update);
    score = score + 1;
    document.getElementById("btnResult").style.display = "block";
}

function qc3(){
    window.clearInterval(update);
    document.getElementById("btnResult").style.display = "block";
}

function siguientePreg() {
    if (a == "2") {
        update = setInterval("timer()", 1000);
        c = 20;
        document.getElementById("numQuest").innerHTML = "Pregunta " + a++;
        document.getElementById("tempQuest").style.display = "block";
        document.getElementById("time001").innerHTML = 20;
        document.getElementById('cuerpo-formulario').style.display = "block";
        document.getElementById("divJavascript").innerHTML = "";
        document.getElementById("divCss").innerHTML = "";
        document.getElementById("preg-formulario").innerHTML = pregJs[1];
        document.getElementById("alt1-formulario").innerHTML = alt2[0];
        document.getElementById("alt2-formulario").innerHTML = alt2[1];
        document.getElementById("alt3-formulario").innerHTML = alt2[2];
        if (c < 1) {
            window.clearInterval(update);
            document.getElementById("message001").innerHTML = "Se acabó el tiempo";
            document.getElementById("message002").innerHTML = "";
            document.getElementById("message003").innerHTML = "";
            document.getElementById("btnResult").style.display = "block";
        }
    } else if (a == "3") {
        update = setInterval("timer()", 1000);
        c = 20;
        document.getElementById("tempQuest").style.display = "block";
        document.getElementById("btnResult").style.display = "block";
        document.getElementById("time001").innerHTML = 20;
        document.getElementById("preg-formulario").innerHTML = pregJs[2];
        document.getElementById("alt1-formulario").innerHTML = alt3[0];
        document.getElementById("alt2-formulario").innerHTML = alt3[1];
        document.getElementById("alt3-formulario").innerHTML = alt3[2];
        document.getElementById("numQuest").innerHTML = "Pregunta " + a++;
        document.getElementById("btnNext").innerHTML = "";

    } else {
        window.clearInterval(update);
        document.getElementById("message001").innerHTML = "Fin del Quiz";
        document.getElementById("numberQuest").style.display = "block";
        document.getElementById("numQuest").innerHTML = "¿Quieres volver a intentarlo?";
        document.getElementById("btnNext").innerHTML = "";
        document.getElementById("message002").innerHTML = "";
        document.getElementById("message003").innerHTML = "";
    }

}

function timer() {
    c = c - 1;
    if (c < 200) {
        document.getElementById("time001").innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
        document.getElementById("message001").innerHTML = "Se acabó el tiempo";
        document.getElementById("message002").innerHTML = "";
        document.getElementById("message003").innerHTML = "";
        document.getElementById("message005").innerHTML = "<button class=btn3 onclick=resultados()>Ver Resultados</button>";
    }
}

let update = setInterval("timer()", 1000);

function VolverIntentar(){
    location.reload();
}