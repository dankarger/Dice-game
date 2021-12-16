import React from "react";
import Dices from "../Dice/Dice";
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
        const{dicesResult}=this.props
        return (
            <div className='Ui-div'>
              <h1>UI</h1>
                <Dices dicesResult = {dicesResult}/>
                {/*<p>{dicesResult}</p>*/}
                {/*<p>{dicesResult[0]}</p>*/}
                {/*<p>{dicesResult[1]}</p>*/}
                {/*<button onClick={}> Roll Dice</button>*/}
            </div>
        )
    }
}

export default Ui