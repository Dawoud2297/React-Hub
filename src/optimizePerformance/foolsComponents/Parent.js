import React from 'react'

const Parent = ({ setName, setAge }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
            <h1>Name</h1> <input type="text" onChange={(e) => setName(e.target.value)} />
            <h1>Age</h1> <input type="number" onChange={(e) => setAge(e.target.value)} />
        </div>
    )
}

export default Parent
