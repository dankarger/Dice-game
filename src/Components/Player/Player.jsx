import React from "react";
import './Player.css'

class Player extends React.Component {
        state = {
            name:'',
            currentScore:0,
            // totalScore:0,
          }

        playerName = this.props.name

         componentDidMount() {
         this.setState( {
             name:this.playerName,
             CurrenrScore:0,
         })
         // console.log('mount')
    }

    render(){
        return(
            <>
                <div className='Player-div '>
                    <h1 className={this.props.isTurn ? 'Player-isTurn' : undefined+' Player-name'}>{this.state.name}</h1>
                    <div className="Player-score-div">
                        {/*<h2>Current Score:{this.state.currentScore}</h2>*/}
                        <h3>Current Score from props:{this.props.curentScore}</h3>
                        <div className="Player-totale-score">
                            <h2>Total Score:{this.props.totalScore}</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Player