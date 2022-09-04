// Renderização dos quizzes
const quizzesBox = document.querySelector('.api-quizz');
const homePage = document.querySelector('main');
const quizzPage = document.querySelector('.quizzPage');
let quizzesApi = []; // Cria array vazio para preenchê-lo com as informações recebidas da API.
let quizzesIndex = [];
let quizzAtual; //Array onde a página de Quizz irá puxar as informações para usar no Quizz
let qddPerguntas;
renderQuizz(); // Chama a função render Quizz.

function renderQuizz() {
    let quizzesInfo = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    quizzesInfo.then(fillArray);
}

function fillArray(quizzes) {
    quizzesApi = quizzes.data;
    printQuizz(quizzesApi);
}



function printQuizz(quizzesApi) {
    quizzesBox.innerHTML = '';
    console.log(quizzesApi);

    for(let i = 0; i < 6; i++) { // Esse for é substituível por um map, mas não consegui aprender como.
    quizzesBox.innerHTML = quizzesBox.innerHTML + `
    <div id="index-${i}" class="quizz box" onclick="playQuizz(${i})">
        <div class="gradient"></div>
        <img class="imgBase" src="${quizzesApi[i].image}">
        <div class="chamada">
            <h3>${quizzesApi[i].title}</h3>
        </div>
    </div>`
    }
}


function restartPage() {
    window.location.reload();
}

function playQuizz(identity){
    const quizz = document.querySelector('.quizzPage');
    quizzAtual = quizzesApi[identity];
    console.log(quizzAtual.questions.length);
    console.log(quizzAtual);
    homePage.classList.add("hidden");
    quizzPage.classList.remove("hidden");
}

function testeQuizz(){
    quizzAtual[0] = quizzesApi[0];
    console.log(quizzAtual[0]);
    `<h1>${quizzAtual[0].title}</h1>`
}