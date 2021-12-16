import React from "react";
import './Button.css'

class Button extends React.Component {


    render() {
        const{name,callBack}=this.props
        return(
            <>
            <button onClick={()=>callBack()}> {name} </button>
            </>
        )
    }
}

export default Button