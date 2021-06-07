let currentPlayer = 0
let currentScore, globalScore1, globalScore2, diceResult

// Variables from DOM:
    // Player1

    // Player2

    // buttons

    // dice results :

// functions :
    // gameInit
    function init(){
        // tous les scores à 0
        // tous les scores affichés en HTML
        // unitialise le currentPlayer à 0
        // écouteurs d'événement sur les boutons
    }

    // nextPlayer
    function nextPlayer(){
        // currentScore à 0
        // currentScore à 0 en HTML
        // changer le currentPlayer
        // changer les classes avec classList.toggle()
    }

    // rollDice
    function rollDice(){
        // générer nombre aléatoire entre 1 et 6 dans diceResult
        // faire un switch en fonction du résultat obtenu pour afficher le dé
        // si diceResult !=1, ajouter le résultat au current et l'afficher en HTML
        // sinon, appeler nextPlayer()
    }

    // hold
    function hold(){
        // ajouter le currentScore au globalScore du currentPlayer
        // réinitialiser le currentScore
        // afficher les scores en HTML
        // appeler checkScore pour déterminer s'il y a un gagnant
    }

    // checkScore
    function checkScore(){
        // si globalScore1 ou 2 >= 100 :
        // afficher en HTML : WINNER!
        // enlever les écouteurs d'événement
        // arrêter la propagation des événements

        // sinon, appeler nextPlayer()
    }

    // reset
    function reset(){
        // remettre les bonnes classes en HTML aux 2 joueurs
        // appeler init()
    }

// on lance le jeu au démarrage :
init()