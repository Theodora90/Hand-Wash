var sounds = new Array();
sounds[0] = "./Assets/bob.mp3";
sounds[1] = "./Assets/Cadmium.mp3";
sounds[2] = "./Assets/scott.mp3";


function getRandomSounds() {
  var randomNum = Math.floor(Math.random() * sounds.length);
  document.getElementById("myaudio").src = sounds[randomNum];
  sound.play();
}


var i = 0;
function move() {
  if (i == 0) {
    i = 5;
    var now = new Date().getTime();
    
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 500);
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 100;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width +  "secs";
      }
    }
  }
} 

var btn = document.getElementById("audio"); 
btn.addEventListener("click", getRandomSounds);
btn.addEventListener("click", move);


