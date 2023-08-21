//TypeWriter Code
var typeWriterWords = [
  "Software Development",
  "Web Development",
  "ASP.Net Back-End",
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




//Icon Color Change Code
const serviceBoxes = document.getElementsByClassName('service')

for (let i = 0; i < serviceBoxes.length; i++) {
  const box = serviceBoxes[i]
  console.log(box)
  box.addEventListener('mouseenter', () => {
    const icon = box.querySelector('.material-symbols-outlined')
    icon.style.border = '4px solid lightblue'
    icon.style.backgroundColor = 'blue'
    icon.style.color = 'white'
  })
}

for (let i = 0; i < serviceBoxes.length; i++) {
  const box = serviceBoxes[i]
  box.addEventListener('mouseleave', () => {
    const icon = box.querySelector('.material-symbols-outlined')
    icon.style.border = '4px solid blue'
    icon.style.backgroundColor = 'white'
    icon.style.color = 'black'
  })
}



//Work Box Size Change Code
const workCard = document.getElementsByClassName('work-card')

for (let i = 0; i < workCard.length; i++) {
  const box = workCard[i]
  console.log(box)
  box.addEventListener('mouseenter', () => {
    box.style.width = '28vw'
  })
}

for (let i = 0; i < workCard.length; i++) {
  const box = workCard[i]
  box.addEventListener('mouseleave', () => {
    box.style.width = '25vw'
  })
}