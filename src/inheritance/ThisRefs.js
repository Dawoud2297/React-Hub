import React, { Component } from 'react'

export default class ThisRefs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            clicks : this.state.clicks + 1
        })
    }
    componentDidMount(){
        this.refs.myDivRef.addEventListener("click",this.clickHandler)
    }
    componentWillUnmount(){
        this.refs.myDivRef.removeEventListener("click",this.clickHandler)
    }
    render() {
        let children = this.props.children;
        return (
            <div ref='myDivRef'>
                <h1>You Clicked ({this.state.clicks} clicks) times</h1><h2>
                    {children}
                </h2>
            </div>
        )
    }
}
