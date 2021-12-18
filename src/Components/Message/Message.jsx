import React from "react";
import './Message.css'


class Message extends React.Component {



    render() {
        return(
            <>
                <div className="Message-div">
                    <div className='Message'>
                       <h1>{this.props.message}</h1>
                    </div>
                </div>
            </>
        )
    }
}
export default Message