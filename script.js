
const mensajeInicial = 'Empieza a adivinar...'
const SCORE = 20


let score
let highScore = 0
let secretNumber

const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

initProgram()

function initProgram ()  {

    //localstorage.getItem("highScore");

    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = SCORE
    highScore = localStorage.getItem('highScore') || 0
    document.body.style.backgroundColor = '#222'
    checkButton.disabled = false
    guessNumberField.value = ''
    messageField.textContent = mensajeInicial
    scoreField.textContent = 20
    highScoreField.textContent = highScore
    secretNumberField.textContent = '?'

    //TODO: leer highScore de fichero/cookies
}

checkButton.addEventListener('click',() => {
    const guessNumber = Number(guessNumberField.value)
    if(guessNumber > secretNumber){
        score--
        scoreField.textContent = score
        messageField.textContent = 'Demasiado grande'
    }else if (guessNumber < secretNumber){
        score--
        scoreField.textContent = score
        messageField.textContent = 'Demasiado pequeño'
    }else{
        secretNumberField.textContent = secretNumber
        document.body.style.backgroundColor = '#60b347'
        checkButton.disabled = true
        messageField.textContent = '¡Has acertado!'
        if(highScore < score){
            highScore = score
            highScoreField.textContent = highScore
            localStorage.setItem('highScore', highScore)
        }
    }
})

againButton.addEventListener('click', initProgram)

