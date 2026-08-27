
import { useState, useEffect } from 'react'

function TypingIndicator() {
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (text.length === 0) {
      setTyping(false)
      return
    }
    setTyping(true)
    const timer = setTimeout(() => {
      setTyping(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [text])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      {typing && <p style={{ fontStyle: 'italic' }}>User is typing...</p>}
    </div>
  )
}

export default TypingIndicator