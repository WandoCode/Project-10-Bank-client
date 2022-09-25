import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profil from '../pages/Profil'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
// TODO: ajouter un composant ProtectedRoute sur Profil
