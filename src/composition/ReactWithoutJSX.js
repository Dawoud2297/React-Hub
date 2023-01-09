import React from 'react'
const element = React.createElement;

export const Child = ({name}) => {
    return (
        element('h1', null, `Her name is ${name}`)
    )
}

const ReactWithoutJSX = () => {
    return (
        element(Child, { name: 'Doaa' }, null)
    )
}

export default ReactWithoutJSX
