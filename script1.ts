const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timerDuration = 30; // 30 seconds

function startQuiz() {
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const optionElem = document.createElement('div');
        optionElem.textContent = option;
        optionElem.className = 'option';
        optionElem.addEventListener('click', () => selectOption(optionElem));
        optionsContainer.appendChild(optionElem);
    });
}

function selectOption(optionElem) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    optionElem.classList.add('selected');
}

function submitAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
        const answer = selectedOption.textContent;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
            document.getElementById('feedback').textContent = 'Correct!';
        } else {
            document.getElementById('feedback').textContent = 'Wrong!';
        }
        document.getElementById('feedback').classList.remove('hidden');
        setTimeout(() => document.getElementById('feedback').classList.add('hidden'), 1000);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(displayQuestion, 1000);
        } else {
            setTimeout(() => alert(`Quiz over! Your score is ${score}/${questions.length}`), 1000);
        }
    } else {
        alert('Please select an option!');
    }
}

function startTimer() {
    let timeLeft = timerDuration;
    document.getElementById('timerValue').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timerValue').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswer(); // Auto-submit when time runs out
        }
    }, 1000);
}

document.getElementById('submitBtn').addEventListener('click', submitAnswer);

startQuiz();
