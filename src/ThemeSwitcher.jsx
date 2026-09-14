import { useReducer } from 'react'

const initialState = { theme: 'light', fontSize: 16 }

function reducer(state, action) {
  switch (action.type) {
    case 'toggle_theme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'set_font_size':
      return { ...state, fontSize: action.payload }
    default:
      return state
  }
}

function ThemeSwitcher() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ background: state.theme === 'light' ? '#fff' : '#333', color: state.theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p style={{ fontSize: state.fontSize }}>Current theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: 'toggle_theme' })}>Toggle Theme</button>
      <button onClick={() => dispatch({ type: 'set_font_size', payload: 20 })}>Font 20px</button>
      <button onClick={() => dispatch({ type: 'set_font_size', payload: 14 })}>Font 14px</button>
    </div>
  )
}
export default ThemeSwitcher