import { useNavigate } from 'react-router-dom'
import { logOut } from './connection.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isConnected = useSelector((state) => state.connection.status)

  useEffect(() => {
    if (isConnected) {
      dispatch(logOut())
    }
    if (!isConnected) {
      navigate('/')
    }
  }, [isConnected])

  return
}

export default Logout
