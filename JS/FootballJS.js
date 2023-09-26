let questions = [
    {
        question: "ما هو الفريق الذي فاز بكأس العالم لعام 2018؟",
        choices: ["فرنسا", "كرواتيا", "بلجيكا"],
        correctAnswer: "فرنسا"
    },
    {
        question: "من هو أكثر هداف في تاريخ كأس العالم لكرة القدم؟",
        choices: ["ميروسلاف كلوزه", "رونالدو", "بيليه"],
        correctAnswer: "ميروسلاف كلوزه"
    },
    {
        question: "ما هو اسم الاستاد الذي يُعتبر أكبر استاد كرة قدم في العالم من حيث السعة؟",
        choices: ["سانتياغو برنابيو", "ملعب كامب نو", "ملعب ماراكانا"],
        correctAnswer: "ملعب ماراكانا"
    },
    {
        question: "ما هو الفريق الذي فاز بدوري أبطال أوروبا لعام 2021؟",
        choices: ["برشلونه", "تشيلسي", "الاسماعيلي"],
        correctAnswer: "تشيلسي"
    },
    {
        question: "من هو اللاعب الذي يُعتبر أفضل حارس مرمى في تاريخ كرة القدم؟",
        choices: ["إيكر كاسياس", "جيانلويجي بوفون", "ليف ياشين"],
        correctAnswer: "ليف ياشين"
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    }, {
        question: "",
        choices: "",
        correctAnswer: ""
    },
];
let btnSpeacker = document.getElementById("menuBtnSpeacker");
let questionElement = document.getElementById("question");
let choicesElement = document.getElementById("choices");
let playerRete = document.getElementById("playerRete");
let audioBox = document.getElementById("audioBox");
let newSign2 = document.getElementById("newSign2");
let newSign = document.getElementById("newSign");
let currentQuestion = 0;
let correctAnswers = 0;
function showQuestion() {
    let question = questions[currentQuestion];
    questionElement.textContent = `السؤال: ${question.question}`;
    choicesElement.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
        let button = document.createElement("button");
        button.textContent = question.choices[i];
        button.addEventListener("click", checkAnswer);
        choicesElement.appendChild(button);
    };
};
function checkAnswer(event) {
    let selectedChoice = event.target.textContent;
    let question = questions[currentQuestion];
    if (selectedChoice === question.correctAnswer) {
        correctAnswers++;
        playerRete.innerHTML = `<i class="fa-regular fa-thumbs-up icons"></i> جدع`;
        audioBox.innerHTML = `<audio src="Audio/good.mp3" autoplay></audio>`;
    } else {
        playerRete.innerHTML = `<i class="fa-regular fa-thumbs-down icons"></i> غلط`;
        audioBox.innerHTML = `<audio src="Audio/Bad.mp3" autoplay></audio>`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = `انتهينا! الأسئلة المجابة: ${correctAnswers} من ${questions.length}`;
        choicesElement.innerHTML = "";
        if (correctAnswers === questions.length) {
            playerRete.innerHTML = `<i class="fa-solid fa-heart heart"></i> الله اكبر عليك`;
            audioBox.innerHTML = `<audio src="Audio/All Bad.mp3" autoplay></audio>`;
        } else {
            audioBox.innerHTML = `<audio src="Audio/All Good.mp3" autoplay></audio>`;
            playerRete.innerHTML = `<i class="fa-regular fa-face-angry heart"></i> أنا وسط شويه معاتية بقي`
        };
    };
};
showQuestion();
let fullscreenButton = document.getElementById("fullscreen-button");
let fullScreenBox = document.getElementById("fullScreenBox");
let mainBox = document.getElementById("main");
fullscreenButton.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        fullScreenBox.style.display = "none";
        mainBox.style.display = "flex";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});
let menuBtn = document.getElementById("menuBtn");
menuBtn.onclick = function () {
    window.location = "index.html";
}