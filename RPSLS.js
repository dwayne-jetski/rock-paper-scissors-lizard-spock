"use strict"

class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.gestureArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        this.gestureArray = [];
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
