import React from "react";
import './OpeningPage.css'
import Button from "../Components/Common/Buttons/Button";


class OpeningPage extends React.Component {
    state = {
        isGameOn: false, isOpeningPage: this.props.isOpeningPageProp,
        isGameStart: this.props.isGameStart, themeColor: 'blue'
    }

    getThemeColor = (color) => {
        this.setState({
            themeColor: color
        })
        this.props.chooseThemeCallBack(color)
    }

    startGame = () => {
        this.setState({
            isGameOn: true,
            isOpeningPage: false,
            isGameStart: true
        })

    }

    render() {
        const {targetScoreCallBack, isOpeningPageProp,} = this.props
        return (
            <div className={isOpeningPageProp ? 'Opening-page-content show' : ' Opening-page-content hide '}>
                <div>
                    <h1>DICE GAME </h1>
                    <div className="Opening-themes-div">
                        <hr/>
                        <h2>Choose Themes</h2>
                        <div onClick={() => this.getThemeColor('blue')}>
                            <input type="radio" id="themes" name="drone" value="huey"
                                   onClick={() => this.getThemeColor('blue')}
                            />
                            <label htmlFor="themes">Neon</label>
                        </div>
                        <div onClick={() => this.getThemeColor('classic')}>
                            <input type="radio" id="themes" name="drone" value="classic"
                                   defaultChecked={true} onClick={() => this.getThemeColor('classic')}
                            />
                            <label htmlFor="themes"
                            >Classic</label>
                        </div>
                        <div onClick={() => this.getThemeColor('dark')}>
                            <input type="radio" id="themes" name="drone" value="dark"
                                   onClick={() => this.getThemeColor('dark')}
                            />
                            <label htmlFor="themes"
                            >Retro</label>
                        </div>
                    </div>
                    <hr/>
                    <div onClick={
                        () => {
                            this.startGame()
                        }
                    }>
                        <div onClick={this.startGame} className="Opening-page-buttons-div">
                            <Button name='Short Game - 20 Points' callBack={() => targetScoreCallBack(20,)}
                                    classNameProp='Button-opening-button animation1'/>
                            <Button name='Medium Game - 50 Points' callBack={() => targetScoreCallBack(50)}
                                    classNameProp='Button-opening-button animation2'/>
                            <Button name='Long Game  - 100 Points' callBack={() => targetScoreCallBack(100)}
                                    classNameProp='Button-opening-button animation3'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OpeningPage