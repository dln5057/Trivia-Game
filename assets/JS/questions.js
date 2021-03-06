var questions = [{
    question: "In 1990 two major league greats made baseball history by becoming the first father-son duo to hit back-to-back homers in an MLB game. ",
    choices: ["Bob and Barry Bonds", "Ken Griffey Sr. and Ken Griffey Jr.", "Mark and Larry Mcguire", "Sammy Sosa Jr. and Sammy Sosa Sr."],
    correctAnswer: 1
}, {
    question: "Who did His Airness, AKA Michael Jordan originally want to play for in college?",
    choices: ["NC State", "Kentucky", "UCLA", "Michigan"],
    correctAnswer: 2
}, {
    question: "Which retired baseball player was nicknamed The Iron Bird?",
    choices: ["Cal Ripken Jr", "Derek Jeter", "Mike Piazza", "Pedro Martinez"],
    correctAnswer: 0
}, {
    question: "Who is the NHL hockey coach to win the most Stanley Cups?",
    choices: ["Mike Babcock", "Jacques Demers ", "Pat Quinn", "Scotty Bowman"],
    correctAnswer: 3
}, {
    question: "Whose silhouette serves as the modern day logo of the NBA?",
    choices: ["Jerry West", "Michael Jordan", "Larry Bird", "Bill Cousy"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var gameOver = false;

$(document).ready(function () {

    // Display the first question
    displayQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!gameOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;

                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayQuestion();

                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    gameOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which will ask 'Play Again?'
            gameOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayQuestion();
            hideScore();
        }
    });

});

function displayAnswer(){


}

// This displays the current question and choices
function displayQuestion() {

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;


    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".container > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
