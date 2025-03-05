function playSound(soundFile) {
  const audio = document.getElementById("myAudio");
  audio.src = soundFile; // Set the source of the audio element
  audio.play(); // Play the audio
}
const answers = {
  1: 1,  // Correct answer for question 1 is second button
  2: 1,  // Correct answer for question 2 is first button
  3: 1,   // Correct answer for question 3 is first button
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1
};

let currentQuestion = 1;
let score = 0;
let totalQuestions = Object.keys(answers).length;
let sex = "boy";
// Show the first question initially
document.getElementById('question0').style.display = 'block';


function m(){
  boy = document.getElementById('boy');
  boy.classList =('icon');
  document.getElementById('girl').style.display= 'none'
  sex = "boy";  
  playSound('./soundFile/ወዲ.mp3');
  document.getElementById('ወጓ').style.display = 'none';
  setTimeout(nextQuestion, 1500);
};
function f(){
  girl = document.getElementById('girl');
  girl.classList =('icon');
  document.getElementById('boy').style.display= 'none'
  sex = girl;
  playSound('./soundFile/ጓል.mp3');
  document.getElementById('ወጓ').style.display = 'none';
  setTimeout(nextQuestion, 1500);
};

function checkAnswer(questionNumber, selectedValue) {
  const correctAnswer = answers[questionNumber];
  const resultDiv = document.getElementById(`result${questionNumber}`);
  
  if (selectedValue === correctAnswer) {
      score++;
      resultDiv.classList.add("correct");
            if(sex === "boy"){
              resultDiv.textContent = " ተዓወት!";
              playSound('./soundFile/ተዓወት.mp3');
            }else{
              resultDiv.textContent = " ተዓወቲ !"; 
              playSound('./soundFile/ንፍቲ.mp3');
            }
            setTimeout(nextQuestion, 1000); 
  } else {
      resultDiv.textContent = " ጌጋ！";
      resultDiv.classList.add("incorrect");
      playSound('./soundFile/ጌጋ.mp3');
      setTimeout(nextQuestion, 1000);
  }
  document.getElementById('score').textContent =` ${score} / ${currentQuestion -1}`;
}

function nextQuestion() {
  document.getElementById(`question${currentQuestion}`).style.display = 'none';
  currentQuestion++;

  if (currentQuestion <= totalQuestions) {
      document.getElementById(`question${currentQuestion}`).style.display = 'block';
  } else {
      showScore();
  }
}

function showScore() {
  // Display the score
  const scoreDiv = document.getElementById('score');
  scoreDiv.textContent = ` Score ${score} / ${totalQuestions}!`;

  // Show the restart button
  document.getElementById('restart-btn').style.display = 'block';
  document.getElementById('nextGame').style.display = 'block';
}

function restartQuiz() {
  // Reset variables
  currentQuestion = 1;
  score = 0;

  // Hide score and restart button
  document.getElementById('score').textContent = '';
  document.getElementById('restart-btn').style.display = 'none';

  // Reset feedback and show the first question again
  for (let i = 1; i <= totalQuestions; i++) {
      document.getElementById(`result${i}`).textContent = '';
      document.getElementById(`result${i}`).classList.remove("correct", "incorrect");
      document.getElementById(`question${i}`).style.display = 'none';
  }

  // Show the first question
  document.getElementById('question1').style.display = 'block';
}
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
  setInterval(setRandomGradient, 5000);

  // Set a new random gradient background color when the page loads
  window.onload = setRandomGradient;
