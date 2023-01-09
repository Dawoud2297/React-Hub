import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    // instead of this...
    // const person = {age, name}

    // Use React.useMemo...
    const person = useMemo(()=>{
        return {name,age}
    },[age, name])

    useEffect(()=>{
        console.log(person)
    },[person])

  return (
    <div style={{backgroundColor : `${darkMode ? '#333' : '#fff'}`}}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input type="number" value={age} onChange={e=>setAge(e.target.value)} />
        <div>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <input type="checkbox" placeholder='Dark Mode' value={darkMode} onChange={e=>setDarkMode(e.target.checked)}/>
        </div>
    </div>
  )
}

export default UseMemo
