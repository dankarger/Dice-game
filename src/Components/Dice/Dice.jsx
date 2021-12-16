import React from "react";
import './Dice.css'


class Dices extends React.Component {
    state = {dicesResult:this.props.dicesResult}

    componentDidMount() {
        // this.setState(()=>{
        //     dicesResult:this.props.dicesResult
        //
        // })
    }

    render() {
        return(
            <div>
                <p>Diiiiiices</p>
                {this.state.dicesResult}

            </div>
        )
    }
}

export default Dices