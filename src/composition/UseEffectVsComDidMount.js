import React, { useEffect, useState } from 'react'

const UseEffectVsComDidMount = () => {
    const [name, setname] = useState('second')
    useEffect(()=>{
        setname('Doaa Abdelfatah!')
    },[])
  return (
    <div>
      {name}
    </div>
  )
}

export default UseEffectVsComDidMount
