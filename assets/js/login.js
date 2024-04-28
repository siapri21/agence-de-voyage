// Sélectionne le bouton "Sign In" par son ID
const sign_in_btn = document.querySelector("#sign-in-btn");
// Sélectionne le bouton "Sign Up" par son ID
const sign_up_btn = document.querySelector("#sign-up-btn");
// Sélectionne le conteneur principal par sa classe
const container = document.querySelector(".container");

// Ajoute un écouteur d'événements au clic sur le bouton "Sign Up"
sign_up_btn.addEventListener('click', () =>{
    // Ajoute la classe "sign-up-mode" au conteneur
    container.classList.add("sign-up-mode");
});

// Ajoute un écouteur d'événements au clic sur le bouton "Sign In"
sign_in_btn.addEventListener('click', () =>{
    // Supprime la classe "sign-up-mode" du conteneur
    container.classList.remove("sign-up-mode");
});
