const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let tries = 0;
let pairs = 0;

shuffle();

// On click action
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}


// Check if cards have same image dataset
function checkForMatch() {
    tries++;
    if (firstCard.dataset.capy === secondCard.dataset.capy) {
        disableCards();
        pairs++;
        if (pairs >= 6) {
            setTimeout(() => {
                alert("Vous avez réussi en : "+tries+" coups");
            }, 1000)
        }
        return;
    }
    unflipCards();
}


// disable the flip function for the two cards
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// both cards returns to their initial position
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 600);
}

// Enable to re click on the same first card
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Shuffle the cards 
function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}


cards.forEach(card => card.addEventListener('click', flipCard));