let palabras = [
  "ALURA",
  "ORACLE",
  "ONE",
  "JAVASCRIPT",
  "HTML",
  "ESTILOS",
  "EDUCACION",
  "PAGINA",
  "WEB",
];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let palabraCorrecta = "";
let letrasMalas = [];
let errores = 8;
let letraIngresada = [];

function juegoNuevo() {
  location.reload();
}

function escogerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  return palabra;
}

function comprobarLetra(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key);
    return false;
  } else {
    letras.push(key);
    return true;
  }
}

function agregarLetraBuena(i) {
  palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function anadirLetraMala(letra) {
  if (palabraSecreta.indexOf(letra) <= 0) {
    errores -= 1;
  }
}

function finJuego(letra) {
  if (letraIngresada.length < palabraSecreta.length) {
    letrasMalas.push(letra);

    if (letrasMalas.length > 8) {
      mensajePerder();
    } else if (letraIngresada.length < palabraSecreta.length) {
      anadirLetraMala(letra);
      escribirLetraMala(letra, errores);
    }
  }
}

function ganaJuego(letra) {
  letraIngresada.push(letra.toUpperCase());
  if (letraIngresada.length == palabraSecreta.length) {
    mensajeGanar();
  }
}

function validarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

function iniciarJuego() {
  document.getElementById("botonesInicio").style.display = "none";
  document.getElementById("ahorcado").style.display = "block";
  document.getElementById("botonesJueg").style.display = "block";
  escogerPalabraSecreta();
  dibujarCanvas();
  dibujarLinea();

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (letrasMalas.length <= 8) {
      if (!comprobarLetra(e.key) && validarLetra(e.keyCode)) {
        if (palabraSecreta.includes(letra)) {
          agregarLetraBuena(palabraSecreta.indexOf(letra));
          for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] == letra) {
              escribirLetra(i);
              ganaJuego(letra);
            }
          }
        } else {
          if (!comprobarLetra(e.key) && !ganaJuego(letra)) return;
          dibujarAhorcado(errores);
          finJuego(letra);
        }
      }
    } else {
      alert("LLegaste al límite de letras");
    }
  };
}

function verElemAgrPalabra() {
  document.getElementById("botonesInicio").style.display = "none";
  document.getElementById("txtArea").style.display = "block";
  document.getElementById("btnsAgregarPalabra").style.display = "block";
}

function aniadirPalabra() {
  let nuevaPalabra = document.getElementById("nuevaPalabra").value;
  nuevaPalabra.toUpperCase;
  if (nuevaPalabra !== "") {
    palabras.push(nuevaPalabra);
    alert("La palabra fue guardada");
    document.getElementById("txtArea").style.display = "none";
    document.getElementById("btnsAgregarPalabra").style.display = "none";
    console.log(palabras);
    iniciarJuego();
  } else {
    alert("Ninguna palabra ha sido digitada");
  }
}
