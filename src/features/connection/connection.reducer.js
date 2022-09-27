import { createReducer } from '@reduxjs/toolkit'
import { logIn, showError, logOut, getProfilInfos } from './connection.actions'

const initialState = {
  status: false,
  token: undefined,
  error: false,
  errorMessage: '',
  email: '',
  firstName: '',
  lastName: '',
  id: null,
}
// TODO: (mentor): ok de mettre le token ici?

const connectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      state.token = action.payload.token
      state.status = true
      state.error = false
    })
    .addCase(showError, (state, action) => {
      state.error = true
      state.errorMessage = action.payload.errorMessage
    })
    .addCase(logOut, () => initialState)
    .addCase(getProfilInfos, (state, action) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.id = action.payload.id
    })
})

export default connectionReducer
