//inicializar
let nome

//página 1
function botao(){
    nome = document.querySelector('#ForName').value
    sessionStorage.setItem('nome', nome)
    if(nome === '' || nome.length === 1)
        alert('Digite um nome')
    else{
        window.open('Quiz.html')
        window.close('index.html')
    }
}

//página 2
/*function botaoteste(){
    nome = sessionStorage.getItem('nome')   
}*/

const perguntas = [ 
    'Qual é o livro mais longo da Bíblia?',
    'Quem liderou os israelitas na saída do Egito?',
    'Moisés recebeu os Dez Mandamentos no Monte Sião.',
    'O apóstolo Paulo escreveu a maioria das cartas do Novo Testamento.',
    'Quem foi jogado na cova dos leões?',
    'Davi derrotou o gigante Golias com uma espada.',
    'Qual foi a última praga que Deus enviou ao Egito?',
    'Qual discípulo de Jesus era coletor de impostos antes de segui-lo?'
]

const alternativas = [
    ['Gênesis', 'Salmos','Isaías','Provérbios'],
    ['Josué', 'Abrãao', 'Moisés', 'Samuel'],
    ['Verdadeiro', 'Falso'],
    ['Verdadeiro', 'Falso'],
    ['Daniel', 'Davi', 'José','Isaque'],
    ['Verdadeiro', 'Falso'],
    ['Infestação de Gafanhotos', 'Escuridão', 'Feridas e úlceras', 'Morte dos primogênitos'],
    ['Judas Tadeu', 'Mateus', 'Tomé', 'Bartolomeu']
]

const Respostas = [
    ['Salmos', 523],
    ['Moisés', 309],
    ['Falso', 602],
    ['Verdadeiro', 492],
    ['Daniel', 200],
    ['Falso', 490],
    ['Morte dos primogênitos', 100],
    ['Mateus', 802]
]

let Pontos = 0
let Questao = 0
const Marcada = []
const Botao_A = document.querySelector('#buttonA')
const Botao_B = document.querySelector('#buttonB')
const Botao_C = document.querySelector('#buttonC')
const Botao_D = document.querySelector('#buttonD')
const Enunciado = document.querySelector('.perguntas')
const Questaoh2 = document.querySelector('.tituloQuestao')
const divBtnC = document.querySelector('#botaoC')
const divBtnD = document.querySelector('#botaoD')
const imagensQuiz = document.querySelector('#imagens')

function Imagem(){
    const imageList = [
        'img/imgQ1.jpg', 
        'img/imgQ3.jpg',
        'img/logoGU.jpg', 
        'img/imgQ4.jpg',
        'img/imgQ5.jpg', 
        'img/imgQ6.jpg',
        'img/imgQ7.jpg', 
        'img/imgQ8.jpg' 
    ]
    imagensQuiz.innerHTML = `
    <img src="${imageList[Questao]}" class="imgQ">
    `
}
Imagem()

function geralBotao(){
    Questao++
    if(Questao > 7){
        for(i = 0; i < 8; i++){
            if(alternativas[i][Marcada[i]] === Respostas[i][0]){
                Pontos += Respostas[i][1]
            }
        }
        sessionStorage.setItem('Pontos', Pontos)
        window.open('Resultado.html')
        window.close('Quiz.html')
    }
    else{
        Questaoh2.textContent = `Questão ${Questao + 1}`
        Enunciado.textContent = perguntas[Questao]
        Botao_A.textContent = alternativas[Questao][0]
        Botao_B.textContent = alternativas[Questao][1]
        if(alternativas[Questao].length < 3){
            divBtnC.style.display = 'none'
            divBtnD.style.display = 'none'
        }
        else{
            Botao_C.textContent = alternativas[Questao][2]
            Botao_D.textContent = alternativas[Questao][3]
            divBtnC.style.display = 'flex'
            divBtnD.style.display = 'flex'
        }
    }
    Imagem()    
}

function BotaoA(){
    Marcada.push(0)
    geralBotao()
}

function BotaoB(){
    Marcada.push(1)
    geralBotao()
}

function BotaoC(){
    Marcada.push(2)
    geralBotao()
}

function BotaoD(){
    Marcada.push(3)
    geralBotao()
}

//página 3
function Reset(){
    window.open('index.html')
    window.close('Resultado.html')
}
const Result = document.querySelector('#Resultados')

function AddFoto(){
    const FotoList = [
        ['wil', 'img/Willy.jpg'],
        ['mari', 'img/Marianna.jpg'],
        ['gi', 'img/Giovanna.jpg'],
        ['robs', 'img/Robson.jpg'],
        ['ana', 'img/Ana.jpg'],
        ['kevin', 'img/Kevin.jpg'],
        ['rafa', 'img/Rafael.jpg'],
        ['carlos', 'img/Carlos.jpg'],
        ['dani', 'img/Daniel.jpg']
    ]
    
    const Foto = document.querySelector('#foto')
    
    for(i = 0; i < 9; i++){
        if(nome.toLowerCase().includes(FotoList[i][0])){
            Foto.innerHTML = `
            <img src="${FotoList[i][1]}" class="imgPessoa">
            `
        }
    }       
}

function Show(){
    const Parabens = document.querySelector('#Parabens')
    const Pontuacao = document.querySelector('#Pontos')
    document.querySelector('#Mostrar').style.display = 'none'
    nome = sessionStorage.getItem('nome')
    Pontos = sessionStorage.getItem('Pontos')
    Parabens.textContent = `Parabéns, ${nome}!`
    Pontuacao.textContent = `Você fez ${Pontos} pontos`
    AddFoto()
}