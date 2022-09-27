import Logo from '../assets/img/argentBankLogo.png'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
function Header() {
  const isConnected = useSelector((state) => state.connection.status)

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isConnected ? (
          <NavLink className="main-nav-item" to="/logout">
            <i className="fa fa-user-circle"></i>
            &nbsp; Sign out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            &nbsp; Sign In
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
