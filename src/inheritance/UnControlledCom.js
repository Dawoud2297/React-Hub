import React, { Component } from 'react'

export default class UnControlledCom extends Component {
    constructor(props){
        super(props)
        this.data = React.createRef()
    }
    handleSubmit(e){
        e.preventDefault();
        alert(this.data.current.value)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" defaultValue="Hello World@!" ref={this.data}/>
            <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
