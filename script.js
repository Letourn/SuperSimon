let boutonStart = document.getElementById('start')
boutonStart.addEventListener('click', demarrerJeu);

let boutonBleu = document.getElementById('bleu')
boutonBleu.addEventListener('click', allumeBleu);
let boutonJaune = document.getElementById('jaune')
boutonJaune.addEventListener('click', allumeJaune);
let boutonRouge = document.getElementById('rouge')
boutonRouge.addEventListener('click', allumeRouge);
let boutonVert = document.getElementById('vert')
boutonVert.addEventListener('click', allumeVert);

let sequence = [];
let saisie = [];
const nbEtapes = 12;

//Séquence aléatoire
function genererSequence(){
    for (let i = 0 ; i < nbEtapes ; i++){
        sequence[i] = Math.floor(Math.random()*4);
    }
    console.table(sequence);
    return sequence
}

//Fonction qui allume les boutons en fonction de la séquence aléatoire
function lireSequence() {
    let temps = 600;
    for (let i = 0 ; i < nbEtapes ; i++){
        if (sequence[i] == 0) {
            setTimeout(allumeBleu, temps);
        }
        if (sequence[i] == 1) {
            setTimeout(allumeJaune, temps);
        }
        if (sequence[i] == 2) {
            setTimeout(allumeVert, temps);
        }
        if (sequence[i] == 3) {
            setTimeout(allumeRouge, temps);
        }
        temps = temps + 600;
    }
    saisieUser();
}

//Fonction lecture de la saisie d'utilisateur
function saisieUser() {
    for (let i = 0 ; i < nbEtapes ; i++){
        if (boutonBleu.addEventListener('click', allumeBleu) == true) {
            saisie[i] = 0
        }
        if (boutonJaune.addEventListener('click', allumeJaune) == true) {
            saisie[i] = 1
        }
        if (boutonVert.addEventListener('click', allumeVert) == true) {
            saisie[i] = 2
        }
        if (boutonRouge.addEventListener('click', allumeRouge) == true) {
            saisie[i] = 3
        }
        console.table(saisie);
    }
}

//Fonction animation de début de jeu
function demarrerJeu(){
    document.getElementById('bleu').setAttribute('class', 'off');
    document.getElementById('jaune').setAttribute('class', 'off');
    document.getElementById('rouge').setAttribute('class', 'off');
    document.getElementById('vert').setAttribute('class', 'off');

    /*setTimeout(allumeBleu, 600);
    setTimeout(allumeJaune, 1100);
    setTimeout(allumeRouge, 1600);
    setTimeout(allumeVert, 2100);*/
    genererSequence();
    setTimeout(lireSequence(), 2600);
}

//Fonctions allumage des bouttons
function allumeBleu(){
    document.getElementById('bleu').setAttribute('class', 'on');
    setTimeout(eteindreBleu,500);
}

function allumeJaune(){
    document.getElementById('jaune').setAttribute('class', 'on');
    setTimeout(eteindreJaune,500);
}

function allumeRouge(){
    document.getElementById('rouge').setAttribute('class', 'on');
    setTimeout(eteindreRouge,500);
}

function allumeVert(){
    document.getElementById('vert').setAttribute('class', 'on');
    setTimeout(eteindreVert,500);
}

//Fonctions qui éteignent les bouttons
function eteindreBleu(){
    document.getElementById('bleu').setAttribute('class', 'off');
}

function eteindreJaune(){
    document.getElementById('jaune').setAttribute('class', 'off');
}

function eteindreRouge(){
    document.getElementById('rouge').setAttribute('class', 'off');
}

function eteindreVert(){
    document.getElementById('vert').setAttribute('class', 'off');
}

