import React from "react";


class Player extends React.Component {


    componentDidMount() {
        console.log('mount')
    }

    render(){
        return(
            <>
                <h1>PLAYER</h1>
                <p>{this.props.test}</p>
            </>
        )
    }
}

export default Player