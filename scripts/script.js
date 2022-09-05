// Renderização dos quizzes
const quizzesBox = document.querySelector('.api-quizz');
const homePage = document.querySelector('main');
const quizzPage = document.querySelector('.quizzPage');
let quizzesApi = []; // Cria array vazio para preenchê-lo com as informações recebidas da API.
let quizzesIndex = [];
let quizzAtual; //Array onde a página de Quizz irá puxar as informações para usar no Quizz
let qddPerguntas;
let i;
let qddRespostasCertas;
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

    for(let i = 0; i < 12; i++) { // Esse for é substituível por um map, mas não consegui aprender como.
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


//Array que colocará as informações do quizz do servidor no html da página
//dividir o Inner html em blocos para poder mexer neles separadamente
function playQuizz(identity){
    //quizzAtual = quizzesApi[0];

    //início da parte do lucas
    quizzAtual = quizzesApi[identity];
    homePage.classList.add("hidden");
    quizzPage.classList.remove("hidden");

    //bloco 1 - Header
    const header = document.querySelector('.QuizzHeader');
    header.innerHTML = `<img class="headerimg .gradient" src="${quizzAtual.image}" >  </img>
     <h1>${quizzAtual.title}</h1>`;


     //bloco das perguntas
     const caixarespostas = document.querySelector('.respostas');
     const caixaResposta4 = document.querySelector('.resposta4');
     const caixaperguntas = document.querySelector('.PerguntasGerais');
     caixarespostas.innerHTML ='';
     caixaperguntas.innerHTML ='';
     
    for (let i = 0; i <quizzAtual.questions.length; i++){ if (quizzAtual.questions[i].answers.length === 2){
     caixaperguntas.innerHTML = caixaperguntas.innerHTML +
     `<div class="questionBox">
     <div class="question1">
         <h1>${quizzAtual.questions[i].title}</h1>
     </div>
     <div class="respostas">
     <div class="resposta1 ${quizzAtual.questions[i].answers[0].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
     src="${quizzAtual.questions[i].answers[0].image}">
 </img>
 <h1>${quizzAtual.questions[i].answers[0].text}</h1>
 </div>
 <div class="resposta1 ${quizzAtual.questions[i].answers[1].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
     src="${quizzAtual.questions[i].answers[1].image}">
 </img>
 <h1>${quizzAtual.questions[i].answers[1].text}</h1>
 </div>
         
     </div>

 </div>`}
 else if (quizzAtual.questions[i].answers.length === 3){
    caixaperguntas.innerHTML = caixaperguntas.innerHTML +
    `<div class="questionBox">
    <div class="question1">
        <h1>${quizzAtual.questions[i].title}</h1>
    </div>
    <div class="respostas">
    <div class="resposta1 ${quizzAtual.questions[i].answers[0].isCorrectAnswer}" onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[0].image}">
</img>
<h1>${quizzAtual.questions[i].answers[0].text}</h1>
</div>
<div class="resposta1 ${quizzAtual.questions[i].answers[1].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[1].image}">
</img>
<h1>${quizzAtual.questions[i].answers[1].text}</h1>
</div>
<div class="resposta1 ${quizzAtual.questions[i].answers[2].isCorrectAnswer}" onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[2].image}">
</img>
<h1>${quizzAtual.questions[i].answers[2].text}</h1>
</div>
        
    </div>

</div>`
 }
 else if (quizzAtual.questions[i].answers.length === 4){
    caixaperguntas.innerHTML = caixaperguntas.innerHTML +
    `<div class="questionBox">
    <div class="question1">
        <h1>${quizzAtual.questions[i].title}</h1>
    </div>
    <div class="respostas">
    <div class="resposta1 ${quizzAtual.questions[i].answers[0].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[0].image}">
</img>
<h1>${quizzAtual.questions[i].answers[0].text}</h1>
</div>
<div class="resposta1 ${quizzAtual.questions[i].answers[1].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[1].image}">
</img>
<h1>${quizzAtual.questions[i].answers[1].text}</h1>
</div>
<div class="resposta1 ${quizzAtual.questions[i].answers[2].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[2].image}">
</img>
<h1>${quizzAtual.questions[i].answers[2].text}</h1>
</div>
<div class="resposta1 ${quizzAtual.questions[i].answers[3].isCorrectAnswer} " onclick ="selecionarObjeto(this)"><img class="imagemResposta"
    src="${quizzAtual.questions[i].answers[3].image}">
</img>
<h1>${quizzAtual.questions[i].answers[3].text}</h1>
</div>
        
 </div>

</div>`
 }
 
};

 

     
   // quizz.innerHTML = ''
    console.log(quizzAtual.levels.length);
    console.log(quizzAtual);     

function playQuizz2(identity){
    const quizz = document.querySelector('.quizzPage');
    quizzAtual = quizzesApi[identity];
    console.log(quizzAtual.questions[0].answers.length);
    console.log(quizzAtual);
    homePage.classList.add("hidden");
    quizzPage.classList.remove("hidden");
}}

function selecionarObjeto(objeto){
    console.log(objeto);
    const opcoes = objeto.parentNode;
    if (opcoes.classList.contains('respondido')) 
    {return;} else {
        objeto.classList.add('selecionado')
        opcoes.classList.add('respondido')
    }
    mostrarResposta();
}

function mostrarResposta(){
    const indiceResposta = document.querySelectorAll('.respondido')
    if (indiceResposta.length === quizzAtual.questions.length){
        const quadroResposta = document.querySelector('.quizzResultBox');
        quadroResposta.classList.remove('hidden');
        console.log("perguntas ok");
        const respostasCertas = document.querySelectorAll('.true.selecionado');
    qddRespostasCertas = respostasCertas.length;
    console.log(qddRespostasCertas);
    //bloco do resultado (será oculto e mostrado apenas 1 após criação de função)   
    const respostas = document.querySelector('.quizzResultBox');
    respostas.innerHTML ='';
//conta para receber porcentagem de acertos
const todasrespostasCertas = document.querySelectorAll('.resposta1.true');
const porcentagemRespostasCertas = Math.round((qddRespostasCertas*100)/todasrespostasCertas.length)
console.log(porcentagemRespostasCertas);

for (let i = 0; i <quizzAtual.levels.length; i++)
{if (porcentagemRespostasCertas >= quizzAtual.levels[i].minValue){
    respostas.innerHTML = `
    <div class="quizzResult">
       <h1>${porcentagemRespostasCertas}% de acertos!: ${quizzAtual.levels[i].title}</h1>
    </div>
    <div class="img_text_box">
        <img class="imgResult"
            src="${quizzAtual.levels[i].image}">
        <h1> Resultado:${quizzAtual.levels[i].text} </h1>
    </div>
`  
}}
    
    }
    
    
}

function resetaQuizz(){
    const resp = document.querySelectorAll('.respondido');
    const selec = document.querySelectorAll('.selecionado');
    for (let i = 0; i<selec.length;i++){
        selec[i].classList.remove('selecionado');
        resp[i].classList.remove('respondido');
    }
    const escondeResposta = document.querySelector('.quizzResultBox');
    escondeResposta.classList.add('hidden');
    document.documentElement.scrollTop = 0;

}

