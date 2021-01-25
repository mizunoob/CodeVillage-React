import React from 'react'
import Form from './Form'
import List from './List'

const App = () => {
  const todos = [
    {
      content: '課題をする'
    },
    {
      content: '料理をする'
    },
    {
      content: '食事をする'
    }
  ]
  return (
    <React.Fragment>
      <h1>TODO APP</h1>
      <Form />
      <List todos={todos}/>
    </React.Fragment>
  )
}

export default App