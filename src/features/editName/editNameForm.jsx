import { useSelector, useDispatch } from 'react-redux'
import { hideForm } from './editName.action'

function EditNameForm() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.connection)

  const handleSubmit = (e) => {
    e.preventDefault()
    // ...validate datas (empties fields...)
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
      />
      <label htmlFor="lastName"></label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder={user.lastName}
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
