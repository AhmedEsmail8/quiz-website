import * as ui from "./ui.js";

let questionsNumber;
let category;
let difficulty;
let questions = []
let idx = -1;
let score = 0;


function getApi(){
    return `https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}&difficulty=${difficulty}`;
}

async function getQuestions(){
    console.log(getApi());
    const data = await fetch(getApi());
    const result = await data.json();
    questions = result.results;
    return result;
}

function nextQuestion(){
    idx++;
    if (idx < questions.length){
        let question = questions[idx];
        question.questionNumber = idx;
        question.totalNumber = +questionsNumber;
        question.answers = [...question.incorrect_answers, question.correct_answer];
        question.answers.sort();
        ui.displayQuestion(question, score);
    }
    else{
        ui.showResult(score, questionsNumber);
        idx = -1;
        score = 0;
    }
}

function setQuestionsNumber(value){
    questionsNumber = value;
}

function setCategory(value){
    category = value;
}

function setDifficulty(value){
    difficulty = value;
}

function incrementScore(){
    score++;
}

export {
    questionsNumber,
    category,
    difficulty,
    questions,
    getQuestions,
    nextQuestion,
    setQuestionsNumber,
    setCategory,
    setDifficulty,
    incrementScore
};