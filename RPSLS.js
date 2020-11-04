"use strict"
class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.gestureArray = [new Rock(), new Paper(), new Scissors() , new Lizard(), new Spock()];
    }


    RunGame(){

        let playerArray = this.createPlayers(this.playerNumbers())
        this.player1 = playerArray[0];
        this.player2 = playerArray[1]

        do{

            this.player1.promptPlayerGestures();

            this.player2.promptPlayerGestures();

            this.getResults()

            if(this.player1.wins === 2 ){
                this.displayWinner(this.player1);
                break
            }
            else if(this.player2.wins === 2){
                this.displayWinner(this.player2);
                break
            }

        }while(true)

        this.continueOrStop()
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
            playersArray[0] = new Human(name, this.gestureArray);
            playersArray[1] = new Computer(this.gestureArray);
        }
        else{
            let nameOne = prompt("Player One, what is your name?");
            let nameTwo = prompt("Player Two, what is your name?");
            playersArray[0] = new Human(nameOne, this.gestureArray);
            playersArray[1] = new Human(nameTwo, this.gestureArray);
        }

        return playersArray;
    }

    getResults(){
        //compare the two gestures to see who wins
        let resultsArray = ["", ""];
        let winningPlayer;

        let resultsTable = []; 
        resultsTable = [
        // R    P  SCIS   L   SP
        [ 'd', 'w', 'l', 'l', 'w'], //rock
        [ 'l', 'd', 'w', 'w', 'l'], //paper
        [ 'w', 'l', 'd', 'l', 'w'], //scissors
        [ 'w', 'l', 'w', 'd', 'l'], //lizard
        [ 'l', 'w', 'l', 'w', 'd'], //spock
        ];  //win or lose is based on horizontal person's perspective
        ; 
        let winningAdjectiveTable = [
        // R    P  SCIS   L   SP
        [ null, 'covers', 'crushes', 'crushes', 'vaporizes'], //rock
        [ 'covers', null, 'cuts', 'eats', 'disproves'], //paper
        [ 'crushes', 'cuts', null, 'decapitates', 'smashes'], //scissors
        [ 'crushes', 'eats', 'decapitates', null, 'poisons'], //lizard
        [ 'vaporizes', 'disproves', 'smashes', 'poisons', null], //spock
        ];  //win or lose is based on horizontal person's perspective

        let winningResult = resultsTable[this.player2.gesture.id] [this.player1.gesture.id];
        let winningAdjective = winningAdjectiveTable[this.player2.gesture.id] [this.player1.gesture.id];
        let losingPlayer;
        if (winningResult === 'w'){
                this.player1.wins++
                winningPlayer = this.player1;
                losingPlayer = this.player2;
            }
        else if (winningResult === 'l'){
                this.player2.wins++
                winningPlayer = this.player2;
                losingPlayer = this.player1
            } 

        
        if(winningPlayer === null || winningPlayer === undefined){
            alert(this.player1.name + " threw: " + this.player1.gesture.name+ "\n" + this.player2.name + " threw: " + this.player2.gesture.name + "\nNobody wins... :(");
        }
        else{
            alert(this.player1.name + " threw: " + this.player1.gesture.name + "\n" + this.player2.name + " threw: " + this.player2.gesture.name 
            + "\n" + winningPlayer.gesture.name + " " +  winningAdjective + " " + losingPlayer.gesture.name
            + "\n\n" + winningPlayer.name + " IS THE WINNER OF THE ROUND!");
        }
        
    }

    displayWinner(winner){
        alert(winner.name + " IS THE WINNER OF THE GAME!")
    }

    continueOrStop(){
        let continueOrStop = "";
        do{
            continueOrStop = prompt("Would you like to continue? [y/n]:" )
            continueOrStop = continueOrStop.toLowerCase();
            if (continueOrStop.charAt(0) === 'y'){
                alert("We'll start a new game for you!")
                this.RunGame();
            }
            else if (continueOrStop.charAt(0) === 'n'){
                alert("Thanks for playing!")
                break
            }
            alert("Not a valid input...")
        }while(true)
        
    }
}

class Player {

    constructor(gestureArray){
        this.name = "";
        this.wins = 0;
        this.gestureArray = gestureArray;
        this.gesture = null; 
    }
}

class Human extends Player{

    constructor(name, gestureArray){
        super(gestureArray);
        this.name = name
    }

    promptPlayerGestures(){
        let userInput;
      
    
        do{
            userInput = prompt(this.name + " What do you choose [enter approipriate number]: \n1) Rock \n2) Paper \n3) Scissors \n4) Lizard \n5) Spock");
            userInput = parseInt(userInput);
            if (userInput > 0 && userInput <= this.gestureArray.length){
                break
            }
            alert("Not a valid input...")
        }while(true)
        
        this.gesture = this.gestureArray[userInput-1];
    }

}

class Computer extends Player{

    constructor(gestureArray){
        super(gestureArray);
        this.name = this.randomNameGenerator();
    }

    randomNameGenerator(){
        let nameArray = ['Tony', 'Ralph', 'HAL 3000', 'Pikachu', 'Luffy', 'Wee Hughie', 'Osmosis Jones', 'Deep Thought']

        return nameArray[Math.floor(Math.random() * nameArray.length)]
    }

    promptPlayerGestures(){
        let userInput;
      
        
        userInput = Math.floor(Math.random() * this.gestureArray.length);
    
        this.gesture = this.gestureArray[userInput];
    }

}

class Gesture{

    constructor(){
        this.name = "";
        this.id;
    }
}

class Rock extends Gesture{
    
    constructor(){
        super();
        this.name = "rock";
        this.id = 0;
    }
}

class Paper extends Gesture{
    
    constructor(){
        super();
        this.name = "paper";
        this.id = 1;
    }
}

class Scissors extends Gesture{
    
    constructor(){
        super();
        this.name = "scissors";
        this.id = 2;
    }
}

class Lizard extends Gesture{
    
    constructor(){
        super();
        this.name = "lizzard";
        this.id = 3;
    }
}

class Spock extends Gesture{
    
    constructor(){
        super();
        this.name = "spock";
        this.id = 4;
    }
}

let game = new Game();