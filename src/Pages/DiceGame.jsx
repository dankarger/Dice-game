import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import './DiceGame.css'

class DiceGame extends React.Component {
    state = {
        currentTurnPlayer:'player1',
        targetScore:20,
        player1Score:0,
        player2Score:0,
        dicesResult:[null,null],
        currentTurnResult:0,
        player1:{
            currentScore:0,
            totalscore:0,
        },
        player2:{
            currentScore:0,
            totalscore:0,
        }

    }

    player1Object={
        currentScore:0,
        totalscore:0,
    }
     rollDices= () => {
            this.setState((prev)=>{
               return {dicesResult:[2,3]}}
            )

         let result= this.state.dicesResult[0]+this.state.dicesResult[1];
         this.player1Object.currentScore = result;
         return {
             currentTurnResult:result,
             player1:this.player1Object
         }
     }
         // return [2,4];


    holdTurn = ()=>{
        let result= this.state.dicesResult[0]+this.state.dicesResult[1];
        this.player1Object.currentScore += result;
        this.player1Object.totalscore+=result
        this.setState((prevState)=>{
            return {
                currentTurnResult:result,
                 player1:this.player1Object
                }
            }

        )
        console.log(this.state.player1.currentScore)
    }
    updateScore= () =>{

    }
    componentDidMount() {
        // this.setState(
        //     {dicesResult:this.rollDices()}
        // )
        // console.log(this.state.dicesResult)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this turn result',this.state.player1)
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
                           <Ui diceResult = {this.state.dicesResult}/>
                            {this.state.dicesResult[0] }{this.state.dicesResult[1] }
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