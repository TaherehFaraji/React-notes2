
import { useState, useEffect, useRef } from 'react'

function GitHubFinder() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [typing, setTyping] = useState(false)
  const inputRef = useRef(null)


  useEffect(() => {
    // Focus the input if the element exists..It helps handle errors
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const trimmed = username.trim()

    if (!trimmed) {
      setTyping(false)
      setUser(null)
      setError(null)
      return
    }

    setTyping(true)
    setLoading(false)

    const timer = setTimeout(() => {
      setTyping(false)
      setLoading(true)
      setError(null)
      setUser(null)

      fetch(`https://api.github.com/users/${trimmed}`)
        .then(res => {
          if (res.status === 404) {
            throw new Error('User not found')
          }

          if (!res.ok) {
            throw new Error('Something went wrong')
          }

          return res.json()
        })
        .then(data => {
          setUser(data)
          setLoading(false)
        })
        .catch(err => {
          setError(err.message)
          setLoading(false)
        })
    }, 1000)

    return () => clearTimeout(timer)
  }, [username])

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>

      <input
        ref={inputRef}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '1px solid #d0d7de',
        borderRadius: '12px',
        outline: 'none',
        boxSizing: 'border-box',
        backgroundColor: '#f6f8fa',
        color: '#24292f',
        transition: 'all 0.2s ease'}}
      />

      {typing && <p>Typing...</p>}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src={user.avatar_url} alt="avatar" width="100" style={{ borderRadius: '50%' }} />
          <h4>{user.name || user.login}</h4>
          <p>{user.bio}</p>
          <p>Repos: {user.public_repos} | Followers: {user.followers}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  )
}

export default GitHubFinder



// // Prop Drilling
// function App() {
//   const [theme, setTheme] = useState('light')
//   return <Toolbar theme={theme} />
// }
// function Toolbar({ theme }) {
//   return <Menu theme={theme} />
// }
// function Menu({ theme }) {
//   return <MenuItem theme={theme} />
// }
// function MenuItem({ theme }) {
//   return <button className={theme}>Click</button>
// }