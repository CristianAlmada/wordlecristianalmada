let intentos= 6;
let palabra ='APPLE';


const button = document.getElementById("guess-button");
button.addEventListener('click', intentar);

function leerintentos(){
    let intentos = document.getElementById("guess-input").value;
    return intentos.toUpperCase();
}

function intentar(){
    const intentos = leerintentos();
    if (intentos === palabra){
        terminar("<h1>GANASTE!😁</h1>")
    }    

const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';

for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (intentos[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = intentos[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(intentos[i]) ) { //AMARILLO
            SPAN.innerHTML = intentos[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = intentos[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }   
    GRID.appendChild(ROW)
    intentos--;
    if(intentos ==0){
        terminar('<h1>Perdiste!😖<h1/>')
    }   
 
}
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }

