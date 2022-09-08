let questions = [
    {
        question: "Which of these is NOT an assignment operator?",
        choices: ["a.+=" , "b.-=", "c.=", "d.||"],
        answer: "d.||"
    },
    {
        question: "Javascript is considered to be the _______ of a webpage?",
        choices: ["a.the brain" , "b.the skeleton", "c.the clothes", "d.the skin"],
        answer: "a.the brain"
    },
    {
        question: "Which is not a common data-type?",
        choices: ["a.strings" , "b.alerts", "c.numbers", "d.booleans"],
        answer: "b.alerts"
    },
    {
        question: "What is the correct syntax for linking an HTML document to your Javascript?",
        choices: ["a.<java>" , "b.<style>", "c.<script>", "d.<script.css>"],
        answer: "c.<script>"
    },
    {
        question: "What is the correct syntax for calling a function?",
        choices: ["a.hey function" , "b.console.log()", "c.function()", "d.funtion = hello world"],
        answer: "c.function()"
    }

];
//to link questions and answers to the html
let allAnswerChoices = document.querySelector(".answerchoices")
let buttonsDiv = document.getElementById("buttonsDiv");
let answers = document.getElementById("answers");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex]

// function that actually renders qustions onto the page.
function showQuestions(){
    console.log(currentQuestion)
    answers.innerHTML = ""
    const questionHeader = document.createElement("h3")
    questionHeader.textContent = currentQuestion.question
    answers.appendChild(questionHeader)
    
    
    for (let index = 0; index < currentQuestion.choices.length; index++) {
        const choiceEl = document.createElement("button")
        choiceEl.setAttribute("class", "btn")
        choiceEl.setAttribute("id", index)
        choiceEl.onclick = questionCarousel
        choiceEl.value = currentQuestion.choices[index]
        choiceEl.textContent = currentQuestion.choices[index]
        answers.appendChild(choiceEl)
        console.log(currentQuestion.choices[index], choiceEl.value)
    }
}

function questionCarousel(event) {
    console.log(event.target)
    if(event.target.matches ("button"))
    if (currentQuestion.answer === event.target.value) {
        console.log("correct answer");   
    } else{
        
        console.log("wrong answer");
    }
    currentQuestionIndex++;
    currentQuestion = questions[currentQuestionIndex]
    
    showQuestions()
    console.log(currentQuestionIndex)
    
}



//To start time
let timer = document.getElementById("timer")
let startButton = document.getElementById("startButton")
startButton.addEventListener("click", beginQuiz)


let startTime = 100;
function beginQuiz(){
    showQuestions()   //starts the function that shows the questions
    appear.style.display="block";
    disappear.style.display="none";
    let timeLeft = startTime;
    let timeInterval = setInterval(function (){
        timeLeft--;
        timer.textContent = timeLeft + " seconds until quiz is over";
        if(timeLeft === 0){
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
}
function displayMessage(){
    console.log("hello world")
}


// buttonsDiv.textContent=questions[0].question;
// A.textContent = questions[0].choices[0];
// B.textContent = questions[0].choices[1];
// C.textContent = questions[0].choices[2];
// D.textContent = questions[0].choices[3];




// /* GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score*/