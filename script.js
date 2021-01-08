const quizData = [
    [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "xy",
        b: "Donald Trump",
        c: " hh",
        d: "xz",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What year JavaScript launched?",
        a: "1996",
        b: "x",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
],
[
    {
        question: "httsgc",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "thdg",
        a: "xy",
        b: "Donald Trump",
        c: " hh",
        d: "xz",
        correct: "b",
    },
    {
        question: "gsfghjk",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "sdfghjmn",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "dvfcbvgn",
        a: "1996",
        b: "x",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
],

];

const quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", OnSubmit);

const structure = quiz.innerHTML;

var currentQuesstion = 0;
var currentQuizArray = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuizArray][currentQuesstion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
function changequiz()
{
    currentQuizArray++;
    currentQuesstion=0;
    quiz.innerHTML=structure;
    ReFindElemnts();
    loadQuiz();
    
}

function ReFindElemnts(){
    answerEls = document.querySelectorAll(".answer");
    questionEl = document.getElementById("question");
    a_text = document.getElementById("a_text");
    b_text = document.getElementById("b_text");
    c_text = document.getElementById("c_text");
    d_text = document.getElementById("d_text");
    submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", OnSubmit);
}

function OnSubmit(){
    {
        // check to see the answer
        const answer = getSelected();
    
        if (answer) {
            
    
            if (answer === quizData[currentQuizArray][currentQuesstion].correct) {
                score++;
            }
    
            currentQuesstion++;
            if (currentQuesstion < quizData[currentQuizArray].length) {
                loadQuiz();
            } 
            else 
            {
                submitBtn.removeEventListener("click", OnSubmit);

                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData[currentQuizArray].length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                    <button onclick="changequiz()">Next Quiz</button>
                `;
            }
        }
    }
}


