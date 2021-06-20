import React from 'react'

function Course() {
    const course = {
        id:1,
        name: 'Half Stack Application Development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 100,
                id:1
            },
            {
                name: 'Using Props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a Component',
                exercises: 19,
                id:3
            },
            {
                name: 'Redux',
                exercises: 23,
                id:4
            }
        ]
    }

    const tot = course.parts.reduce((b, y)=> b + y.exercises, 0)
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(cox=> <li key={cox.id}><h4>{cox.name} {cox.exercises}</h4></li>)}
            </ul>
            <h6>Total: {tot} exercises</h6>
        </div>
    )
}

export default Course
