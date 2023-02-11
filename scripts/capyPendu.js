const motElement = document.getElementById("mot");
const wrongLetter = document.getElementById("wrong-letter");
const replayBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const msgFinal = document.getElementById("final-message");

const corpsePart = document.querySelectorAll(".corpse-parts");

const mots = [
  "capymendale",
  "capybara",
  "capycrocodile",
  "capychasuble",
  "capystock",
  "capyrotofil",
  "capyrotechnicien",
  "capytaine",
  "capylaire",
];

//random mot
let motSelectionne = mots[Math.floor(Math.random() * mots.length)];

console.log(motSelectionne);

const correctLetterArr = [];
const wrongLetterArr = [];

//mot caché

function displayWord() {
  motElement.innerHTML = `    
        ${motSelectionne
          .split("")
          .map(
            (letter) => `
                <span class="letter">
                    ${correctLetterArr.includes(letter) ? letter : ""}
                </span>
            `
          )
          .join("")}
    `;

  const motInterne = motElement.innerText.replace(/\n/g, "");

  if (motInterne === motSelectionne) {
    msgFinal.innerText = "Bravo tu as gagné !";
    popup.style.display = "flex";
  }
}

//Wrong letters

function updateWrongLetterEl() {
  //display wrong letters
  wrongLetter.innerHTML = `
        ${wrongLetterArr.map((lettre) => `<span> ${lettre}</span>`)}
    `;

  //display guy

  corpsePart.forEach((partie, index) => {
    const errors = wrongLetterArr.length;

    if (index < errors) {
      partie.style.display = "block";
    } else partie.style.display = "none";
  });

  //check loose

  if (wrongLetterArr.length === corpsePart.length) {
    msgFinal.innerText = "T' as perdu gros naze !";
    popup.style.display = "flex";
  }

  //restart

  replayBtn.addEventListener("click", () => {
    //erase letters
    correctLetterArr.splice(0);
    wrongLetterArr.splice(0);
    motSelectionne = mots[Math.floor(Math.random() * mots.length)];

    displayWord();
    updateWrongLetterEl();
    popup.style.display = "none";
  });
}

//Display Notif

function displayNotif() {
  notification.classList.add("display");
  setTimeout(() => {
    notification.classList.remove("display");
  }, 1000);
}

//Event Listener

window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode);

  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const lettre = e.key;

    if (motSelectionne.includes(lettre)) {
      if (!correctLetterArr.includes(lettre)) {
        correctLetterArr.push(lettre);
        displayWord();
      } else {
        displayNotif();
      }
    } else {
      if (!wrongLetterArr.includes(lettre)) {
        wrongLetterArr.push(lettre);

        updateWrongLetterEl();
      } else {
        displayNotif();
      }
    }
  }
});

displayWord();
