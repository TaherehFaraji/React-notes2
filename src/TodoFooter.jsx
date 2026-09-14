import { useContext } from 'react'
import TodoContext from './TodoContext'

function TodoFooter() {
  const { todos, dispatch } = useContext(TodoContext)
  const remaining = todos.filter(t => !t.completed).length

  return (
    <div>
      <p>{remaining} item{remaining !== 1 ? 's' : ''} left</p>
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
        Clear completed
      </button>
    </div>
  )
}
export default TodoFooter