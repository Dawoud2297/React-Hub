import React, { Component } from 'react'

export default class TestCallingFunc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checking : false
        }
        this.renderProfile = this.renderProfile.bind(this)
    }
    renderProfile(){
        return (
            <h1>It's my profile</h1>
        )
    }
    render() {
        return (
            <div>
                {/* Option one works */}
                {/* {this.renderProfile()} */}
                {/* Option two : will print out $ beside the string so it doesn't work correctly*/}
                {/* ${this.renderProfile()} */}
                {/* Option three : Because its mentioned as a reference (it'll need to button to trigger it so it will print out nothing*/}
                {/* {this.renderProfile} */}
                {/* Option four : based on previous reason it will print out only '$' so it doesn't work correctly*/}
                ${this.renderProfile}
            </div>
        )
    }
}
