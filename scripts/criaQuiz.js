
let quizCreationData1 = {};
let questions = [];
let quizCreationData3 = {};

const allCreatingMain = document.querySelector('.allCreatingMain').children;

console.log(allCreatingMain);

function createQuestions(criaQuiz) {

    const errorMessage = `Não foi possível prosseguir!
    Certifique-se que seu quiz possui: 
    1 - Um título maior que 20 caracteres;
    2 - Um endereço URL para a Imagem;
    3 - Mais do que 3 perguntas;
    4 - Mais do que 3 níveis;`;

    const dados = document.querySelector('.dadosDoQuiz-externo');

    const quizTitle = dados.querySelector('.quizTitle');
    const imgQuiz = dados.querySelector('.imgQuiz');
    const manyQuestions = dados.querySelector('.manyQuestions');
    const manyLevels = dados.querySelector('.manyLevels');

    if (quizTitle.value < 20 || (imgQuiz.value.startsWith('https://') === false) || Number(manyQuestions.value) < 3 || Number(manyLevels.value) < 2) {
        alert(errorMessage);
    } else {
        quizCreationData1 = {
            titulo: quizTitle.value,
            URLImg: imgQuiz.value,
            numQuestions: Number(manyQuestions.value),
            numLevels: Number(manyLevels.value)
        }
        criaQuiz.classList.add('hidden');
        const questions = document.querySelector('.asking')
        questions.classList.remove('hidden');

        quizTitle.value = '';
        imgQuiz.value = '';
        manyQuestions.value = '';
        manyLevels.value = '';

        questions.innerHTML = `<h3 class="perguntasTitulo">Crie suas perguntas</h3>

                                <div class="containerPerguntas">
                                </div>
                                <input onclick="goToLevels(this.parentNode.querySelector('.containerPerguntas').children)" value="Prosseguir pra criar perguntas" class="toCreateLevels"
                                type="button">`;

        const questionBox = questions.querySelector('.containerPerguntas');

        for (let i = 1; i <= quizCreationData1.numQuestions; i++) {
            questionBox.innerHTML += `<div  class="container-pergunta closed" data-identifier="question-form">

            <h3 onclick="shrink(this.parentNode)" class="QuestionTitle">Pergunta ${i}</h3> <img data-identifier="expand" onclick="editItem(this.parentNode)" class="editImg" src="./images/edit.svg">
            <div class="hidden allQuestionData">
                <div class="dadosDoQuiz-interno">
                    <input class="textQuestion" type="text" placeholder="Texto da pergunta">
                    <input class="backGroundColor pergunta" type="text" placeholder="Cor de fundo da pergunta">
                </div>

                <h3 class="right answerTitle">Resposta Correta</h3>

                <div class="dadosDoQuiz-interno rightAnswer">
                    <input class=" respostaCorretaText" type="text" placeholder="Resposta correta">
                    <input class="imgQuiz Right" type="text" placeholder="URL da imagem">
                </div>

                <h3 class="wrong answerTitle">Respostas incorretas</h3>
                <div class="wrongAnswers">
                    <div class="dadosDoQuiz-interno wrongAnswer">
                        <input class="wrongAnswerText" type="text" placeholder="Resposta incorreta 1">
                        <input class="imgQuizWrong" type="text" placeholder="URL da imagem">
                    </div>

                    <div class="dadosDoQuiz-interno wrongAnswer">
                        <input class="wrongAnswerText" type="text" placeholder="Resposta incorreta 2">
                        <input class="imgQuizWrong" type="text" placeholder="URL da imagem">
                    </div>

                    <div class="dadosDoQuiz-interno wrongAnswer">
                        <input class="wrongAnswerText" type="text" placeholder="Resposta incorreta 3">
                        <input class="" type="text" placeholder="URL da imagem">
                    </div>
            </div>
            </div>
        </div>`
        }

    }

}

function editItem(itemToedit) {
    itemToedit.classList.remove('closed');
    const item = itemToedit.querySelector('div');
    const imgEditor = itemToedit.querySelector('img');
    imgEditor.classList.add('hidden');
    item.classList.remove('hidden');
}

function shrink(box) {
    box.querySelector('div').classList.add('hidden');
    box.classList.add('closed');
    box.querySelector('img').classList.remove('hidden');
}

// criar uma função para conferir a validade das imagens
function checkImg(inputText) {
    let cont = 0;
    if (inputText.value.startsWith('https://')) {
        cont++;
    }
    if (cont > 0) {
        return true;
    } else {
        return false;
    }
}

// criar uma função para conferir a validade da cor de fundo da pergunta
function checkBgColor(inputText) {
    if ((inputText.value.length <= 7) && (inputText.value.startsWith('#'))) {
        return true;
    } else {
        return false;
    }
}

// Função para checar o tamanho da string

function checkStringLength(inputText, num) {
    let text = inputText.value;
    if (text.length >= 20) {
        return true;
    } else {
        return false;
    }
}



function goToLevels(allQuestions) {
    let textoMaiorQue20 = true;
    let setColor = true;
    let isImgURL = true;
    let wrongImgCondition = true;
    let filledAnswer = true;



    const allQuestionsArr = [];
    convertToArray(allQuestions, allQuestionsArr);

    let allQuestiontitle = document.querySelectorAll('.textQuestion');
    let allQuestiontitleArr = [];
    convertToArray(allQuestiontitle, allQuestionsArr);
    let rightAnswer;
    let contImg = 0;
    let contRA = 0;
    for (let i = 0; i < allQuestionsArr.length; i++) {
        let wrongAnswersImgArr = [];
        let wrongAnswerImgNl = allQuestionsArr[i].querySelectorAll('.imgQuizWrong');
        rightAnswer = allQuestionsArr[i].querySelector('.rightAnswer').value;
        if(rightAnswer !== ''){
            contRA++;
        }
        convertToArray(wrongAnswerImgNl, wrongAnswersImgArr);

        // conferindo a validade das imagens das respostas erradas
        wrongAnswersImgArr.forEach(element => {
            wrongImgCondition = checkImg(element);
            let wrongAnswerText = element.parentNode.querySelector('.wrongAnswerText');
            if (wrongImgCondition === true || wrongAnswerText.value !== '') {
                contImg++;
            }
        });



    }

    // Correção de nome da variável allQuestionTitle

    for (let k = 0; k < allQuestiontitleArr.length; k++) {
        const element = allQuestionTitle[k];
        textoMaiorQue20 = checkStringLength(element, 20);
        if (textoMaiorQue20 === false) {
            break;
        }

    }


    if ((contImg < allQuestionsArr.length) || textoMaiorQue20 === false || contRA !== allQuestionsArr.length) {
        alert('DEU RUIM');
    } else {

        /* for(let i = 0; i < allQuestionsArr.length; i++){
             */

        allQuestionsArr.forEach(element => {
            let questionData = {
            title: element.querySelector('.textQuestion').value,
            color: element.querySelector('.backGroundColor').value,
            answers: []
        }


        questions.push(questionData);
        });

        
    }

}





function convertToArray(list, emptyArray) {
    for (let j = 0; j < list.length; j++) {
        let item = list[j];
        emptyArray.push(item);
    }
}

