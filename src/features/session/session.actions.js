import { createAction } from '@reduxjs/toolkit'

const logIn = createAction('session/logIn', (token) => ({
  payload: { token },
}))

const logOut = createAction('session/logOut')

const showError = createAction('session/showError', (errorMessage) => ({
  payload: { errorMessage },
}))

const getProfil = createAction('session/getProfil', (token) => ({
  payload: token,
}))

const editProfil = createAction('session/editProfil', (formDatas) => ({
  payload: { ...formDatas },
}))

export { logIn, showError, logOut, getProfil, editProfil }
