const gameArea = document.getElementById("game")
const displayLives = document.getElementById("lives")
const displayScore = document.getElementById("score")
const displayLost = document.getElementById("lost")
const displayWon = document.getElementById("won")
const tryAgain = document.getElementById("tryAgain")
const winAgain = document.getElementById("winAgain")
const rulesBtn = document.getElementById("rulesBtn")
const rulesOverlay = document.getElementById("rulesOverlay")
const closeRulesBtn = document.getElementById("closeRules")

let livesLeft = 10
let firstCard = null
let secondCard = null
let lockBoard = false
let score = 0
let streak = 0

const cardSymbols = ['🦍', '🦣', '🐲', '🐦‍🔥', '🐪', '🦥', '🦖', '🦬', '🦕', '🐳']
let cardValues = []

function startAgain() {
    gameArea.innerHTML = ""
    displayLost.style.display = "none"
    displayWon.style.display = "none"
    tryAgain.style.display = "none"
    winAgain.style.display = "none"
    gameArea.style.display = "grid"

    livesLeft = 10
    score = 0
    streak = 0
    firstCard = null
    secondCard = null
    lockBoard = false

    displayLives.textContent = `Lifes : ${livesLeft}`
    if (displayScore) displayScore.textContent = `Score : ${score}`

    cardValues = [...cardSymbols, ...cardSymbols]
    cardValues.sort(() => Math.random() - 0.5)

    generateCards()
}

function generateCards() {
    cardValues.forEach((_, index) => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("data-index", index)
        card.addEventListener("click", flipCard)
        gameArea.appendChild(card)
    })
}

function flipCard() {
    if (lockBoard) return
    if (this === firstCard) return

    const index = this.getAttribute("data-index")

    this.classList.add("flipped")
    this.textContent = cardValues[index]

    if (!firstCard) {
        firstCard = this
        return
    }

    secondCard = this
    checkIFMatch()
}

function checkIFMatch() {
    lockBoard = true

    const firstIndex = firstCard.getAttribute("data-index")
    const secondIndex = secondCard.getAttribute("data-index")

    const match = cardValues[firstIndex] === cardValues[secondIndex]

    match ? disableCards() : unFlipCards()
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)

    streak += 1
    score += streak
    if (displayScore) displayScore.textContent = `Score : ${score}`

    resetBoard()

    if (document.querySelectorAll(".card.flipped").length === cardValues.length) {
        endGame(true)
    }
}

function unFlipCards() {
    livesLeft--
    displayLives.textContent = `Lifes : ${livesLeft}`
    streak = 0

    setTimeout(() => {
        firstCard.classList.remove("flipped")
        firstCard.textContent = ""
        secondCard.classList.remove("flipped")
        secondCard.textContent = ""
        resetBoard()
    }, 850)

    if (livesLeft === 0) {
        endGame(false)
    }
}

function resetBoard() {
    firstCard = null
    secondCard = null
    lockBoard = false
}

function endGame(isWin) {
    gameArea.style.display = "none"

    if (isWin) {
        displayWon.style.display = "block"
        winAgain.style.display = "block"
    } else {
        displayLost.style.display = "block"
        tryAgain.style.display = "block"
    }
}

winAgain.addEventListener("click", startAgain)
tryAgain.addEventListener("click", startAgain)

function openRules() {
    if (rulesOverlay) {
        rulesOverlay.style.display = "flex"
        rulesOverlay.setAttribute("aria-hidden", "false")
    }
    const main = document.getElementById("main-content")
    if (main) main.classList.add("blurred")
}

function closeRules() {
    if (rulesOverlay) {
        rulesOverlay.style.display = "none"
        rulesOverlay.setAttribute("aria-hidden", "true")
    }
    const main = document.getElementById("main-content")
    if (main) main.classList.remove("blurred")
}

if (rulesBtn) rulesBtn.addEventListener("click", openRules)
if (closeRulesBtn) closeRulesBtn.addEventListener("click", closeRules)

if (rulesOverlay) {
    rulesOverlay.addEventListener("click", (e) => {
        if (e.target === rulesOverlay) closeRules()
    })
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeRules()
})

startAgain()
