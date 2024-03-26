

// Sample questions (can be fetched from API)
const questions = [
    {
        question: "What is the best club or chapter in VIT?",
        options: ["GDSC", "Codechef", "ACM", "CSI"],
        answer: "ACM"
    },
    {
        question: "What is full form of ACM?",
        options: ["American Computing Machinery", "American Computer Members", "America Mompute Machine", "America Computer Members"],
        answer: "American Computing Machinery"
    },
    // Add more questions here...
];

// Display questions
const quizContainer = document.getElementById('quiz');
0
questions.forEach((question, index) => {
    quizContainer.innerHTML += `
        <div class="question">

            <p>${index + 1}. ${question.question}</p>
            <ul>
            <div class="button-selector">
                ${question.options.map(option => `<li><button class="button-51"><input type="radio" name="question${index}" value="${option}">${option}</button></li>`).join('')}
            </div>
            </ul>
        </div>
    `;
});
// Timer
const startingMinutes = 2; // Adjust as needed
let time = startingMinutes * 60;

const countdownElement = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        // Submit quiz automatically when time is up
        submitQuiz();
    }
}

// Submit Quiz
function submitQuiz() {
    // Calculate score
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                score++;
            }
        }
    });

    // Display score
    alert(`Your score: ${score}/${questions.length}`);

    // Redirect to login page
    window.location.href = "login.html";
}
