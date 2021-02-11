import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import { nanoid } from 'nanoid'

const App = () => {
  module.id = nanoid()
  const [todos, setTodos] = useState([])

  const addTodo = content => {
    setTodos([
      ...todos, 
      {
        content, // content: content 省略形
        id: nanoid()
      }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <React.Fragment>
      <h1>TODO APP</h1>
      <Form addTodo={addTodo}/>
      <List todos={todos} deleteTodo={deleteTodo}/>
    </React.Fragment>
  )
}

export default App