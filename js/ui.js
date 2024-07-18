import * as quiz from "./Quiz.js";

function displayQuestion(question, score){
    let box = `
    <div class="bg-white p-4 rounded-3 animate__bounceIn" id="question">
            <div class="d-flex justify-content-between align-items-center">
                <p class="question-category">${question.category}</p>
                <p class="question-number text-end">${question.questionNumber + 1} of ${question.totalNumber}</p>
            </div>

            <h4 class="text-center fw-bolder mt-3 mb-5">${question.question}</h4>
            <div class="container">
                <div class="row g-2">      
    `
    for(let i=0; i<question.answers.length; i++){
        box += `<div class="col-md-6 col-12"><button class="btn btn-outline-primary fw-bold rounded-pill w-100 h-100">${question.answers[i]}</button></div>`
    }
    box+=`
    </div>
            </div>

            <h4 class="text-center mt-4">Score: ${score}</h4>
        </div>
    `
    console.log(question);
    $('.question-container').html(box);
    $('#question button').on('click', (e)=>{
        let btn = $(e.target);
        if (btn.html() == question.correct_answer){
            btn.addClass('bg-success border-success text-white animate__animated animate__pulse');
            quiz.incrementScore();
        }
        else{
            btn.addClass('bg-danger border-danger text-white animate__animated animate__shakeX');
        }
        $('#question button').addClass('disabled')
        setTimeout(() => quiz.nextQuestion(), 1300);
    })
}

function showResult(score, total){
    $('#finalScore').html(`${score} of ${total}`);
    $('.score-container').removeClass('d-none');
    $('.question-container').addClass('d-none');
}


export {
    displayQuestion,
    showResult
}