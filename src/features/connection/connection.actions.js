import { createAction } from '@reduxjs/toolkit'

const logIn = createAction('connection/logIn', (token) => ({
  payload: { token },
}))

const logOut = createAction('connection/logOut')

const showError = createAction('connection/showError', (errorMessage) => ({
  payload: { errorMessage },
}))

const getProfilInfos = createAction('connection/getDetails', (token) => ({
  payload: token,
}))

export { logIn, showError, logOut, getProfilInfos }
