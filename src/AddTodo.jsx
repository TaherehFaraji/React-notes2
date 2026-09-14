import { useState, useContext } from 'react'
import TodoContext from './TodoContext'

function AddTodo() {
  const [text, setText] = useState('')
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text })
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo..." />
      <button type="submit">Add</button>
    </form>
  )
}
export default AddTodo