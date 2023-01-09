import React from 'react'

const FirstChild = (props) => {
  return (
    <div>
      <h1>
        <span style={{color:'red',margin:'5px'}}>Concats</span>
         Youre age now is {props.age}
      </h1>
    </div>
  )
}

export default FirstChild
