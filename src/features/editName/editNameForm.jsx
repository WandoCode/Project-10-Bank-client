import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { hideForm } from './editName.action'
import { changeNamesMiddleware } from '../session/session.middlewares'

function EditNameForm() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session)
  const token = useSelector((state) => state.session.token)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: besoin de valider les données? Pas d'infos.
    const formDatas = {
      firstName,
      lastName,
    }
    dispatch(changeNamesMiddleware(token, formDatas))

    // TODO: hide only if change successfull
    dispatch(hideForm())
  }

  const handleCancel = (e) => {
    e.preventDefault()
    dispatch(hideForm())
  }

  return (
    <form>
      <label htmlFor="firstName"></label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder={user.firstName}
        onChange={handleFirstName}
        value={firstName}
      />
      <label htmlFor="lastName"></label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder={user.lastName}
        onChange={handleLastName}
        value={lastName}
      />
      <button className="save-button" onClick={handleSubmit}>
        Save
      </button>
      <button className="cancel-button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  )
}

export default EditNameForm
