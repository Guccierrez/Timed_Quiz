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
        answer: "b. alerts"
    },
    {
        question: "What is the correct syntax for linking an HTML document to your Javascript?",
        choices: ["a.<java>" , "b.<style>", "c.<script>", "d.<script.css>"],
        answer: "c.<script> "
    },
    {
        question: "What is the correct syntax for calling a function?",
        choices: ["a.hey function" , "b.console.log()", "c.Function()", "d.funtion = hello world"],
        answer: "c. function()"
    }

];
//To start time
let startButton = document.getElementById("startButton")
startButton.addEventListener("click", BeginQuiz)


let startTime = 5;

function BeginQuiz(){
 let timeLeft = startTime;
 let timeInterval = setInterval(function (){
    timeLeft--;
    startButton.textContent = startTime + " seconds until quiz is over";
    if(timeLeft === 0){
        clearInterval(timeInterval);
        displayMessage();
    }
 },1000);
}
function displayMessage(){
    console.log("hello world")
}








/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score*/