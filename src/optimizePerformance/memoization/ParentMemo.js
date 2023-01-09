import React, { useState } from 'react'
import Memoization from './Memo'

const Parent = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}/>
      </div>
      <div>
        <Memoization name={name} age={age} gender={gender}/>
      </div>
    </div>
  )
}

export default Parent
