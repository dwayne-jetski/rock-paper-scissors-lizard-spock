"use strict"

class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.gestureArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        this.gestureArray = [];
    }
RunGame(){

    //playerNumbers();
    this.createPlayers(1);
    console.log(player1);
    console.log(player2);

    do{
    player1.gesture = this.promptPlayerGestures(this.player1);
    if (player2.name != "Hal 3000"){
        player2.gesture = this.promptPlayerGestures(this.player2);
    }
    else{
        player2.gesture = this.generateComputerGesture();
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

    //ask if 1 or 2 player return 1 or 2
}

createPlayers(number){
    if (number === 1){
        let name = prompt("What is your name?")
        this.player1 = new Human(name);
        this.player2 = new Computer();
    }
    else{
        let nameOne = prompt("Player One, what is your name?");
        let nameTwo = prompt("Player Two, what is your name?");
        this.player1 = new Human(nameOne);
        this.player2 = new Human(nameTwo);
    }
}

promptPlayerGestures(player, gestureArray){
 //take in a number value, make return value = gestureArray[return value]
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
