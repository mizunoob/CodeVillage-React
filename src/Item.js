import React, {useState} from 'react'

const Item = ({content}) => {
  const [isDone, setIsDone] = useState(false)
  return (
    <li>
      <input type="checkbox" onChange={() => {
        // 変更されたタイミングでisDoneの値を書き換える処理を書いてみて
        // 設定する値は、isDoneに設定されている真偽値の逆の値
        setIsDone(!isDone)

      }}/>
      <span
        style={
          {textDecoration: isDone ? 'line-through' : 'none'}
        }>
      {content}
      </span>
    </li>
  )
}

export default Item