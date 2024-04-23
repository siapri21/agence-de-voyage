// Constantes pour le comportement du slider
const repeat = false; // Indique si le slider doit se répéter lorsqu'il atteint la fin ou le début
const noArrows = false; // Indique s'il faut masquer la navigation par flèches
const noBullets = false; // Indique s'il faut masquer la navigation par des points

// Sélection des éléments du DOM
const container = document.querySelector('.slider-container'); // Sélectionne le conteneur du slider
var slide = document.querySelectorAll('.slider-single'); // Sélectionne tous les éléments de diapositive individuels
var slideTotal = slide.length - 1; // Nombre total de diapositives (index basé sur zéro)
var slideCurrent = -1; // Index de la diapositive actuelle, initialisé à -1

// Fonction pour initialiser la navigation par points
function initBullets() {
    if (noBullets) {
        return; // Si noBullets est vrai, ne rien faire
    }
    // Création du conteneur de points
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container');
    // Création des points pour chaque diapositive
    slide.forEach((elem, i) => {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.id = `bullet-index-${i}`;
        bullet.addEventListener('click', () => {
            goToIndexSlide(i); // Écouteur d'événements pour naviguer vers la diapositive lorsque le point est cliqué
        });
        bulletContainer.appendChild(bullet);
        elem.classList.add('proactivede'); // Marquer initialement chaque diapositive comme cachée proactivement
    });
    container.appendChild(bulletContainer); // Ajout du conteneur de points au conteneur du slider
}

// Fonction pour initialiser la navigation par flèches
function initArrows() {
    if (noArrows) {
        return; // Si noArrows est vrai, ne rien faire
    }
    // Création de la flèche de gauche
    const leftArrow = document.createElement('a');
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa', 'fa-arrow-left');
    leftArrow.classList.add('slider-left');
    leftArrow.appendChild(iLeft);
    leftArrow.addEventListener('click', () => {
        slideLeft(); // Écouteur d'événements pour faire glisser à gauche lorsque la flèche de gauche est cliquée
    });
    // Création de la flèche de droite
    const rightArrow = document.createElement('a');
    const iRight = document.createElement('i');
    iRight.classList.add('fa', 'fa-arrow-right');
    rightArrow.classList.add('slider-right');
    rightArrow.appendChild(iRight);
    rightArrow.addEventListener('click', () => {
        slideRight(); // Écouteur d'événements pour faire glisser à droite lorsque la flèche de droite est cliquée
    });
    // Ajout des flèches au conteneur du slider
    container.appendChild(leftArrow);
    container.appendChild(rightArrow);
}

// Fonction pour initialiser le slider
function slideInitial() {
    initBullets(); // Initialiser la navigation par points
    initArrows(); // Initialiser la navigation par flèches
    setTimeout(function () {
        slideRight(); // Commencer à glisser vers la droite après un court délai
    }, 500);
}

// Fonction pour mettre à jour la navigation par points
function updateBullet() {
    if (!noBullets) {
        // Supprimer la classe 'active' de tous les points et l'ajouter au point de la diapositive active actuelle
        document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
            elem.classList.remove('active');
            if (i === slideCurrent) {
                elem.classList.add('active');
            }
        });
    }
    checkRepeat(); // Vérifier si le comportement de répétition doit être appliqué
}

// Fonction pour gérer le comportement de répétition
function checkRepeat() {
    if (!repeat) {
        if (slideCurrent === slide.length - 1) {
            // Si à la fin, masquer la flèche droite et afficher la flèche gauche
            slide[0].classList.add('not-visible');
            slide[slide.length - 1].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-right').classList.add('not-visible');
                document.querySelector('.slider-left').classList.remove('not-visible');
            }
        } else if (slideCurrent === 0) {
            // Si au début, masquer la flèche gauche et afficher la flèche droite
            slide[slide.length - 1].classList.add('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.add('not-visible');
                document.querySelector('.slider-right').classList.remove('not-visible');
            }
        } else {
            // Si au milieu, afficher les deux flèches
            slide[slide.length - 1].classList.remove('not-visible');
            slide[0].classList.remove('not-visible');
            if (!noArrows) {
                document.querySelector('.slider-left').classList.remove('not-visible');
                document.querySelector('.slider-right').classList.remove('not-visible');
            }
        }
    }
}

// Fonction pour faire glisser vers la droite
function slideRight() {
    // Logique pour faire glisser vers la droite
}

// Fonction pour faire glisser vers la gauche
function slideLeft() {
    // Logique similaire à slideRight() mais dans la direction opposée
}

// Fonction pour naviguer vers une diapositive spécifique par index
function goToIndexSlide(index) {
    // Déterminer la direction du glissement en fonction des index de diapositive actuel et cible
    // Appeler slideLeft() ou slideRight() jusqu'à atteindre la diapositive cible
}

slideInitial(); // Initialiser le slider lorsque le script est exécuté
