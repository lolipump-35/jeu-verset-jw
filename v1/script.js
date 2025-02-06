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
        this.style.backgroundColor = "green"; // Bonne réponse
      } else {
        this.style.backgroundColor = "red"; // Mauvaise réponse
      }
  
      // Vérifie si la couleur du verset a changé
      const bgColor = this.style.backgroundColor;
      if (bgColor === "green" || bgColor === "red") {
        const textDiv = this.querySelector(".text"); // Récupère l'élément .text
        if (textDiv) {
          textDiv.style.display = textDiv.style.display === "none" ? "block" : "none"; // Affiche ou cache le texte
        }
      }
    });
  });
  

// Bouton pour avancer
button2.addEventListener("click", function () {
    if (currentIndex < questions.length - 1) {
        questions[currentIndex].style.display = "none"; // Cacher l'actuelle
        currentIndex++; // Aller à la suivante
        questions[currentIndex].style.display = "flex"; // Afficher la suivante
        resetVersesColor(); // Réinitialiser les couleurs
    }
});

// Bouton pour reculer
button1.addEventListener("click", function () {
    if (currentIndex > 0) {
        questions[currentIndex].style.display = "none"; // Cacher l'actuelle
        currentIndex--; // Aller à la précédente
        questions[currentIndex].style.display = "flex"; // Afficher la précédente
        resetVersesColor(); // Réinitialiser les couleurs
    }
});
