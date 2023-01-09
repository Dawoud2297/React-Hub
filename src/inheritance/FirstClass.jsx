import React, { Component } from 'react'

export default class FirstClass extends Component {
  constructor(props){
    super(props)
    this.AlertTheName = this.AlertTheName.bind(this)
  }
  AlertTheName(){
    alert(this.props.name)
  }
  // Dont need to bind... its automatically bind
  // AlertTheName = () =>{
    // alert(this.props.name)
    // console.log(this.props.name)
  // }
  render() {
    return (
      <div>
        <h1>
          Its the newest class from JS
        {/* <button onClick={this.AlertTheName.bind(this)}>Name</button> */}
        <button onClick={this.AlertTheName}>Name</button>
        </h1>
      </div>
    )
  }
}
// The way to use default props
FirstClass.defaultProps = {
  name : 'ES6'
}