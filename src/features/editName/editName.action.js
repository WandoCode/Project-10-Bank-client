import { createAction } from '@reduxjs/toolkit'

const showForm = createAction('editName/showForm')
const hideForm = createAction('editName/hideForm')
export { showForm, hideForm }
