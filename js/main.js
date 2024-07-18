import * as quiz from "./Quiz.js";

$('#formCover').on('submit', async function(e){
    e.preventDefault();
    if ($('#questionsNumber').val() <= 0){
        return;
    }
    quiz.setQuestionsNumber($('#questionsNumber').val());
    quiz.setCategory($('#category').val());
    quiz.setDifficulty($('#difficulty').val());
    let data = await quiz.getQuestions();
    console.log(quiz.questions);
    $('.form-container').addClass('d-none');
    $('.question-container').removeClass('d-none');
    quiz.nextQuestion();
})

$('#tryAgainBtn').on('click', function(){
    $('.score-container').addClass('d-none');
    $('.form-container').removeClass('d-none')
})