import React, { PureComponent } from 'react'

export default class GetMousePosition extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            x : '',
            y : ''
        }
    }
    setPosition = (e) => {
        this.setState({
            x : e.clientX,
            y : e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener("mousemove",this.setPosition)
    }
  render() {
    return (
      <div>
        <h1>
            {this.state.x} {this.state.y}
        </h1>
      </div>
    )
  }
  componentWillUnmount(){
    window.removeEventListener("mousemove",this.setPosition)
  }
}
