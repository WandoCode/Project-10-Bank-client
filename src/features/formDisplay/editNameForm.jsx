import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { hideForm } from './formDisplay.action'
import { changeNamesMiddleware } from '../session/session.middlewares'

function EditNameForm() {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const user = useSelector((state) => state.session)
  const token = useSelector((state) => state.session.token)

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formDatas = {
      firstName,
      lastName,
    }

    dispatch(changeNamesMiddleware(token, formDatas))

    dispatch(hideForm())
  }

  const handleCancel = (e) => {
    e.preventDefault()
    dispatch(hideForm())
  }

  return (
    <form className="edit-name">
      <label htmlFor="firstName" className="firstName-wrapper">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder={user.firstName}
          onChange={handleFirstName}
          value={firstName}
          tabIndex="1"
        />
      </label>
      <button className="save-button" onClick={handleSubmit} tabIndex="3">
        Save
      </button>
      <label htmlFor="lastName" className="lastName-wrapper">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder={user.lastName}
          onChange={handleLastName}
          value={lastName}
          tabIndex="2"
        />
      </label>

      <button className="cancel-button" onClick={handleCancel} tabIndex="4">
        Cancel
      </button>
    </form>
  )
}

export default EditNameForm
