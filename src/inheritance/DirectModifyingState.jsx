import React, { Component } from 'react'

export default class DirectModifyingState extends Component {
    state = {
        counter: 0
    }
    // First Method
    // startCounter  = () =>{
    //     this.setState({
    //         counter : this.state.counter + 1
    //     })
    // }
    // Second Method
    // startCounter = () => {
    //     this.setState((state) => ({
    //         counter: state.counter + 1
    //     }))
    // }
    // Third Method
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
