
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function MenuItem() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '8px 16px',
      }}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  )
}
export default MenuItem