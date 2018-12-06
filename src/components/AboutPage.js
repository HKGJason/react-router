import React, { Component } from 'react'

export default class AboutPage extends Component{
    onClick = () => {
        const {history} = this.props
        history.goBack()
        //history.goForward()

    }

    render() {
        return (
    <div>
        <h2>AboutPage</h2>
        <button onClick={this.onClick}>Go Back</button>
    </div>
        )
    }



}