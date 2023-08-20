var typeWriterWords = ['Software Development', 'Web Development', 'ASP.Net Backe-End', 'Blazor/React Front-End']
var arrayWordCounter = 0;
var wordLengthCounter = 0;
var wordLengthCounterBackwards = typeWriterWords[0].length;
var speed = 100;

setInterval(typeWriterIntervar, speed);

function typeWriterIntervar() {
    if (i < typeWriterWords[0]) {
        document.getElementById('home-typeWriter').innerHTML += txt.charAt(i);
        i++;
    }
    else {
        if (j > 1) {
            document.getElementById('home-typeWriter').innerHTML = document.getElementById('home-typeWriter').innerHTML.slice(0, j);
        }
        else {
            document.getElementById('home-typeWriter').innerHTML = ' '
        }
        j--;
    }
    if (j == 0) {
        i = 0;
        j = txt.length;
    }
}



