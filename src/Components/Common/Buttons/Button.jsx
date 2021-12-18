import React from "react";
import './Button.css'

class Button extends React.Component {

    render() {
        const{name,callBack,classNameProp,disabledProp}=this.props
        return(
            <>
            <button onClick={()=>callBack()} className={classNameProp} disabled={disabledProp}> {name} </button>
            </>
        )
    }
}

export default Button