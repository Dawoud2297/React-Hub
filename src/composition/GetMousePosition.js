import React, { useEffect, useState } from 'react'

const GetMousePosition = () => {
    const [mouse, setMouse] = useState({})
    useEffect(() => {
        const calPosition = (e) => {
            setMouse({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", calPosition)

        return () => {
            window.removeEventListener("mousemove", calPosition)
        }
    }, [])
    return (
        <div>
            Mouse Position {mouse.x} {mouse.y}
        </div>
    )
}

export default GetMousePosition
