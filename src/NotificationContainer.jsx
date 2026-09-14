import { use } from 'react'
import NotificationContext from './NotificationContext'

function NotificationContainer() {
  const { notifications } = use(NotificationContext)

  return (
    <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
      {notifications.map(n => (
        <div
          key={n.id}
          style={{
            background: n.type === 'error' ? 'lightcoral' : n.type === 'success' ? 'lightgreen' : 'lightblue',
            padding: '10px',
            margin: '5px',
            borderRadius: '5px',
          }}
        >
          {n.message}
        </div>
      ))}
    </div>
  )
}
export default NotificationContainer