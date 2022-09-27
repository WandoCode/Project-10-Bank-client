import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const isConnected = useSelector((state) => state.connection.status)

  if (isConnected) return children
  else return <Navigate to="/login" />
}

export default ProtectedRoute
