import React from "react";
import './Dice.css'


class Dices extends React.Component {
    state = {
        dicesResult:[0,0],
        animation:''
    }

    componentDidMount() {
        this.setState({animation:' '})

        }

    activatAnimation() {
        this.setState({animation:' '})

    }


    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    diceImages = {
        0:'',
        1:"/assets/images/dice-1.png",
        2:"/assets/images/dice-2.png",
        3:"/assets/images/dice-3.png",
        4:"/assets/images/dice-4.png",
        5:"/assets/images/dice-5.png",
        6:'/assets/images/dice-6.png',
    }

    render() {
        const{dicesResult}=this.props
        const{animation}=this.state
        return(
            <div className='Dices-div'>
                <p>{dicesResult[0]}</p>
                <img className={animation} src={this.diceImages[dicesResult[0]]}  alt="dice1"/>
                <img src={this.diceImages[dicesResult[1]]}  alt="dice2"/>
                <p>{dicesResult[1]}</p>
            </div>
        )
    }
}

export default Dices