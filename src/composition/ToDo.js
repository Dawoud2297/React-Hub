import React, { useState } from 'react'

const ToDo = () => {
    const [messageObject, setMessage] = useState({message : ''})
  return (
    <div>
      <input type="text"placeholder='Message object'value={messageObject.message}onChange={e=>{
        setMessage({
          message : e.target.value
        })
      }}/>
      <h1>
        {messageObject.message}
      </h1>
    </div>
  )
}

export default ToDo
