const countdown = document.getElementById('countdown');
const displayPuntos = document.getElementById('puntos');
const displayTemp = document.getElementById('temp');
const boton = document.getElementById('boton-click');
const botonEasy = document.getElementById('easy');
const botonMed = document.getElementById('med');
const botonHard = document.getElementById('hard');
const titleMode = document.getElementById('modeTitle');
const startButton = document.getElementById('start-button');
const backButton = document.getElementById('back-button');

let score = 0;

var variableTiempo = 10; /// default 10 seg

const easyMode = () => {

  variableTiempo = 10;

} 

const medMode = () => {

  variableTiempo = 30;

} 

const hardMode = () => {

  variableTiempo = 60;

} 



const iniciar = () => { 
  score = 0;
  displayTemp.style.display = "block";
  botonEasy.style.display = 'none';
  botonMed.style.display = 'none';
  botonHard.style.display = 'none';
  titleMode.style.display = 'none';
  backButton.style.display = 'none';
  startButton.innerHTML = 'Retry';

  puntos.innerHTML = 'Score : ' + score;
  timer.style.display = "block";
  countDown();
  temporizador();


  window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
  }, false);
  
}

const temporizador = () => {
  const minutos = 1;
  let tiempo = minutos * variableTiempo; // Si lo queres probar mas rapido ponele 10 seg
  
  startButton.style.display = 'none';

  var cambio = setTimeout (function (){
  var cambio2 = setInterval(function (){ // Si le queres poner otro nombre a la var hacelo
    const minuto = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    temp.innerHTML = '0' + `${minuto}` + ':' + `${segundos}`;

    tiempo--;

    if (segundos == 0 && minuto == 0){

      startButton.style.display = 'block';
      backButton.style.display = 'block';
      clear();
      clicks();
      puntos.innerHTML = ' End Score : '  + score++;
    }

  },1000);

  boton.style.display = "block";

  function clear(){ // Para resetear el contador sino seguia hasta -1, etc XD

    displayTemp.style.display = 'none';
    boton.style.display = 'none';
    clearTimeout(cambio);
    clearInterval(cambio2);

  }

  },4000);//Delay

}

const backclick = () =>{

  location.href = "index.html";

}

const clicks = () => {

  puntos.innerHTML = 'Score : '  + ++score;

}



const countDown = () => {
  countdown.style.display = "block";
    setTimeout(() => {  
      countdown.innerHTML = "3"; 
      }, 1000);  
    setTimeout(() => {  
     countdown.innerHTML = "2";
      }, 2000); 
    setTimeout(() => {  
      countdown.innerHTML = "1";
      }, 3000);
    setTimeout(() => {  
      countdown.innerHTML = "";
      countdown.style.display = "none";
      }, 4000);

}



