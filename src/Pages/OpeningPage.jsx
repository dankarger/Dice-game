import React from "react";
import './OpeningPage.css'
import Button from "../Components/Common/Buttons/Button";


class OpeningPage extends React.Component {
    state={isGameOn:false,isOpeningPage:this.props.isOpeningPageProp,
        isGameStart: this.props.isGameStart, themeColor:'blue'}

    showOpeningPage=()=>{
        this.setState({isOpeningPage:true})

    }
    getThemeColor=(color)=> {
        console.log('coooloooor',color)
        this.setState({
            themeColor:color
        })
        this.props.chooseThemeCallBack(color)

    }

    startGame =()=> {
      this.setState({
          isGameOn:true,
          isOpeningPage:false,
          isGameStart:true
      })

}

    render(){
        const {targetScoreCallBack, chooseThemeCallBack,isOpeningPageProp,}=this.props
        return (
            <div className={isOpeningPageProp? 'Opening-page-content show':' Opening-page-content hide '}>
            <div >
                <h1   >DICE GAME </h1>
                <div className="Opening-themes-div">
                    <h2>Choose Themes</h2>
                    {/*<Button name='Blue' callBack={()=>chooseThemeCallBack('blue')} classNameProp='Button-new-game '/>*/}
                    <div>
                        <input type="radio" id="themes" name="drone" value="huey"
                               onClick={()=>this.getThemeColor('blue')}
                        />
                        <label htmlFor="themes">Blue</label>
                    </div>
                    <div>
                        <input type="radio" id="themes" name="drone" value="classic"
                               onClick={()=>this.getThemeColor('classic')}
                        />
                        <label htmlFor="themes"
                               >Classic</label>
                    </div>
                    <div>
                        <input type="radio" id="themes" name="drone" value="dark"
                               onClick={()=>this.getThemeColor('dark')}
                        />
                        <label htmlFor="themes"
                        >Dark</label>
                    </div>
                </div>
                <div  onClick={
                ()=>{
                    this.startGame()
                }
                }>
                    {/*<Button name='New Game' callBack={callBackNewGame} classNameProp='Button-new-game '/>*/}
                    <div onClick={this.startGame} className="Opening-page-buttons-div">
                        <Button name='Short Game - 20 Points' callBack={()=>targetScoreCallBack(20,)} classNameProp='Button-opening-button animation1'/>
                        <Button name='Medium Game - 50 Points' callBack={()=>targetScoreCallBack(50)} classNameProp='Button-opening-button animation2'/>
                        <Button name='Long Game  - 100 Points' callBack={()=>targetScoreCallBack(100)} classNameProp='Button-opening-button animation3'/>
                    </div>

                </div>

            </div>

            </div>
        )
    }
}

export default OpeningPage