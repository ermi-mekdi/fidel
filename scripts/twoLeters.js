import { twoLwords } from "../data/twoLwords";

let twoLwordsHTML = '';
    
    twoLwords.forEach((twoLword) => {
      twoLwordsHTML += `
      <button 
        soundFile= ${twoLword.sound}
        onclick="appendToDisplay('${twoLword.name}')">
        ${twoLword.name}
      </button>
      `;
    });

    document.querySelector('.js-two-leters-word').innerHTML = twoLwordsHTML;
    console.log(twoLwordsHTML);

          /*
    const display = document.getElementById("diplay");
    function goed(){
      if (display == '1በ'){
        alert(goood);
      }
    }
      */


    function playSound(soundFile) {
      const audio = document.getElementById("myAudio");
      audio.src = soundFile; // Set the source of the audio element
      audio.play(); // Play the audio
    };
    
      let display = document.getElementById("display");

      function appendToDisplay(input){
        display.value = display.value + input;
        
      };
    function clearDisplay(){
        display.value =  " ";
      };
  
      console.log(display.value);