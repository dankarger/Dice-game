import React from "react";
import './Ui.css'


class Ui extends React.Component {
        state = {
            dicesResult:[]
        }

    componentDidMount() {
            this.setState({diceResult:this.props.diceResult})
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    //     this.setState({diceResult:this.props.diceResult})
    // }
    render() {

        return (
            <div className='Ui-div'>
              <h1>UI</h1>
                <p>{this.state.dicesResult}</p>
                {/*<button onClick={}> Roll Dice</button>*/}
            </div>
        )
    }
}

export default Ui