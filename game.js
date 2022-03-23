
var audio = new Audio('soundtrack.mp3');


var btn = document.querySelector('input');
var txt = document.querySelector('p');
 

btn.addEventListener('click', updateBtn);



function updateBtn() {
  if (btn.value === 'Lancez le jeu') {
    btn.value = 'Stop!!!';
    //txt.textContent = "Tu t'es fait Rickroller!";
    txt.innerHTML = "Tu t'es fait Rickroller!" + "<br>" + "<img src=\"loading.gif\"/>";
    audio.play();

  } else {
    btn.value = 'Lancez le jeu';
    txt.textContent = 'Le meilleur jeu en JavaScript !';
  }
}


