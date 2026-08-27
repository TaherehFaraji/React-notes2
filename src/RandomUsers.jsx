
import { useState, useEffect } from 'react'

function RandomUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setUsers(data.results)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {users.map((user, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px' }}>
          <img src={user.picture.medium} alt="avatar" style={{ borderRadius: '50%' }} />
          <h4>{user.name.first} {user.name.last}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
export default RandomUsers