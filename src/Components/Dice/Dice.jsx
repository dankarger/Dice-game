import React from "react";
import './Dice.css'


class Dices extends React.Component {
    state = {dicesResult:[0,0]}

    componentDidMount() {
        // this.setState(()=>{
        //     dicesResult:this.props.dicesResult
        //
        // })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.setState(()=>{
    //         dicesResult:this.props.dicesResult
    //
    //     })
    // }

    render() {
        return(
            <div>
                <p>Diiiiiices</p>
                {this.props.dicesResult[0]}{this.props.dicesResult[1]}

            </div>
        )
    }
}

export default Dices