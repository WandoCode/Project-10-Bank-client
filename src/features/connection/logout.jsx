import { Navigate } from 'react-router-dom'
import { logOut } from './connection.actions'
import { useDispatch } from 'react-redux'

function Logout() {
  const dispatch = useDispatch()
  dispatch(logOut())
  return <Navigate to="/" />
}

export default Logout
