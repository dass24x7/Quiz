const question = [{
    "que": "Which of the following is a markup language?",
    "a": "HTML",
    "b": "CSS",
    "c": "javaScript",
    "d": "PHP",
    "correct": "a"
},
{
    "que": "What year was javascriopt launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b"
},
{
    "que": "What does CSS stand for?",
    "a": "Hypertext Markup Language ",
    "b": "Cascading style sheet",
    "c": "Joson object notation",
    "d": "Helicopters Terminals Motorboats Lamnorginis",
    "correct": "b"
}
]

let i = 0;
let total = question.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll(".option")
const loadQuestion = () => {
    if (i === total) {
        return endQuiz();
    }
    reset();
    const data = question[i]
    quesBox.innerText = `${i + 1}, ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const sunmitQuiz = () => {
    const data = question[i]
    const ans = getAnswer()

    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    i++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the Qizie </h3>
        <h2>${right} / ${total} are correct </h2>
        </div>
    `
}

//inital call
loadQuestion();