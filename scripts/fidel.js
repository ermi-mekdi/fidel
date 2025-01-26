

let gLetersHTML = '';

gLeters.forEach((gLeter) => {
  gLetersHTML += `
  <button id="${gLeter.id}" onclick="playSound('${gLeter.sound}')" data-button ="button" >${gLeter.name}</button>
  `;
});

document.querySelector('.js-fidelat-geez').innerHTML = gLetersHTML;
//console.log(gLetersHTML);

function playSound(soundFile) {
  const audio = document.getElementById("myAudio");
  audio.src = soundFile; // Set the source of the audio element
  audio.play(); // Play the audio
};
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}
// Set a new random gradient background color every minute (60000 milliseconds)
setInterval(setRandomGradient, 10000);

// Set a new random gradient background color when the page loads
window.onload = setRandomGradient;
