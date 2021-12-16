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
        dicesResult:[1,1],
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
        // this.setState((prev)=>(prev.player1.isTurn=!prev.player1.isTurn));
        this.player1Object.isTurn = !this.player1Object.isTurn;
        this.player2Object.isTurn = !this.player2Object.isTurn;
        this.updatePlayersStates()
        return this.player1Object.isTurn? this.player1Object : this.player2Object;
    }
    getCurrentPlayer(){
        return this.player1Object.isTurn?this.player1Object:this.player2Object
    }

    checkWin=()=>{
        const{targetScore,player1,player2}=this.state
        // console.log(targetScore,player1,player2)
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
            const currentPlayer = this.getCurrentPlayer()
            currentPlayer.currentScore+= result[0]+result[1];;
            this.setState(
            {dicesResult:result}
           )
            this.updatePlayersStates()
         }

    handleHoldTurn = () => {
        // let result= this.state.dicesResult[0]+this.state.dicesResult[1];
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

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render(){
        const{player1,player2,dicesResult,gameOver,message} = this.state

        return(
            <div className='DiceGame-content '>
                <h1>Current Player Turn: {this.getCurrentPlayer().name} </h1>
                {gameOver}{message}
                <div className="DiceGame-board-div flex">
                    {/*<div>*/}
                        <Player  name={'Player1'}
                                 curentScore={player1.currentScore}
                                 totalScore ={player1.totalScore}
                                 isTurn ={player1.isTurn}
                        />
                    {/*</div>*/}
                        {/*<div>*/}
                           <Ui dicesResult = {dicesResult}
                                callbackRoll ={this.handleRollDices}
                                callBackHold = {this.handleHoldTurn}
                           />
                            {/*<Dices dicesResult = {dicesResult} />*/}
                            {/*<p>{this.state.dicesResult[0] }||{this.state.dicesResult[1]}</p>*/}
                            {/*<button onClick={()=>{this.handleRollDices()}}> Roll Dices</button>*/}
                            {/*<button onClick={()=>{this.handleHoldTurn()}}> Hold Turn</button>*/}
                            {/*<Button name='Roll Dices2' callBack={this.handleRollDices}/>*/}
                            {/*<Button name='Hold Turn' callBack={this.handleHoldTurn}/>*/}
                        {/*</div>*/}
                    {/*<div>*/}
                        <Player name={'Player2'}
                                curentScore={player2.currentScore}
                                totalScore ={player2.totalScore}
                                isTurn ={player2.isTurn}
                        />
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default DiceGame