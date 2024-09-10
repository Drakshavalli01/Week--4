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
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1905", "1912", "1915", "1920"],
        answer: "1912"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "In which city is the Eiffel Tower located?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Portuguese"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timerDuration = 110;

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
