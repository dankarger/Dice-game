import React from "react";
import './Player.css'

class Player extends React.Component {
        state = {
            name:'',
            currentScore:0,
          }
        playerName = this.props.name
         componentDidMount() {
         this.setState( {
             name:this.playerName,
             CurrentScore:0,
         })
    }

    render(){
        return(
            <>
                    <div className={this.props.isTurn ? 'Player-isTurn Player-div' : ' Player-name Player-div'}>
                    <h1 className={this.props.isTurn ? 'Player-isTurn ' : ' Player-name'}>{this.state.name}</h1>
                    <div className="Player-score-div">
                        <h1 className={this.props.isTurn ? ' Player-score  current-player ' : ' Player-score '} >{this.props.curentScore}</h1>
                        <div className="Player-total-score">
                            <h2>Total: {this.props.totalScore}</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Player