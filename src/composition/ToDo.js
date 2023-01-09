import React, { useState } from 'react'

const ToDo = () => {
    const [messageObject, setMessage] = useState({message : ''})
  return (
    <div>
      <input type="text"placeholder='Message object'value={messageObject.message}onChange={e=>{
        // First implementation Wrong
        // messageObject.message = e.target.value;
        // setMessage(messageObject)
        // Second implementation Wrong
        // { messageObject } = e.target.value
        // setMessage(messageObject)
        // Third implementation Right
        // const newMessage = {message : e.target.value}
        // setMessage(newMessage)
        // Fourth implementation Right
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
