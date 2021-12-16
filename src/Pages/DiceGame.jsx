import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import './DiceGame.css'

class DiceGame extends React.Component {

    render(){
        return(
            <div className='DiceGame-content '>
                <div className="DiceGame-board-div flex">
                    <div>
                        <Player   name={'Player1'}/>
                    </div>
                    <div className="Ui-div">
                       <Ui />
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