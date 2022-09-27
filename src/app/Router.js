import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profil from '../pages/Profil'
import Logout from '../features/connection/logout'
import ProtectedRoute from '../utils/ProtectedRoute'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="profil"
            element={
              <ProtectedRoute>
                <Profil />
              </ProtectedRoute>
            }
          />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
