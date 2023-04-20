var questions = [
    new Question("What is MVC?" , ["Language", "Library", "Framework", "Application"], "Framework"),
    new Question("What is the smallest unit of data in a computer?" , ["Gigabyte", "Bit", "Byte", "Terabyte"], "Bit"),
    new Question("What is the full form of PROM ?" , ["Program read-only memory", "Primary read-only memory", "Programmable read-only memory", "Program read-output memory "], "Programmable read-only memory"),
    new Question("What is URL ?" , ["Undistributed Resource Locator", "Unified Resource Locator", "Uniform Region Locator", "Uniform Resource Locator"], "Uniform Resource Locator"),
]

var quiz = new Quiz(questions);

function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++ ) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.addEventListener("click",function() {
        quiz.guess(guess);
        populate();
    });
}

function showProgress() {
    var currentQuestion = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestion + " of " + quiz.questions.length
}

function showScores() {
    var elem = "<h1>Result</h1>"
    elem += "<h2>Score :" + quiz.score +"</h2>";
    document.getElementById("quiz").innerHTML = elem;
}
populate();