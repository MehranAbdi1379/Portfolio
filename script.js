var typeWriterWords = [
  "Software Development",
  "Web Development",
  "ASP.Net Backe-End",
  "Blazor/React Front-End",
];
var selectedWord = typeWriterWords[0];
var arrayWordCounter = 0;
var wordLengthCounter = 0;
var wordLengthCounterBackwards = selectedWord.length;
var speed = 100;

setInterval(typeWriterIntervar, speed);

function typeWriterIntervar() {
  if (wordLengthCounter < selectedWord.length + 5) {
    document.getElementById("home-typeWriter").innerHTML = selectedWord.slice(
      0,
      wordLengthCounter
    );
    wordLengthCounter++;
  } else if (wordLengthCounter == selectedWord.length + 5) {
    if (wordLengthCounterBackwards > 0) {
      document.getElementById("home-typeWriter").innerHTML = selectedWord.slice(
        0,
        wordLengthCounterBackwards
      );
    } else {
      document.getElementById("home-typeWriter").innerHTML = " ";
    }
    wordLengthCounterBackwards--;
  }
  if (wordLengthCounterBackwards == 0 && arrayWordCounter == 3) {
    arrayWordCounter = 0;
    wordLengthCounter = 0;
    selectedWord = typeWriterWords[arrayWordCounter];
    wordLengthCounterBackwards = selectedWord.length;
  } else if (wordLengthCounterBackwards == 0 && arrayWordCounter < 3) {
    arrayWordCounter++;
    wordLengthCounter = 0;
    selectedWord = typeWriterWords[arrayWordCounter];
    wordLengthCounterBackwards = selectedWord.length;
  }
  document.getElementById("home-typeWriter").innerHTML += "|";
}
