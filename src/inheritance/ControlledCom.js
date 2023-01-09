import React, { Component } from 'react'

export default class ControlledCom extends Component {
  state = {
    gender : ''
  }
  selectGender = (e) =>{
    this.setState({
      gender : e.target.value
    })
  }
  submitSelection = (e) =>{
    e.preventDefault();
    alert("Your gender is selected as " + this.state.gender)
    this.setState({
      gender : ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitSelection}>
          <input type="text" value={this.state.gender} onChange={this.selectGender}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
