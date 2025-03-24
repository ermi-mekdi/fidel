

    function playSee(soundFile, src, alt, eg) {
      const audio = document.getElementById("myAudio");      
      audio.src = soundFile; // Set the source of the audio element
      audio.play(); // Play the audio        

            // Create a new img element
            var imgElement = document.createElement('img');
            // Set the src attribute of the img element
            imgElement.src = src;
            // Optionally, set other attributes like alt, width, height, etc.
            imgElement.alt = alt;
            imgElement.width = 200; // Set the width to 300 pixels
            //imgElement.height = 150; // Set the height to 200 pixels
            // Append the img element to the container
            document.getElementById('card-img').appendChild(imgElement);        
            
            var newElement = document.createElement('div');
            // Set the content of the new element
            newElement.textContent = eg;
            // Append the new element to the container
            document.getElementById('card-eg').appendChild(newElement);

            // Remove the img element after 2 seconds
            setTimeout(function() {
                imgElement.remove();
                newElement.remove();
            }, 3000);
          
    };
 

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
