import React from 'react'
import Item from './Item'

const List = ( {todos, deleteTodo} ) => {
  return (
    <ul>
      {todos.map((todo) => {
        return(
          <Item key={todo.id} id={todo.id} content= {todo.content} deleteTodo={deleteTodo} /> 
        )
      })} 
      {/* => Item({content: '課題をする'}) */}
    </ul>
  )
}

export default List