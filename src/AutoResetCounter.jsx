import { useState, useEffect } from 'react'

function AutoResetCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 0) return // no need to reset if already 0

    const timer = setTimeout(() => {
      setCount(0)
    }, 5000)

    return () => clearTimeout(timer)
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={() => setCount(c => c - 1)}>-1</button>
    </div>
  )
}

export default AutoResetCounter