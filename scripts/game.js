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

// Show the first question initially
document.getElementById('question1').style.display = 'block';

function checkAnswer(questionNumber, selectedValue) {
  const correctAnswer = answers[questionNumber];
  const resultDiv = document.getElementById(`result${questionNumber}`);

  // Check if the selected answer is correct
  if (selectedValue === correctAnswer) {
      score++;
      resultDiv.textContent = " ተዓወት/ቲ!";
      resultDiv.classList.add("correct");
      setTimeout(nextQuestion, 1000); // Move to next question after 1 second delay
  } else {
      resultDiv.textContent = "ጌጋ！እንደገና ፈትን/ኒ";
      resultDiv.classList.add("incorrect");
  }
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
  scoreDiv.textContent = `  ${score}  ${totalQuestions}!`;

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

