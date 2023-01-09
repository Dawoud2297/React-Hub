// const ReactClass = require('create-react-class')
const ReactClass = require('create-react-class')

const MyComponent = ReactClass({
    getDefaultProps : function(){
        return {
            name :'Aya',
        };
    },
    getInitialState : function(){
        return {
            age : 24
        }
    },
    displayName : function(){
        try {
            alert(this.state.age)
            console.log(this.props.name)
        } catch (error) {
            console.log(error)
        }
    },
    render : function(){
        return (
            <div>
                {this.props.name}
                <h1>
                    Afraid from unKnown  And her age is {this.state.age}
                </h1>
                <button onClick={this.displayName}>Name</button>
            </div>
        )
    }
})

export default MyComponent