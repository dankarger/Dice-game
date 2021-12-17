import React from "react";
import './Button.css'

class Button extends React.Component {

    render() {
        const{name,callBack,classNameProp}=this.props
        return(
            <>
            <button onClick={()=>callBack()} className={classNameProp}> {name} </button>
            </>
        )
    }
}

export default Button