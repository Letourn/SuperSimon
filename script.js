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
let saisie = null;
let etape= 0;
const nbEtapes = 4;

function generersequence(){
    for (let i = 0 ; i < nbEtapes ; i++){
        sequence[i] = Math.floor(Math.random()*4);
    }
    console.tab(sequence)
    return sequence
}
//Fonction clique sur le boutton
function demarrerJeu(){
    document.getElementById('bleu').setAttribute('class', 'off');
    document.getElementById('jaune').setAttribute('class', 'off');
    document.getElementById('rouge').setAttribute('class', 'off');
    document.getElementById('vert').setAttribute('class', 'off');

    setTimeout(allumeBleu, 600);
    setTimeout(allumeJaune, 1100);
    setTimeout(allumeRouge, 1600);
    setTimeout(allumeVert, 2100);
    generersequence()
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

