import { createReducer } from '@reduxjs/toolkit'
import {
  logIn,
  showError,
  logOut,
  getProfil,
  editProfil,
} from './session.actions'

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

const sessionReducer = createReducer(initialState, (builder) => {
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
    .addCase(getProfil, (state, action) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.id = action.payload.id
    })
    .addCase(editProfil, (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    })
})

export default sessionReducer
