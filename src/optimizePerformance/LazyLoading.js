import React, { Suspense, useState } from 'react'
import Parent from './foolsComponents/Parent'
const SecondComponent = React.lazy(()=>import('./foolsComponents/SecondComponent'))
const FirstChild = React.lazy(()=>import('./foolsComponents/FirstChild'))

const LazyLoading = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    
  return (
    <div>
        <Parent setAge={setAge} setName={setName}/>
        <div style={{marginTop:'100px'}}>
            <Suspense fallback={<h1>Look Who's Back Again!...</h1>}>
            <FirstChild age={age}/>
            <SecondComponent name={name}/>
            </Suspense>
        </div>
    </div>
  )
}

export default LazyLoading
