const gameArea = document.getElementById("game")
const displayLives = document.getElementById("lives")
const displayScore = document.getElementById("score")
const displayLost = document.getElementById("lost")
const displayWon = document.getElementById("won");
const tryAgain = document.getElementById("tryAgain")
const winAgain = document.getElementById("winAgain")
const rulesBtn = document.getElementById("rulesBtn")
const rulesOverlay = document.getElementById("rulesOverlay")
const closeRulesBtn = document.getElementById("closeRules")

let livesLeft = 10;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let streak = 0; // consecutive correct matches counter

const cardSymbols = ['🦍', '🦣', '🐲', '🐦‍🔥', '🐪', '🦥', '🦖', '🦬', '🦕', '🐳'];
let cardValues=[]


function startAgain(){
    gameArea.innerHTML=""
    displayLost.style.display="none"
    displayWon.style.display="none"
    tryAgain.style.display="none"
    winAgain.style.display="none"
    gameArea.style.display="grid"

    livesLeft=10
    displayLives.textContent=`Lifes : ${livesLeft}`
    // reset scoring for a fresh game
    score = 0
    streak = 0
    if (displayScore) displayScore.textContent = `Score : ${score}`
    firstCard=null
    secondCard=null
    lockBoard=false

    cardValues = [...cardSymbols, ...cardSymbols];
    cardValues.sort(() => 0.5 - Math.random())

    generateCards()
}

function generateCards() {
    cardValues.forEach(symbol => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("data-symbol", symbol)
        card.addEventListener("click", flipCard)
        gameArea.appendChild(card)
    });
}

function flipCard() {
    if (lockBoard)
        return
    if (this === firstCard)
        return

    this.classList.add("flipped")
    this.textContent = this.getAttribute("data-symbol")

    if (!firstCard)
        firstCard = this;
    else {
        secondCard = this
        checkIFMatch();
    }
}
function checkIFMatch() {
    lockBoard = true
    const Match = firstCard.getAttribute("data-symbol") === secondCard.getAttribute("data-symbol")
    Match ? disableCards() : unFlipCards()
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    // It's a correct match: update streak and score
    streak += 1
    score += streak
    if (displayScore) displayScore.textContent = `Score : ${score}`

    resetBoard()

    if (document.querySelectorAll('.card.flipped').length === cardValues.length)
        endGame(true)
}

function unFlipCards() {
    livesLeft--
    displayLives.textContent = `Lifes : ${livesLeft}`

    setTimeout(() => {
        firstCard.classList.remove("flipped")
        firstCard.textContent = ""
        secondCard.classList.remove("flipped")
        secondCard.textContent = ""
        resetBoard()
    }, 850)
    // mismatch: reset streak so next correct match starts at +1
    streak = 0
    if (livesLeft === 0)
        endGame(false)
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]
}

function endGame(isWin) {
    gameArea.style.display = "none"
    if (isWin){
        displayWon.style.display = "block"
        winAgain.style.display="block"
    }
    else{
        displayLost.style.display = "block"
        tryAgain.style.display="block"
    }
}
winAgain.addEventListener("click",startAgain)
tryAgain.addEventListener("click",startAgain)

// Rules modal behaviors
function openRules(){
    if (rulesOverlay){
        rulesOverlay.style.display = 'flex'
        rulesOverlay.setAttribute('aria-hidden','false')
    }
    const main = document.getElementById('main-content')
    if (main) main.classList.add('blurred')
}
function closeRules(){
    if (rulesOverlay){
        rulesOverlay.style.display = 'none'
        rulesOverlay.setAttribute('aria-hidden','true')
    }
    const main = document.getElementById('main-content')
    if (main) main.classList.remove('blurred')
}

if (rulesBtn) rulesBtn.addEventListener('click', openRules)
if (closeRulesBtn) closeRulesBtn.addEventListener('click', closeRules)
// close when clicking outside modal
if (rulesOverlay) rulesOverlay.addEventListener('click', (e)=>{
    if (e.target === rulesOverlay) closeRules()
})
// close on Esc
document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') closeRules()
})

startAgain();