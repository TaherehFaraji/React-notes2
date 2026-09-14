
import { useReducer } from 'react'

const initForm = { username: '', email: '', errors: {} }

function formReducer(state, action) {
  switch (action.type) {
    case 'set_field':
      return { ...state, [action.payload.field]: action.payload.value, errors: { ...state.errors, [action.payload.field]: '' } }
    case 'validate': {
      const errors = {}
      if (!state.username.trim()) errors.username = 'Username required'
      if (!state.email.trim()) errors.email = 'Email required'
      else if (!/^\S+@\S+\.\S+$/.test(state.email)) errors.email = 'Invalid email'
      return { ...state, errors }
    }
    default:
      return state
  }
}

function SignUp() {
  const [form, dispatch] = useReducer(formReducer, initForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'validate' })
    // if no errors, proceed...
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={form.username}
          onChange={e => dispatch({ type: 'set_field', payload: { field: 'username', value: e.target.value } })}
          placeholder="Username"
        />
        {form.errors.username && <p style={{ color: 'red' }}>{form.errors.username}</p>}
      </div>
      <div>
        <input
          value={form.email}
          onChange={e => dispatch({ type: 'set_field', payload: { field: 'email', value: e.target.value } })}
          placeholder="Email"
        />
        {form.errors.email && <p style={{ color: 'red' }}>{form.errors.email}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}
export default SignUp