import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";


import './DiceGame.css'

class DiceGame extends React.Component {
    state = {
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

     getRandomNumber() {
       return  Math.ceil(Math.random()*6)
    }
    switchTurn(){
        this.player1Object.isTurn = !this.player1Object.isTurn;
        this.player2Object.isTurn = !this.player2Object.isTurn;
        this.updatePlayersStates()
        return this.player1Object.isTurn? this.player1Object : this.player2Object;
    }
    getCurrentPlayer(){
        return this.player1Object.isTurn?this.player1Object:this.player2Object
    }

    doubleSix=()=>{
        console.log('66');
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
            console.log(this.state.dicesResult)
            if(result===[6,6] || result[0]+result[1]===6) return this.doubleSix();
            const currentPlayer = this.getCurrentPlayer()
            currentPlayer.currentScore+= result[0]+result[1];;
            this.updatePlayersStates()
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

    render(){
        const{player1,player2,dicesResult,gameOver,message} = this.state

        return(
            <div className='DiceGame-content '>
                <h1>Current Player Turn: {this.getCurrentPlayer().name} </h1>
                {gameOver}{message}
                <div className="DiceGame-board-div flex">
                        <Player  name={'Player1'}
                                 curentScore={player1.currentScore}
                                 totalScore ={player1.totalScore}
                                 isTurn ={player1.isTurn} />
                           <Ui dicesResult = {dicesResult}
                                callbackRoll ={this.handleRollDices}
                                callBackHold = {this.handleHoldTurn} />
                        <Player name={'Player2'}
                                curentScore={player2.currentScore}
                                totalScore ={player2.totalScore}
                                isTurn ={player2.isTurn} />
                </div>
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