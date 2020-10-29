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
            this.player2.gesture = this.generateComputerGesture();
        }

        this.compareGestures(player1.gesture, player2.gesture)

        this.showResults();
        if(this.player1.wins === 2 ){
            break
        }
        else if(this.player2.wins === 2){
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
generateComputerGesture(computerGesture = "", gestureArray){
    //randomly generate a number 1-5 and use same logic as promptPlayerGestures to assign gesture based on numerical value
}

compareGestures(player1, player2){
    //compare the two gestures to see who wins
}

showResults(){
    //show results of the round
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