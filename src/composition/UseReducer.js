import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return init();
        default:
            throw new Error();
    }
}

const init = () => {
    return {
        count: 0
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 }, init)
    return (
        <div>
            <div style={{display:'grid',gridTemplateColumns:'auto'}}>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <h1>{state.count}</h1>
        </div>
    )
}

export default UseReducer
