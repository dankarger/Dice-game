import React from "react";
import './Player.css'

class Player extends React.Component {
        state = {
            name:'',
            currentScore:0,
            totalScore:0,
          }

        playerName = this.props.name

         componentDidMount() {
         this.setState( {
             name:this.playerName,
             CurrenrScore:0,
         })
         console.log('mount')
    }

    render(){
        return(
            <>
                <div className='Player-div'>
                    <h1>{this.state.name}</h1>
                    <p>{this.props.test}</p>
                    <div className="Player-score-div">
                        <h2>Current Score:{this.state.currentScore}</h2>
                        <div className="Player-totale-score">
                            <h2>Total Score:{this.state.totalScore}</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Player