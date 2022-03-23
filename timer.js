
var btn = document.querySelector('input');
var txt = document.querySelector('p');
 

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Lancez le jeu') {
    btn.value = 'Stop!!!';
    //txt.textContent = "Tu t'es fait Rickroller!";
    txt.innerHTML = "Tu t'es fait Rickroller!" + "<br>" + "<img src=\"loading.gif\"/>";
    myAudio.src = "soundtrack.mp3"

  } else {
    btn.value = 'Lancez le jeu';
    txt.textContent = 'Le meilleur jeu en JavaScript !';
  }
}