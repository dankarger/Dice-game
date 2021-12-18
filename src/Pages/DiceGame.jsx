import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import Message from "../Components/Message/Message";

import './DiceGame.css'

class DiceGame extends React.Component {
    state = {
        isMessage:true,
        gameOver:false,
        message:null,
        currentTurnPlayer:'player1',
        targetScore:20,
        dicesResult:[0,0],
        currentTurnResult:null,
        player1: {
            name:'Player1',
            currentScore:0,
            totalScore:0,
            isTurn:true
        },
        player2: {
            name:'Player2',
            currentScore:0,
            totalScore:0,
            isTurn:false
        }
    }

    // Shallow copy of players state
    player1Object={
        name:'Player1',
        currentScore:0,
        totalScore:0,
        isTurn:true
    }
    player2Object={
        name:'Player2',
        currentScore:0,
        totalScore:0,
        isTurn:false
    }

    soundsList = {
        buttonSound:'/assets/sounds/switch.wav',
        switchPlayersSound:'/assets/sounds/melodic3_affirm.wav',

    }

     getRandomNumber() {
       return  Math.ceil(Math.random()*6)
    }
    switchTurn(){
        this.player1Object.isTurn = !this.player1Object.isTurn;
        this.player2Object.isTurn = !this.player2Object.isTurn;
        this.updatePlayersStates()
        this.playSound(this.soundsList.buttonSound)
        this.playSound(this.soundsList.switchPlayersSound)

        return this.player1Object.isTurn? this.player1Object : this.player2Object;
    }
    getCurrentPlayer(){
        return this.player1Object.isTurn?this.player1Object:this.player2Object
    }

    doubleSix=()=>{
        const currentPlayer= this.getCurrentPlayer()
        currentPlayer.currentScore=0;
        this.updatePlayersStates()
        this.switchTurn()
    }
    checkWin=()=>{
        const{targetScore,player1,player2}=this.state
        if(player1.totalScore>targetScore){
            return this.winGame(player1.name)
        }else if(player2.totalScore>targetScore){
            return this.winGame(player2.name)
        }
    }
    winGame(winner){
        console.log('winner',winner)
        this.setState({message:winner +" is the Winner",
            gameOver:true}
            )

    }
    updatePlayersStates =()=>{
        this.setState({
            player1:this.player1Object,
            player2:this.player2Object
        })
    }

    handleRollDices= () => {
            let result =  [this.getRandomNumber(),this.getRandomNumber()];
            this.setState(
                {dicesResult:result}
            )
            if(result===[6,6] || result[0]+result[1]===6) return this.doubleSix();
            const currentPlayer = this.getCurrentPlayer()
            currentPlayer.currentScore+= result[0]+result[1];;
            this.updatePlayersStates()
            this.playSound(this.soundsList.buttonSound)
         }
    playSound(sound) {
        let music = new Audio(sound);
        music.play();
    }
    handleHoldTurn = () => {
        const currentPlayer = this.getCurrentPlayer()
        currentPlayer.totalScore += currentPlayer.currentScore;
        currentPlayer.currentScore  = 0;
        this.setState((prevState)=>{
            return {
                 currentTurnResult:prevState.result,
                 player1:this.player1Object,
                 player2:this.player2Object,
                 dicesResult:[0,0]
                }
            }
        )
        this.checkWin()
        this.switchTurn()
    }

    showMessage=()=>{
        if(this.state.isMessage) {
            return (
                <>
                    <Message />
                </>
            )
        }
    }

    handleNewGame=()=>{
        this.playSound(this.soundsList.buttonSound)
        this.setState(
            {
            gameOver:false,
            message:null,
            currentTurnPlayer:'player1',
            targetScore:20,
            dicesResult:[0,0],
            currentTurnResult:null,
            player1: {
            name:'Player1',
                currentScore:0,
                totalScore:0,
                isTurn:true
        },
        player2: {
            name:'Player2',
                currentScore:0,
                totalScore:0,
                isTurn:false
        }
    })
    }

    render(){
        const{player1,player2,dicesResult,gameOver,message} = this.state

        return(
            <div className={this.state.player1.isTurn?'DiceGame-content ' :'DiceGame-content ' }>
                <div className={this.state.player1.isTurn?"DiceGame-background-img-div ":"DiceGame-background-img-div flip" }>
                    <div className={this.state.player1.isTurn?" ":" flip" }>

                    <h1 className='DiceGame-header'>DICE GAME</h1>
                        {gameOver}{message}
                        <div className="DiceGame-board-div">
                                <Player  name={'Player1'}
                                         curentScore={player1.currentScore}
                                         totalScore ={player1.totalScore}
                                         isTurn ={player1.isTurn} />
                                   <Ui playerTurn =  {this.getCurrentPlayer().name}
                                         dicesResult = {dicesResult}
                                         callbackRoll ={this.handleRollDices}
                                         callBackHold = {this.handleHoldTurn}
                                         callBackNewGame={this.handleNewGame}/>
                                <Player name={'Player2'}
                                         curentScore={player2.currentScore}
                                         totalScore ={player2.totalScore}
                                         isTurn ={player2.isTurn} />
                        </div>
                        <div className={gameOver?"DiceGame-winning-message": '.DiceGame-winning-message  .DiceGame-winning-message-show'}>  <h1>{message}</h1> </div>
                    </div>
                </div>
                {this.showMessage()}
            </div>
        )
    }
}

export default DiceGame

// TODO: add newGame function
// TODO:make empty dice
// TODO:add music and sounds
// TODO:Responsive
// TODO: readme.md
// TODO: themes
// TODO:winner state
// TODO: opening page
// TODO:favicon
// TODO:meta tags
// TODO:normalize
// TODO:animations