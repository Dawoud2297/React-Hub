import React, { Component } from 'react'

export default class ComDidMount extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'Soha'
        }
    }
    componentDidMount(){
        this.setState({name : 'Doaa'})
    }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
