import React from 'react'
import Item from './Item'

const List = ( {todos} ) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return(
          <Item key={index} content= {todo.content} /> 
        )
      })} 
      {/* => Item({content: '課題をする'}) */}
    </ul>
  )
}

export default List