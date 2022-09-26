import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { logUser } from './connection.reducer'

function ConnectionForm() {
  const [username, setUsername] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')
  const [checkbox, setCheckbox] = useState(false)

  const connectionState = useSelector((state) => state.connection)

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDatas = {
      email: username,
      password,
    }

    dispatch(logUser(formDatas))
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckBox = (e) => {
    setCheckbox(e.target.checked)
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={checkbox}
          onChange={handleCheckBox}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" onClick={handleSubmit}>
        Sign In
      </button>
    </form>
  )
}

export default ConnectionForm
//TODO: gérer le remeber me
