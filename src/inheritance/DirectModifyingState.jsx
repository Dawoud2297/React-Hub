import React, { Component } from 'react'

export default class DirectModifyingState extends Component {
    state = {
        counter: 0
    }
    startCounter = () => {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.startCounter}>+</button>
            </div>
        )
    }
}
