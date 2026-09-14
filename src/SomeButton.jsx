import { useContext } from 'react'
import NotificationContext from './NotificationContext'

function SomeButton() {
  const { addNotification } = useContext(NotificationContext) // or use()
  return (
    <button onClick={() => addNotification('Button clicked!', 'success')}>
      Click me
    </button>
  )
}

export default SomeButton