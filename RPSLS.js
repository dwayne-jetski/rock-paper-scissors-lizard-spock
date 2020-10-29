"use strict"

class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.gestureArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
    RunGame(){

        let playerArray = this.createPlayers(this.playerNumbers())
        this.player1 = playerArray[0];
        this.player2 = playerArray[1]
        console.log(this.player1);
        console.log(this.player2);

        do{

            this.player1.gesture = this.promptPlayerGestures(this.player1, this.gestureArray);
            if (this.player2.name != "HAL 3000"){
                this.player2.gesture = this.promptPlayerGestures(this.player2, this.gestureArray);
            }
            else{
                this.player2.gesture = this.generateComputerGesture(this.gestureArray);
            }

            playerArray = this.getResults(this.player1, this.player2)
            this.player1 = playerArray[0];
            this.player2 = playerArray[1]

            if(this.player1.wins === 2 ){
                break
            }
            else if(this.player2.wins === 2){
                break
            }

        }while(true)

        let continueOrStop = "";
        do{
            continueOrStop = prompt("Would you like to continue? [y/n]:" )
            continueOrStop = continueOrStop.toLowerCase();
            if (continueOrStop.charAt(0) === 'y'){
                this.RunGame
            }
            else{
                break
            }
        }while(true)
        
    }

    playerNumbers (){
        let userInput;
        do{
            userInput = prompt("How many player would you like, 1 or 2? [enter a number]: ")
            userInput = parseInt(userInput);
            if (userInput === 1){
                break
            }
            else if (userInput === 2){
                break
            }
            alert("Not a valid input");
        }while(true)

        return userInput;
    } 

    createPlayers(number, playersArray = []){
        if (number === 1){
            let name = prompt("What is your name?")
            playersArray[0] = new Human(name);
            playersArray[1] = new Computer();
        }
        else{
            let nameOne = prompt("Player One, what is your name?");
            let nameTwo = prompt("Player Two, what is your name?");
            playersArray[0] = new Human(nameOne);
            playersArray[1] = new Human(nameTwo);
        }

        return playersArray;
    }

    promptPlayerGestures(player, gestureArray){
    //take in a number value, make return value = gestureArray[return value]
    let userInput; 
    do{
        userInput = prompt(player.name + " What do you choose [enter approipriate number]: \n1) Rock \n2) Paper \n3) Scissors \n4) Lizard \n5) Spock");
        userInput = parseInt(userInput);
        if (userInput > 0 && userInput < 6){
            break
        }
    }while(true)
        
    userInput = gestureArray[userInput-1];
    console.log(userInput);

    return userInput;
    }

    generateComputerGesture(gestureArray){
        //randomly generate a number 1-5 and use same logic as promptPlayerGestures to assign gesture based on numerical value
        let randomNumber = Math.floor(Math.random() * 5);
        let computerGesture = gestureArray[randomNumber];

        return computerGesture;
    }

    getResults(player1, player2){
        //compare the two gestures to see who wins
        let resultsArray = ["", ""];
        let winningPlayer;
        resultsArray[0] = this.numberOf(player1.gesture);
        resultsArray[1] = this.numberOf(player2.gesture);

        console.log(resultsArray[0]);
        console.log(resultsArray[1]);
        let resultsTable = []; 
        resultsTable = 
        //   R    P  SCIS   L   SP
        [ [ 'd', 'w', 'l', 'l', 'w'], //rock
        [ 'l', 'd', 'w', 'w', 'l'], //paper
        [ 'w', 'l', 'd', 'l', 'w'], //scissors
        [ 'w', 'l', 'w', 'd', 'l'], //lizard
        [ 'l', 'w', 'l', 'w', 'd'], //draw
        ];  //win or lose is based on horizontal person's perspective

        let winningResult = resultsTable[resultsArray[1]] [resultsArray[0]];

        

        
        if (winningResult === 'w'){
                player1.wins++
                winningPlayer = player1;
            }
        else if (winningResult === 'l'){
                player2.wins++
                winningPlayer = player2;
            } 

        resultsArray[0] = player1;
        resultsArray[1] = player2;

        if(winningPlayer === null || winningPlayer === undefined){
            alert(player1.name + " threw: " + player1.gesture + "\n" + player2.name + " threw: " + player2.gesture + "\nNobody wins... :(");
        }
        else{
            alert(player1.name + " threw: " + player1.gesture + "\n" + player2.name + " threw: " + player2.gesture + "\n" + winningPlayer.name + " IS THE WINNER!");
        }
        return resultsArray; 
    }

    numberOf(playerGesture){
        let result;
        if (playerGesture === "rock"){
            result = 0;
        }
        else if (playerGesture === "paper"){
            result = 1;
        }
        else if (playerGesture === "scissors"){
            result = 2;
        }
        else if (playerGesture === "lizard"){
            result = 3;
        }
        else if (playerGesture === "spock"){
            result = 4;
        }
        return result;
    }

}


class Player {

    constructor(){
        this.name = "";
        this.wins = 0;
        this.gesture = null;
    }
}

class Human extends Player{

    constructor(name){
        super();
        this.name = name
    }
}

class Computer extends Player{

    constructor(){
        super();
        this.name = "HAL 3000";
    }

}

let game = new Game();
game.RunGame();