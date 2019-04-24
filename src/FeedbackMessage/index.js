import React, { Component } from 'react';

class FeedbackMessage extends Component {
    render() {
        return (
            <div>
                Bienvenido a FeedbackMessage! <br/>
                Bienvenido! {this.props.nombre} a {this.props.app}<br/><br/>
            </div>
        )
    } 
}

export default FeedbackMessage