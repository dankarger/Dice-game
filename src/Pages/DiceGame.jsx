import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import './DiceGame.css'

class DiceGame extends React.Component {
    state = {
        currentTurnPlayer:'player1',
        targetScore:20,
        dicesResult:[null,null],
        currentTurnResult:null,
        player1:{
            currentScore:0,
            totalScore:0,
            isTurn:true
        },
        player2:{
            currentScore:0,
            totalScore:0,
            isTurn:false
        }
    }

    player1Object={
        currentScore:0,
        totalScore:0,
        isTurn:true
    }
    player2Object={
        currentScore:0,
        totalScore:0,
        isTurn:true
    }

     getRandomNumber() {
       return  Math.ceil(Math.random()*6)
    }
     rollDices= () => {
            let result =  [this.getRandomNumber(),this.getRandomNumber()]
            this.setState(()=>{
               return {dicesResult:result}}
            )
         this.player1Object.currentScore=result
         // this.setState(()=>{
         //
         // })
         const resultSum = result[0]+result[1]
         this.updateScore(this.player1Object,resultSum)
     }
         // return [2,4];


    holdTurn = () => {
        let result= this.state.dicesResult[0]+this.state.dicesResult[1];
        this.player1Object.currentScore  = 0;
        this.player1Object.totalScore += result
        this.setState((prevState)=>{
            return {
                currentTurnResult:prevState.result,
                 player1:this.player1Object,
                 dicesResult:[0,0]
                }
            }
        )
    }
    updateScore = (player,result) =>{
        player.currentScore = result;
        this.setState((prevState)=>{
            return {
                currentTurnResult:result,
                player1:player
            }
        })

    }
    componentDidMount() {

        // this.setState(
        //     {dicesResult:this.rollDices()}
        // )
        // console.log(this.state.dicesResult)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this turn result',this.state.player1)
        console.log('cuuur',this.state.player1.currentScore)
        // this.updateScore(this.player1Object)
    }

    render(){
        return(
            <div className='DiceGame-content '>
                <div className="DiceGame-board-div flex">
                    <div>
                        <Player  name={'Player1'}
                                 curentScore={this.state.player1.currentScore}
                                 totalScore ={this.state.player1.totalScore}
                        />
                    </div>
                        <div>
                           <Ui/>
                            <p>{this.state.dicesResult[0] }{this.state.dicesResult[1]}</p>

                            <button onClick={()=>{this.rollDices()}}> Roll Dices</button>
                            <button onClick={()=>{this.holdTurn()}}> Hold Turn</button>
                        </div>
                    <div>
                        <Player name={'Player2'}
                                curentScore={this.state.player2.currentScore}
                                totalScore ={this.state.player2.totalScore}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DiceGame