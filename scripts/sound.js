 function playSound(soundFile) {
  const audio = document.getElementById("myAudio");
  audio.src = soundFile; // Set the source of the audio element
  audio.play(); // Play the audio
};