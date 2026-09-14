import { useContext } from 'react'
import TodoContext from './TodoContext'

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext)

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>X</button>
        </li>
      ))}
    </ul>
  )
}
export default TodoList