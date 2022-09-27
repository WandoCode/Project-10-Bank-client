import { createAction } from '@reduxjs/toolkit'

const logIn = createAction('connection/logIn', (formaDatas) => ({
  payload: formaDatas,
}))

const logOut = createAction('connection/logOut')

const showError = createAction('connection/showError')

const getProfilInfos = createAction('connection/getDetails', (token) => ({
  payload: token,
}))

export { logIn, showError, logOut, getProfilInfos }
