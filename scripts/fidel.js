





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
