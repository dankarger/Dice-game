import React from "react";
import './Dice.css'


class Dices extends React.Component {
    state = {
        dicesResult:[0,0],
        animation:'',
        isDicesImgDiv:false,
    }

    componentDidMount() {
        this.setState({dicesImgDiv:false})
        }

    activatAnimation() {
        this.setState({animation:' '})

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // if(this.props.dicesResult!==[0,0]){
        //     this.setState({dicesImgDiv:true})
        // }
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

    render() {
        let className = 'Dices-div';
        if (this.state.isDicesImgDiv) {
            className += ' Dices-animation';
        }
        const{dicesResult}=this.props
        const{animation,dicesImgDiv}=this.state
        return(
            <div className={className}>
                <p>{dicesResult[0]}</p>
                <div className={className}>
                    <img className={animation} src={this.diceImages[dicesResult[0]]}  alt='' />
                    <img src={this.diceImages[dicesResult[1]]}  alt=" "/>
                </div>
                <p>{dicesResult[1]}</p>
            </div>
        )
    }
}

export default Dices