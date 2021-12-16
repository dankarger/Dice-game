import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import './DiceGame.css'

class DiceGame extends React.Component {
    state = {
        currentTurn:'player1',
        targetScore:20,
        player1Score:0,
        player2Score:0,
        dicesResult:[0,0],
        currentTurnResult:0,
    }
     rollDices=()=> {

            this.setState(
                {dicesResult:[2,3]}
            )

         console.log('resu;t',this.state.dicesResult);
         return [2,4]

        }

    componentDidMount() {
        // this.setState(
        //     {dicesResult:this.rollDices()}
        // )
        // console.log(this.state.dicesResult)

    }

    render(){
        return(
            <div className='DiceGame-content '>
                <div className="DiceGame-board-div flex">
                    <div>
                        <Player   name={'Player1'}/>
                    </div>
                        <div>
                           <Ui diceResult = {this.state.dicesResult}/>
                            {this.state.dicesResult[0] }{this.state.dicesResult[1] }
                            <button onClick={this.rollDices}> Roll Dices</button>
                        </div>
                    <div>
                        <Player name={'Player2'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiceGame