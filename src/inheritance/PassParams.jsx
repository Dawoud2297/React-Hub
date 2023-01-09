import React, { Component } from 'react'

const data = [
    {
        id: 1,
        name: 'Aya',
        age: 20

    },
    {
        id: 2,
        name: 'Doaa',
        age: 34

    },
    {
        id: 3,
        name: 'Soha',
        age: 30

    },
    {
        id: 4,
        name: 'Ana',
        age: 45
    }
]

export default class PassParams extends Component {
    calculateAverage(id, name, age) {
        const average = (id + age) / 4
        alert(`Hi I'm ${name} and My Average is ${average}`)
    }
    render() {
        return (
            <div>
                {
                    data.map(d=>(
                        <div>
                        <h1>{d.name}</h1>
                        <button onClick={this.calculateAverage.bind(this,d.id,d.name,d.age)}>Average</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}
