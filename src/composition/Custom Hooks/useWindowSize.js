import { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({width : 0, height : 0})
    
    const calculateWindowSize = () =>{
      setWindowSize({
        width : window.innerWidth,
        height : window.innerHeight
      })
    }
    
    useEffect(()=>{
      window.addEventListener("resize",calculateWindowSize)
      return () =>{
        window.removeEventListener("resize",calculateWindowSize)
      }
    },[windowSize])
  return windowSize
}

export default useWindowSize
