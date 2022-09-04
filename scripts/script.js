// Renderização dos quizzes
const quizzesBox = document.querySelector('.api-quizz');
const homePage = document.querySelector('main');
const quizzPage = document.querySelector('.quizzPage');
let quizzesApi = []; // Cria array vazio para preenchê-lo com as informações recebidas da API.
let quizzesIndex = [];
let quizzAtual; //Array onde a página de Quizz irá puxar as informações para usar no Quizz
let qddPerguntas;
let i;
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

<<<<<<< HEAD
//Array que colocará as informações do quizz do servidor no html da página
//dividir o Inner html em blocos para poder mexer neles separadamente
function playQuizz(){
    quizzAtual = quizzesApi[0];
    const quizz = document.querySelector('.quizzPage');
    //bloco 1 - Header
    const header = document.querySelector('.QuizzHeader');
    header.innerHTML = `<img class="headerimg" src="${quizzAtual.image}" >  </img>
     <h1>${quizzAtual.title}</h1>`;


     //bloco das perguntas
     const caixarespostas = document.querySelector('.respostas');
     const caixaperguntas = document.querySelector('.PerguntasGerais');
     caixaperguntas.innerHTML ='';
         for (let i = 0; i <quizzAtual.questions.length; i++){
     caixaperguntas.innerHTML = caixaperguntas.innerHTML +
     `<div class="questionBox">
     <div class="question1">
         <h1>${quizzAtual.questions[i].title}</h1>
     </div>
     <div class="respostas"><div class="resposta1"><img class="imagemResposta"
     src="${quizzAtual.questions[i].answers[0].image}">
 </img>
 <h1>${quizzAtual.questions[i].answers[0].text}</h1>
</div>
<div class="resposta1"><img class="imagemResposta"
     src="${quizzAtual.questions[i].answers[1].image}">
 </img>
 <h1>${quizzAtual.questions[i].answers[1].text}</h1>
</div><br>

         
     </div>

 </div>`
    
}


     //bloco do resultado (será oculto e mostrado apenas 1 após criação de função)   
     const respostas = document.querySelector('.quizzResultBox');
     respostas.innerHTML ='';
     for (let i = 0; i <quizzAtual.levels.length; i++){
        respostas.innerHTML = respostas.innerHTML +
        `<div class="quizzResultBox ">
            <div class="quizzResult">
               <h1> X% de acertos: ${quizzAtual.levels[i].title}</h1>
            </div>
            <div class="img_text_box">
                <img class="imgResult"
                    src="${quizzAtual.levels[i].image}">
                <h1> Resultado:${quizzAtual.levels[i].text} </h1>
            </div>
        </div>`  
   }
   // quizz.innerHTML = ''
    console.log(quizzAtual.levels.length);
    console.log(quizzAtual);     
=======
function playQuizz(identity){
    const quizz = document.querySelector('.quizzPage');
    quizzAtual = quizzesApi[identity];
    console.log(quizzAtual.questions.length);
    console.log(quizzAtual);
    homePage.classList.add("hidden");
    quizzPage.classList.remove("hidden");
>>>>>>> 4ccac1e3e33f10414bb37d0b3665868ff26328f1
}

function testeQuizz(){
    quizzAtual[0] = quizzesApi[0];
    console.log(quizzAtual[0]);
    //`<h1>${quizzAtual[0].title}</h1>
   // header.innerHTML = header.innerHTML + `<img class="headerimg" src="${quizzAtual.image}" >  </img>
    //<h1>${quizzAtual.title}</h1>`
}