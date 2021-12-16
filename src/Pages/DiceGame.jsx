import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import Dices from "../Components/Dice/Dice";
import './DiceGame.css'




class DiceGame extends React.Component {
    state = {
        currentTurnPlayer:'player1',
        targetScore:20,
        dicesResult:[null,null],
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
        this.setState({player1:this.player1Object});
        this.setState({player2:this.player2Object});
        return this.player1Object.isTurn? this.player1Object : this.player2Object;
    }
    getCurrentPlayer(){
        return this.player1Object.isTurn?this.player1Object:this.player2Object
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
            currentPlayer.currentScore= result[0]+result[1];;
            this.setState(
            {dicesResult:result}
           )
            this.updatePlayersStates()
         }

    handleHoldTurn = () => {
        let result= this.state.dicesResult[0]+this.state.dicesResult[1];
        const currentPlayer = this.getCurrentPlayer()
        currentPlayer.currentScore  = 0;
        currentPlayer.totalScore += result
        this.setState((prevState)=>{
            return {
                 currentTurnResult:prevState.result,
                 player1:this.player1Object,
                 player2:this.player2Object,
                 dicesResult:[0,0]
                }
            }
        )
        this.switchTurn()
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render(){
        return(
            <div className='DiceGame-content '>
                <h1>Current Player Turn:{this.getCurrentPlayer().name} </h1>
                <div className="DiceGame-board-div flex">
                    <div>
                        <Player  name={'Player1'}
                                 curentScore={this.state.player1.currentScore}
                                 totalScore ={this.state.player1.totalScore} />
                    </div>
                        <div>
                           <Ui/>
                            <Dices />
                            <p>{this.state.dicesResult[0] }||{this.state.dicesResult[1]}</p>
                            <button onClick={()=>{this.handleRollDices()}}> Roll Dices</button>
                            <button onClick={()=>{this.handleHoldTurn()}}> Hold Turn</button>
                        </div>
                    <div className=''>
                        <Player name={'Player2'}
                                curentScore={this.state.player2.currentScore}
                                totalScore ={this.state.player2.totalScore} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DiceGame