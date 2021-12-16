import React from "react";
import Dices from "../Dice/Dice";
import Button from "../Common/Buttons/Button";

import './Ui.css'


class Ui extends React.Component {
        state = {
            dicesResult:[]
        }

    componentDidMount() {
            this.setState({dicesResult:this.props.dicesResult})
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    //     this.setState({diceResult:this.props.diceResult})
    // }
    render() {
        const{dicesResult, callbackRoll,callBackHold}=this.props
        return (
            <div className='Ui-div'>
              <h1>UI</h1>

                <Dices dicesResult = {dicesResult}/>
                <div>
                    <Button name='Roll Dice'  callBack={callbackRoll}/>
                    <Button name='Hold Turn'  callBack={callBackHold}/>
                </div>

            </div>
        )
    }
}

export default Ui