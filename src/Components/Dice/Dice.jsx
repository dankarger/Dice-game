import React from "react";
import './Dice.css'

class Dices extends React.Component {
    state = {
        dicesResult:[0,0],
        animation:false,
        isDicesImgDiv:false,
    }

    componentDidMount() {
        this.setState({dicesImgDiv:false})
        }


    diceImages = {
        0:'/assets/images/blank.png',
        1:"/assets/images/dice-1.png",
        2:"/assets/images/dice-2.png",
        3:"/assets/images/dice-3.png",
        4:"/assets/images/dice-4.png",
        5:"/assets/images/dice-5.png",
        6:'/assets/images/dice-6.png',
    }
    handleDiceAnimation = ()=>{
        this.setState({
            animation:true
        })
    }
    render() {
        let className = 'Dices-div';
        if (this.state.animation) {
            className += ' Dices-animation';
        }
        const{dicesResult}=this.props
        return(
            <div className={className}>
                <div className={className}>
                    <img onChange={this.handleDiceAnimation} src={this.diceImages[dicesResult[0]]}  alt='' />
                    <img src={this.diceImages[dicesResult[1]]}  alt=" "/>
                </div>
            </div>
        )
    }
}

export default Dices