import React from "react";
import Dices from "../Dice/Dice";
import Button from "../Common/Buttons/Button";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

import './Ui.css'


class Ui extends React.Component {
        state = {
            dicesResult:[]
        }

    componentDidMount() {
            this.setState({dicesResult:this.props.dicesResult})
    }

    render() {
        const {dicesResult, callbackRoll,
            callBackHold,callBackNewGame,
            isGameOver,isGameStart,targetScoreProp } = this.props
        return (
            <>
            <div className='Ui-div'>

                <Button name='New Game' callBack={callBackNewGame} classNameProp='Button-new-game '/>
                <div className="Ui-target-score-div">
                    <h4>Target: {targetScoreProp}</h4>
                </div>
                {/*<h1 className='Ui-header'>Turn: {playerTurn}</h1>*/}
                {/*<div>*/}
                {/*</div>*/}
                <Dices dicesResult = {dicesResult}/>
                <div className='Ui-buttons-div'>
                    <Button name='Roll Dice'  callBack={callbackRoll} classNameProp='Button-roll-dice ' disabledProp={isGameOver}/>
                    <Button name='Hold Turn'  callBack={callBackHold} classNameProp='Button-hold-turn ' disabledProp={isGameOver}/>
                </div>
            <MusicPlayer isGameStart={isGameStart}/>
            </div>
            </>
        )
    }
}

export default Ui