import React, { useEffect } from 'react'

const Memo = ({name, age, gender}) => {
  useEffect(()=>{
    console.log(`The name is ${name}; the age equals ${age}; Gender is ${gender}`)
  },[age, gender, name])
  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>Gender : {gender}</h3>
    </div>
  )
}
const Memoization = React.memo(Memo)
export default Memoization;
