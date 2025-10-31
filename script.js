const gameArea = document.getElementById("game")
const displayLives = document.getElementById("lives")
const displayLost = document.getElementById("lost")
const displayWon = document.getElementById("won");
const tryAgain = document.getElementById("tryAgain")
const winAgain = document.getElementById("winAgain")

let livesLeft = 10;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

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
startAgain();