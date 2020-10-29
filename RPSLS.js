"use strict"

class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.gestureArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        this.gestureArray = [];
    }
    


playerNumbers (){

    //ask if 1 or 2 player return 1 or 2
}

promptPlayerGestures(player, gestureArray){
 //take in a number value, make return value = gestureArray[return value]
}
generateComputerGesture(computerGesture = "", gestureArray){
    //randomly generate a number 1-5 and use same logic as promptPlayerGestures to assign gesture based on numerical value
}

compareGestures(){
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
