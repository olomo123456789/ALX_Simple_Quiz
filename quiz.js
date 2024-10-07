function checkAnswer() {
    // Step 1: Define the correct answer
    let correctAnswer = "4";

    // Step 2: Retrieve the user's answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Step 3: Compare userAnswer with correctAnswer
    let feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
