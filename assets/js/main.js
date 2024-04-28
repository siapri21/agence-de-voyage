// const buttonBtn = document.querySelector('.toggles_btn');
// const buttonBtnIcon = document.querySelector('.toggles_btn i');
// const buttonBtnDropdwon = document.querySelector('#dropdwon_Bnt');

// buttonBtn.onclick = function(){
//     buttonBtnDropdwon.classList.toggle('active')
// }


// Sélectionne l'élément DOM du bouton "Suivant"
let next = document.querySelector('.next');

// Sélectionne l'élément DOM du bouton "Précédent"
let prev = document.querySelector('.prev');

// Ajoute un écouteur d'événements pour le clic sur le bouton "Suivant"
next.addEventListener('click', function(){
    // Récupère tous les éléments DOM des items du carrousel
    let items = document.querySelectorAll('.conteneur-item');
    // Déplace le premier élément à la fin du carrousel
    document.querySelector('.slide').appendChild(items[0]);
});

// Ajoute un écouteur d'événements pour le clic sur le bouton "Précédent"
prev.addEventListener('click', function(){
    // Récupère tous les éléments DOM des items du carrousel
    let items = document.querySelectorAll('.conteneur-item');
    // Déplace le dernier élément au début du carrousel
    document.querySelector('.conteneur-slide').prepend(items[items.length - 1]);
    // Note: ici, items.length est 6, donc items[items.length - 1] fait référence au dernier élément dans la liste
});
