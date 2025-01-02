const correctAnswers = {
    q1: 'b',
    q2: 'c'
};

const explanations = {
    q1: 'Acidic soils have a pH range of 5.0 - 6.5.',
    q2: 'Sodium (Na) is the primary element causing soil salinity.'
};

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const explanationsDiv = document.getElementById('explanations');

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    explanationsDiv.innerHTML = '';

    for (let question in correctAnswers) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswers[question]) {
            score++;
        } else {
            explanationsDiv.innerHTML += `
                <div class="explanation">
                    <strong>Question ${question.slice(1)}:</strong> ${explanations[question]}
                </div>`;
        }
    }

    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}`;
}
