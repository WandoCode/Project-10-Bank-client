import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Account from '../components/Account'
import EditNameForm from '../features/formDisplay/editNameForm'
import { hideForm, showForm } from '../features/formDisplay/formDisplay.action'

function Login() {
  const dispatch = useDispatch()

  const firstName = useSelector((state) => state.session.firstName)
  const lastName = useSelector((state) => state.session.lastName)
  const visibleForm = useSelector((state) => state.formDisplay.visibleForm)

  // Set form visibility state to hidden when the Profil page is dismounted
  useEffect(() => {
    return () => dispatch(hideForm())
  }, [dispatch])

  const handleEditName = () => {
    dispatch(showForm())
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          {!visibleForm && (
            <>
              <br />
              {firstName} {lastName}!
            </>
          )}
        </h1>
        {visibleForm ? (
          <EditNameForm />
        ) : (
          <button className="edit-button" onClick={handleEditName}>
            Edit Name
          </button>
        )}
      </div>
      <Account title={'Argent Bank Checking (x8349)'} amount={2500.3} />
      <Account title={'Argent Bank Savings (x6712)'} amount={10928.42} />
      <Account title={'Argent Bank Credit Card (x8349)'} amount={184.3} />
    </main>
  )
}

export default Login
