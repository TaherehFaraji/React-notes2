import { useReducer } from 'react'
import TodoContext from './TodoContext'

const initialTodos = []

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos)

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider