// Quiz Questions
const questions = [
    {
        question: "Which of the following is true of a particle in stable equilibrium?",
        options: ["Potential energy is constant", "Potential energy is maximum", "Potential energy is minimim", "Potential energy is zero"],
        correctAnswer: 2,
        explanation: "When a particle at a stable equilibrium is "+
         "slightly displaced, it comes back to its original position. The potential energy is minimum"
    },
    {
        question: "Frictional force is am advantage in which of the following situations ?",
        options: ["Stopping a car suddenly", "Holdimg an object firmly", "Sliding down a slide", "Walking on a slippery floor"],
        correctAnswer: 1,
        explanation: "Friction helps to keep an object in place making it easier to hold on."
    },
    {
        question: "The mode of heat transfer that is electromagnetic in nature is",
        options: ["Conduction", "Evaporation", "Convection", "Radiation"],
        correctAnswer: 3,
        explanation: "Radiation does not require a material medium for its propagation."
    },
    {
        question: "Pascal's law of pressure transmissibility is applicable to which of these devices? ",
        options: ["Hydraulic lift", "Siphom", "Hydrometer", "Hygrometer"],
        correctAnswer: 0,
        explanation: " "
    },
    {
        question: "Mercury is used as a thermometric substance because\u000A" +
        "I. its specific heat capacity is low.\u000A" +
        "II. does not wet glass. \u000A III. It is opaque.",
        options: ["I only", "I amd II only", "II and III only", "I, II and III"],
        correctAnswer: 3,
        explanation: " "
    },
    {
        question: "What is the maximum wavelength in an open organ pipe of length in an open organ pipe of length a cm?",
        options: ["a cm", "2a cm", "3a cm", "4a cm"],
        correctAnswer: 1,
        explanation: "The maximum possible wavelength will correspond to the minimum ppssible frequemcy which is the fumdamental frequncy. "+
        "l=a=wavelenth/2; wavelength=2a"
    },
    {
        question: "The temperature of land rises more quickly than that of the sea because the specific heat of the soil is",
        options: ["more than that of water", "less than that of water", "equal to that of water", "negligible"],
        correctAnswer: 1,
        explanation: " "
    },
    {
        question: "Which of these thermometers uses the volume of a fixed mass of liquid as its thermometric property?",
        options: ["mercury-in glass thermometer", 
        "thermocouple thermometer", "comstant volume of glass thermometer", 
        "resistance thermometer"],
        correctAnswer: 0,
        explanation: " "
    },
    {
        question: "A gun with a muzzle velocity of 500m/s shoots a bullet at a bird 50m away. To hit the target, the gun should should be aimed [g=10m/s\u00B2]",
        options: ["5 cm high above the bird", "10 cm high above the bird", "directly towards", "15 cm high above the level of the bird"],
        correctAnswer: 0,
        explanation: "2023, 30"
    },
    {
        question: "In a simple machine, the variatiom of tbe efficiency with load is",
        options: ["a parabola", "a straight line", "a hyperbola", "logarithmic"],
        correctAnswer: 0,
        explanation: " "
    },
    {
        question: "The force that pushes a body in a liquid upwards is called",
        options: ["upthrust", "weight", "thrust", "viscosity"],
        correctAnswer: 0,
        explanation: " "
    }, 
 {
        question: "A machine has a velocity ratio 8 and efficiency 80%. What is its mechamical advantage?",
        options: ["8", "10", "6.4", "2.5"],
        correctAnswer: 2,
        explanation: "efficiency= M.A\u2044V.R* 100% "
    },
 {
        question: "An object is projected at 30\u2070 to the horizontal with a velocity of 20m/s. What is the maximum height attained? [g=10m/s\u00B2]",
        options: ["10 m", "20 m", "5 m", "2 m"],
        correctAnswer: 2,
        explanation: " "
    },
{
        question: "The mechanical advantage of a good machine is",
        options: ["greater than one", "equal to one", "less than one", "greater than or equal to one"],
        correctAnswer:0 ,
        explanation: " "
    },
{
        question: "Which of thw following has no effect on the sensitivity of a galvanometer?",
        options: ["The number of turns in the coil", "The strength of the magnetic field", "Gaps between the coils", "The area of the coil"],
        correctAnswer: 2,
        explanation: " "
    }, 
{
        question: "Which of the following are complementary colours?",
        options: ["Cyan and Yellow", "Green and Yellow", "Blue and Yellow", "Green and Blue"],
        correctAnswer: 2,
        explanation: "Complementary colours, when combined, produced white "
    },
{
        question: "Tyres are threaded to",
        options: ["Increase weight tyres", "Increase its longetivity", "Increase friction", "Look good"],
        correctAnswer: 2,
        explanation: " "
    },
{
        question: "The mass of an object discharged at the cathode is 15g. If the current passed through is 3A, the time is [e.c.e=3.3 \u00D7 10\u207B \u2077 kgC\u207B \u00B9]",
        options: ["996 min", "225 min", "253 min", "455 min"],
        correctAnswer: 2,
        explanation: "m=zi"
},
{
    question: "The use of lenses is not applicable in the",
    options: ["Projector", "Human eye", "Periscope", "Telescope"],
    correctAnswer: 2,
    explanation: "Periscope is made of plane mirror"
},
{
    question:"Calculate the time required to electroplate a substance of area 300 cm\u00B2 with a layer of copper 0.6mm thick, "+
    "if a steady current of 2 A is maintained. Assuming the density of copper is 0.0088 kg/cm\u00B2 and the mass of copper liberated per coulomb is 3.3 \u00D7 10\u002D \u2077 kg/C.",
    options: ["6.6 hr", "10.25 hr", "66.67 hr", "0.67 hr"],
    correctAnswer: 2,
    explanation: "density= mass/volume, m=zit"
}, 
{
    question:"The accomodation of the eye is ",
    options: ["produced by movement of the retina", "due to change in the size of the pupil", "produced by the action of the cililary muscles", "as a result of unbalanced diet"],
    correctAnswer: 2,
    explanation: ""
},
{
    question:"Which of the following electrical instruments or machines does not rely on the magmetic effect of current for its working?",
    options: ["Carbon microphone", "Telephone receiver", "Moving-coil galvanometer", "Dynamo"],
    correctAnswer: 0,
    explanation: " Carbon microphone is a type of microphone or transducer that converts sound energy to electrical audio signals. It uses a carbon granules or particles."
}, 
{
    question:"A vibrating string has a tension of 40N and produces a note of 200Hz whe plucked in the middle. "+
    "The length of the spring is unaltered and tension is increased by 120N, then the new frequency becomes",
    options: ["1600Hz", "25Hz", "200Hz", "400Hz"],
    correctAnswer: 3,
    explanation: ""
}, 
{
    question:"The specific latent heat of steam is 2300J/g and tje specific heat capacity of water is 4.2J/gk. When 2g of steam at 100\u2070C condenses to 40\u2070C, the heat given up is",
    options: ["5104J", "4936J", "4636J", "4684J"],
    correctAnswer:0 ,
    explanation: ""
},
{
    question:"The wave theory of light cannot be used to explain photoelectricity because",
    options: ["light waves do not carry energy", "there is a threshold wavelength for electron emmissiom", "wavelength of light wave is too short", "particles cannot be emmitted by waves"],
    correctAnswer: 3,
    explanation: ""
}, 
{
    question:"Which of the following cannot be used to reduce the surface tension of a liquid? ",
    options: ["Addition of detergents or soap", "Addition of oil", "Addition of alcohol", "Reducing temperature of the liquid"],
    correctAnswer: 3,
    explanation: "Surface tension can be reduced by adding detergent, oil and alcohol. Also, by increasing the temperature of the liquid. "
}, 
{
    question:"A plane inclined at an angle of 30\u2070 to the horizontal has an efficiency of 50%. The force parallel to the plane required to push a load of 500N up the plane is",
    options: ["500N", "1000N", "250N", "333.33N"],
    correctAnswer: 0,
    explanation: "2022,9"
},
{
    question:"A man of mass 77kg stands on a sprimg-weighing machine inside a lift. When the lift starts to ascend, its accelaration is 2m/s\u00B2. What will be the reading on the machine?",
    options: ["770N", "924N", "154N", "616N"],
    correctAnswer: 1,
    explanation: "R=mg+ma"
}, 
{
    question:"An image which can be formed on a screen is said to be",
    options: ["Virtual", "Blurred", "Real", "Erect"],
    correctAnswer: 2,
    explanation: ""
}, 
{
    question: "The product PV where P is pressure and V is volume has the same unit as",
    options: ["power", "work", "accelaration","impulse"],
    correctAnswer: 1,
    explanation:""
}
];

// Quiz State
let currentQuestionIndex = 0;
let timeLeft = 1800;
let timerId;
let userAnswers = new Array(questions.length).fill(null);
let randomizedQuestions = [];

// DOM Elements
const elements = {
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsPanel: document.getElementById('options-panel'),
    explanationPanel: document.getElementById('explanation-panel'),
    explanationContent: document.getElementById('explanation-content'),
    timer: document.getElementById('time'),
    questionButtons: document.getElementById('question-buttons'),
    quizForm: document.getElementById('quiz-form')
};

// Initialize Quiz
function init() {
    randomizeQuestions();
    createQuestionButtons();
    showQuestion(0);
    startTimer();
    window.submitQuiz = submitQuiz;
}

function randomizeQuestions() {
    randomizedQuestions = [...questions];
    shuffleArray(randomizedQuestions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createQuestionButtons() {
    elements.questionButtons.innerHTML = '';
    randomizedQuestions.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'question-btn';
        button.textContent = index + 1;
        button.addEventListener('click', () => showQuestion(index));
        elements.questionButtons.appendChild(button);
    });
}

function showQuestion(index) {
    if (index < 0 || index >= randomizedQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = randomizedQuestions[index];
    
    // Update question display
    elements.questionNumber.textContent = `Question ${index + 1}`;
    elements.questionText.textContent = question.question;
    
    // Create radio button options
    elements.optionsPanel.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
        const optionId = `q${index}-opt${optionIndex}`;
        
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';
        
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = optionId;
        radioInput.name = 'quiz-option';
        radioInput.value = optionIndex;
        if (userAnswers[index] === optionIndex) radioInput.checked = true;
        
        const checkmark = document.createElement('span');
        checkmark.className = 'radio-checkmark';
        
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = optionId;
        optionLabel.textContent = option;
        
        optionItem.appendChild(radioInput);
        optionItem.appendChild(checkmark);
        optionItem.appendChild(optionLabel);
        
        radioInput.addEventListener('change', () => {
            userAnswers[index] = optionIndex;
            updateNavigationButtons();
        });
        
        elements.optionsPanel.appendChild(optionItem);
    });
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const buttons = document.querySelectorAll('.question-btn');
    buttons.forEach((button, index) => {
        // Reset all buttons
        button.classList.remove('active', 'answered');
        button.innerHTML = index + 1; // Reset content
        
        // Mark answered questions
        if (userAnswers[index] !== null) {
            button.classList.add('answered');
            button.innerHTML = `${index + 1} <span class="check-icon">✓</span>`;
        }
        
        // Highlight current question
        if (index === currentQuestionIndex) {
            button.classList.add('active');
        }
    });
}

function startTimer() {
    updateTimerDisplay();
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) submitQuiz();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    elements.timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function submitQuiz() {
    clearInterval(timerId);
    const score = calculateScore();
    showResults(score);
    saveResults(score);
    elements.explanationPanel.style.display = 'block';
}

function calculateScore() {
    return randomizedQuestions.reduce((score, question, index) => {
        return score + (userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
}

function showResults(score) {
    let resultsHTML = `<h3>Your Score: ${score}/${randomizedQuestions.length}</h3>`;
    
    randomizedQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correctAnswer;
        const userAnswer = userAnswers[index] !== null ? 
            question.options[userAnswers[index]] : 'Not answered';
        
        resultsHTML += `
            <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p>Your answer: ${userAnswer}</p>
                <p>Correct answer: ${question.options[question.correctAnswer]}</p>
                <p>Explanation: ${question.explanation}</p>
                <hr>
            </div>
        `;
    });
    
    elements.explanationContent.innerHTML = resultsHTML;
}

function saveResults(score) {
    const results = {
        date: new Date().toLocaleString(),
        score: score,
        totalQuestions: randomizedQuestions.length,
        details: randomizedQuestions.map((question, index) => ({
            question: question.question,
            userAnswer: userAnswers[index],
            correctAnswer: question.correctAnswer,
            isCorrect: userAnswers[index] === question.correctAnswer
        }))
    };
    localStorage.setItem('quizResults', JSON.stringify(results));
}

// Start the quiz when page loads
document.addEventListener('DOMContentLoaded', init);