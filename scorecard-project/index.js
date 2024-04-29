let homeScoreBtn1 = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function add1Home() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let guestScoreBtn1 = document.getElementById("guest-score-btn-1")
let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

function add1Guest() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function add3Guest() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

let newGameBtn = document.getElementById("new-game")

function newGame() {
    homeStoreEl.textContent = 0
    guestStoreEl.textContent = 0
    homeScore = 0 
    guestScore = 0
}