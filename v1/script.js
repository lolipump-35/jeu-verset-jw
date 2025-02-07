const questions = document.querySelectorAll(".question");
const verses = document.querySelectorAll(".verse");

const button1 = document.getElementById("button1"); // Bouton pour reculer
const button2 = document.getElementById("button2"); // Bouton pour avancer

let currentIndex = 0; // Index de la question affichée

// Afficher seulement la première question au départ
questions.forEach((q, index) => {
    q.style.display = index === 0 ? "flex" : "none";
});

// Fonction pour réinitialiser la couleur des versets
function resetVersesColor() {
    verses.forEach((verse) => {
        verse.style.backgroundColor = ""; // Remet la couleur d'origine définie en CSS
    });
}

verses.forEach((verse) => {
    verse.addEventListener("click", function () {
      const verseQuestion = parseInt(this.getAttribute("data-question"));
  
      // Vérifie si le verset est lié à la question actuelle
      if (verseQuestion === currentIndex) {
        this.style.backgroundColor = "#9BE6B1"; // Bonne réponse
      } else {
        this.style.backgroundColor = "#E6685D"; // Mauvaise réponse
      }
  
      // Vérifie si la couleur du verset a changé
      const bgColor = this.style.backgroundColor;
      if (bgColor === "#9BE6B1" || bgColor === "#E6685D") {
        const textDiv = this.querySelector(".text"); // Récupère l'élément .text
        if (textDiv) {
          textDiv.style.display = textDiv.style.display === "none" ? "block" : "none"; // Affiche ou cache le texte
        }
      }
    });
  });
  

// Fonction pour obtenir un index aléatoire différent de l'actuel
function getRandomIndex() {
  let newIndex;
  do {
      newIndex = Math.floor(Math.random() * 34); // Nombre entre 0 et 33
  } while (newIndex === currentIndex); // Empêcher de rester sur le même index
  return newIndex;
}

// Bouton pour avancer (vers une question aléatoire)
button2.addEventListener("click", function () {
  questions[currentIndex].style.display = "none"; // Cacher l'actuelle
  currentIndex = getRandomIndex(); // Obtenir un index aléatoire
  questions[currentIndex].style.display = "flex"; // Afficher la nouvelle
  resetVersesColor(); // Réinitialiser les couleurs
});

// Bouton pour reculer (vers une autre question aléatoire)
button1.addEventListener("click", function () {
  questions[currentIndex].style.display = "none"; // Cacher l'actuelle
  currentIndex = getRandomIndex(); // Obtenir un index aléatoire
  questions[currentIndex].style.display = "flex"; // Afficher la nouvelle
  resetVersesColor(); // Réinitialiser les couleurs
});
