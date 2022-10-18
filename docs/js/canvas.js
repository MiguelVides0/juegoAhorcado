function dibujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8A3871";

  //dibujar base
  tablero.fillRect(0, 0, 900, 750);
  tablero.beginPath();
  tablero.moveTo(250, 475);
  tablero.lineTo(600, 475);
  tablero.stroke();
  tablero.closePath();

  //dibujar poste
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8A3871";
  tablero.beginPath();
  tablero.moveTo(250, 475);
  tablero.lineTo(250, 25);
  tablero.stroke();
  tablero.closePath();
}

function dibujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";
  tablero.strokeStyle = "#0A3871";

  let anchura = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(150 + anchura * i, 575);
    tablero.lineTo(200 + anchura * i, 575);
  }
  tablero.stroke();
  tablero.closePath();
}

function escribirLetra(index) {
  tablero.font = "bold 50px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";
  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 160 + anchura * index, 565);
  tablero.stroke();
}

function escribirLetraMala(letra, errorLetra) {
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#0A3871";
  tablero.fillText(letra, 50 + 40 * (10 - errorLetra), 625, 50);
}

function dibujarAhorcado(puntaje) {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.strokeStyle = "#0A3871";
  if (puntaje === 8) {
    //poste
    tablero.moveTo(250, 475);
    tablero.lineTo(250, 475);
  }
  //barra
  if (puntaje === 7) {
    tablero.moveTo(250, 25);
    tablero.lineTo(450, 25);
  }
  if (puntaje === 6) {
    //cuerda
    tablero.moveTo(450, 25);
    tablero.lineTo(450, 75);
  }
  if (puntaje === 5) {
    //cabeza
    tablero.moveTo(485, 105);
    tablero.arc(450, 110, 35, 0, Math.PI * 2);
  }
  if (puntaje === 4) {
    //linea cuerpo
    tablero.moveTo(450, 150);
    tablero.lineTo(450, 275);
  }
  if (puntaje === 3) {
    //pierna izquerda
    tablero.moveTo(450, 275);
    tablero.lineTo(405, 345);
  }
  if (puntaje === 2) {
    //pierna derecha
    tablero.moveTo(450, 275);
    tablero.lineTo(505, 345);
  }
  if (puntaje === 1) {
    //mano izquerda
    tablero.moveTo(450, 150);
    tablero.lineTo(405, 225);
  }
  if (puntaje === 0) {
    //mano derecha
    tablero.moveTo(450, 150);
    tablero.lineTo(505, 225);
  }
  tablero.stroke();
  tablero.closePath();
}

function mensajePerder() {
  tablero.font = " bold 42px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "red";
  tablero.fillText("Se acabaron", 550, 250);
  tablero.fillText("los intentos!", 550, 295);
  tablero.fillText("La palabra era:", 550, 355);
  tablero.fillText(palabraSecreta, 550, 400);
  setTimeout(recargar, 10000);
}

function mensajeGanar() {
  tablero.font = "bold 42px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "green";
  tablero.fillText("Ganaste,", 550, 250);
  tablero.fillText("Felicidades!", 550, 295);
  setTimeout(recargar, 3000);
}

function recargar() {
  location.reload();
}
