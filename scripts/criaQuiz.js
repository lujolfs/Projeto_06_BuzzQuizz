
let quizCreationData1 = {};
let quizCreationData2 = {};
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
            numQuestions: manyQuestions.value,
            numLevels: manyLevels.value
        }
        criaQuiz.classList.add('hidden');
        const questions = document.querySelector('.asking')
        questions.classList.remove('hidden');
        quizTitle.value = '';
        imgQuiz.value = '';
        manyQuestions.value = '';
        manyLevels.value = '';
    }

}
