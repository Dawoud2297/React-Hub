/* eslint-disable no-useless-constructor */
// Binding gives you access to the parent component in the handler.
// We only bind the methods we pass to another components So we dont need to bind lifeCycle methods.
// First way is to bind the method in the constructor.
// Second one is to bind it in render method.
// Third way is to use Arrow function instead of regular function.
// The Class will autobind Arrow functions.

import React, { Component } from 'react'

export default class BindMethods extends Component {
    constructor(props){
        super(props)
        // 1st way
        // this.getName = this.getName.bind(this)
    }
    // getName(){
        // alert(this.props.name)
    // }
    // Arrow function method
    getName = () =>{
        alert(this.props.name)
    }
  render() {
    return (
      <div>
        {/* 2nd way */}
        {/* <button onClick={this.getName.bind(this)}>Get Name</button> */}
        <button onClick={this.getName}>Get Name</button>
      </div>
    )
  }
}
