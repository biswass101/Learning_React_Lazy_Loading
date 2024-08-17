import React, { useState } from 'react'
// import{ todos } from '../data'
const About = () => {
  const [todoLists, setTodoList] = useState([])
  return (
    <><h1 className='text-xl'>We are Gay</h1>
    <button onClick={() => {
      import('../data').then((module) => setTodoList(module.todos))
    }} className='bg-red-300'>Load Data</button>
    <ul>
      {
        todoLists.map((todo, idx) => <li key={idx}>{todo.title}</li>)
      }
    </ul></>
  )
}

export default About