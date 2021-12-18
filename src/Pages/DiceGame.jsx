import React from "react";
import Player from "../Components/Player/Player";
import Ui from "../Components/Ui/Ui";
import Message from "../Components/Message/Message";
import OpeningPage from "./OpeningPage";

import './DiceGame.css'

class DiceGame extends React.Component {
    state = {
        isOpeningPage: true,
        themeColor:'blue',
        isGameStart:false,
        isMessageDouble6:false,
        isGameOver:false,
        messageText:null,
        currentTurnPlayer:'player1',
        targetScore:0,
        dicesResult:[0,0],
        currentTurnResult:null,
        player1: {
            name:'Player1',
            currentScore:0,
            totalScore:0,
            isTurn:true
        },
        player2: {
            name:'Player2',
            currentScore:0,
            totalScore:0,
            isTurn:false
        }
    }

    // Shallow copy of players state
    player1Object={
        name:'Player1',
        currentScore:0,
        totalScore:0,
        isTurn:true
    }
    player2Object={
        name:'Player2',
        currentScore:0,
        totalScore:0,
        isTurn:false
    }

    soundsList = {
        buttonSound:'/assets/sounds/switch.wav',
        switchPlayersSound:'/assets/sounds/message3.wav',
        message:'/assets/sounds/melodic3_affirm.wav',
        win:'/assets/sounds/win.wav'

    }

     getRandomNumber() {
       return  Math.ceil(Math.random()*6)
    }
    switchTurn(){
        this.player1Object.isTurn = !this.player1Object.isTurn;
        this.player2Object.isTurn = !this.player2Object.isTurn;
        this.updatePlayersStates()
        this.playSound(this.soundsList.buttonSound)
        // this.playSound(this.soundsList.switchPlayersSound)

        return this.player1Object.isTurn? this.player1Object : this.player2Object;
    }
    getCurrentPlayer(){
        return this.player1Object.isTurn?this.player1Object:this.player2Object
    }

    doubleSix=()=>{
        const currentPlayer= this.getCurrentPlayer()
        currentPlayer.currentScore=0;
        this.updatePlayersStates()
        this.switchTurn()
        this.showMessage(700)
    }
    checkWin=()=>{
        const{targetScore,player1,player2}=this.state
        if(player1.totalScore>=targetScore){
            return this.winGame(player1.name)
        }else if(player2.totalScore>=targetScore){
            return this.winGame(player2.name)
        }
        return false
    }
    winGame(winner){
        console.log('winner',winner)
        this.setState({messageText:winner +" is the Winner",
                isGameOver:true,
                dicesResult:[0,0],
            }
            )
        return true
    }
    updatePlayersStates =()=>{
        this.setState({
            player1:this.player1Object,
            player2:this.player2Object
        })
    }

    handleRollDices= () => {
            let result =  [this.getRandomNumber(),this.getRandomNumber()];
            this.setState(
                {dicesResult:result}
            )
            if(result===[6,6] || result[0]+result[1]===6) return this.doubleSix();
            const currentPlayer = this.getCurrentPlayer()
            currentPlayer.currentScore+= result[0]+result[1];;
            this.updatePlayersStates()
            this.playSound(this.soundsList.buttonSound)
         }
    playSound(sound) {
        let music = new Audio(sound);
        music.play();
    }
    handleHoldTurn = () => {
        const currentPlayer = this.getCurrentPlayer()

        currentPlayer.totalScore += currentPlayer.currentScore;
        currentPlayer.currentScore  = 0;
        this.setState((prevState)=>{
            return {
                 currentTurnResult:prevState.result,
                 player1:this.player1Object,
                 player2:this.player2Object,
                 dicesResult:[0,0]
                }
            }
        )
        this.playSound(this.soundsList.switchPlayersSound)
        if(this.checkWin()) return
        this.switchTurn()
    }
    showMessage =(time) => {
        this.setState({isMessageDouble6:true,messageText:'✦ Double 6 ✦'})
        setTimeout(()=>{
            this.setState(
                {isMessageDouble6:false}
            )
        },time)
}

    handleShowMessage=()=>{
        if(this.state.isMessageDouble6) {
            this.playSound(this.soundsList.message)
            return (
                <>
                    {/*<Message message='✦ Double 6 ✦'/>*/}
                    <Message message={this.state.messageText}/>
                </>
            )
        }
        if(this.state.isGameOver) {
            this.playSound(this.soundsList.win)
            return (
                <>
                    {/*<Message message='✦ Double 6 ✦'/>*/}
                    <Message message={this.state.messageText}/>
                </>
            )
        }
    }


    handleNewGame=()=>{

        // this.setState({isGameStart:true});
        this.setState(
            {
                isGameStart:true,
                isOpeningPage: true,
                isGameOn:false,
            isMessageDouble6:false,
            isGameOver:false,
            messageText:null,
            currentTurnPlayer:'player1',
            targetScore:null,
            dicesResult:[0,0],
            currentTurnResult:null,

    },()=> this.playSound(this.soundsList.buttonSound))
        this.player1Object.currentScore=0;
        this.player1Object.totalScore=0;
        this.player1Object.isTurn=true;
        this.player2Object.currentScore=0;
        this.player2Object.totalScore=0;
        this.player2Object.isTurn=false;
        this.updatePlayersStates()
    }
    handleTargetScore =(target)=>{
        this.playSound(this.soundsList.buttonSound)
        this.setState({
            targetScore:target,
            isGameStart:true,
            isOpeningPage:false,
        })
    }
    showOpeningPage(){
        return this.state.isOpeningPage
    }

    handleChooseTheme =(color) => {
        this.setState({themeColor:color})
        console.log('kkk',color)
        // return color
        this.injectColor(color)
    }
    injectColor=(color)=>{
        if(color) return color
        }
    render(){
        const{player1,player2,dicesResult
            ,gameOver,message,isGameOver
            ,isGameStart,targetScore,isOpeningPage} = this.state

        return(
            <>
            <OpeningPage callBackNewGame={this.handleNewGame}
                         targetScoreCallBack={this.handleTargetScore}
                         chooseThemeCallBack={this.handleChooseTheme}
                         isOpeningPageProp={isOpeningPage}
                         isGameStart={isGameStart}
                         showOpeningPage={this.showOpeningPage()}

            />
            <div className='DiceGame-content '>
                <div className={this.state.player1.isTurn?"DiceGame-background-img-div ":"DiceGame-background-img-div flip" }>
                    <div className={this.state.player1.isTurn?" ":" flip" }>
                    <div className={this.state.themeColor}>
                    <h1 className='DiceGame-header'>DICE GAME</h1>

                        <div className="DiceGame-board-div">
                                <Player  name={'Player1'}
                                         curentScore={player1.currentScore}
                                         totalScore ={player1.totalScore}
                                         isTurn ={player1.isTurn} />
                                   <Ui playerTurn =  {this.getCurrentPlayer().name}
                                         dicesResult = {dicesResult}
                                         callbackRoll ={this.handleRollDices}
                                         callBackHold = {this.handleHoldTurn}
                                         callBackNewGame={this.handleNewGame}
                                         isGameOver = {isGameOver}
                                         isGameStart={isGameStart}
                                         targetScoreProp={targetScore}

                                   />
                                <Player name={'Player2'}
                                         curentScore={player2.currentScore}
                                         totalScore ={player2.totalScore}
                                         isTurn ={player2.isTurn} />
                        </div>
                        <div className={gameOver?"DiceGame-winning-message": '.DiceGame-winning-message  .DiceGame-winning-message-show'}>  <h1>{message}</h1> </div>
                    </div>
                    </div>
                </div>
                {this.handleShowMessage()}
            </div>

            </>
        )
    }
}

export default DiceGame

// TODO:Responsive
// TODO: readme.md
// TODO: themes
// TODO: opening page
// TODO:meta tags
// TODO:normalize
// TODO:animations
// TODO:Local storage
// TODO:clean assets and code
// TODO:add playlist to audio and next sog play