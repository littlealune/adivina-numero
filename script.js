
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

initProgram()

messageField.textContent = mensajeInicial
scoreField.textContent = score
highScoreField.textContent = highScore
secretNumberField.textContent = '?'

function initProgram ()  {
    const mensajeInicial = 'Empieza a adivinar...'
    let score = 20
    let highScore = highScoreField ?? 0
    const secretNumber = Math.trunc(Math.random() * 20) +1
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
        }
    }
})

againButton.addEventListener('click', () => {
    
    secretNumberField.textContent = '?'
    document.body.style.backgroundColor = '#222'
    checkButton.disabled = false
    messageField.textContent = 'Empieza a adivinar...'
    guessNumberField.value = ''
})