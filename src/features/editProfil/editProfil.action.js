import { createAction } from '@reduxjs/toolkit'

const showForm = createAction('editProfil/showForm')
const hideForm = createAction('editProfil/hideForm')

export { showForm, hideForm }
