import React from "react";
import './Message.css'


class Message extends React.Component {



    render() {
        return(
            <>
                <div className="Message-div">
                    <h1>{this.props.message}</h1>

                </div>
            </>
        )
    }
}
export default Message