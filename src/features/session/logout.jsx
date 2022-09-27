import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logOut } from './session.actions'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isConnected = useSelector((state) => state.session.status)

  useEffect(() => {
    if (isConnected) {
      dispatch(logOut())
    }
    if (!isConnected) {
      navigate('/')
    }
  }, [isConnected, navigate, dispatch])

  return
}

export default Logout
