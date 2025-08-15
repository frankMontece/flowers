// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "me siento muy orgulloso de ti", time: 15 },
  { text: "porque me has demostrado que siempre te esfuerzas ", time: 18 },
  { text: "y a mi me encanta siempre elogiarte y recompensarte", time: 27 },
  { text: "solo y y las personas que tu consideres que..", time: 32 },
  { text: "en verdad sabemos y te queremos de corazon", time: 35 },
  { text: "el precio incalculable de tu amistad", time: 41 },
  { text: "y el valor inmensurable de ti como persona", time: 47 },
  { text: "si hay algo que tenga que decir es que...", time: 54 },
  { text: "no volvere a decirte TE AMO", time: 59 },
  { text: "al menos no hasta que...", time: 67 },
  { text: "sea el momento adecuado", time: 72 },
  { text: "pero mas alla de eso...", time: 78 },
  { text: "lo poco que te eh conocido", time: 83 },
  { text: "eh notado la gran maravillosa persona que eres", time: 91 },
  { text: "creeme cuando te lo digo", time: 97 },
  { text: "no eres nada del como te calificaste ", time: 104 },
  { text: "la noche de ayer", time: 108 },
  { text: "yo diria con seguridad que", time: 144 },
  { text: "eres todo el significado de", time: 148 },
  { text: "una buena persona", time: 153 },
  { text: "en todos los sentidos", time: 158 },
  { text: "y me da mucho gusto ", time: 164 },
  { text: "el haberte conocido", time: 169 },
  { text: "y sin nada mas que decir ", time: 176 },
  { text: "toma awuita, ya no estas sola", time: 183 },
  { text: "estoy para ti", time: 188 },
  { text: "darte lo que siempre has querido.", time: 140 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

