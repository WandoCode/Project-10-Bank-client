import { createReducer } from '@reduxjs/toolkit'
import { logIn, showError, logOut } from './connection.actions'
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1'

const initialState = {
  status: false,
  userFirstName: undefined,
  userLastName: undefined,
  token: undefined,
  error: false,
}
// TODO: (mentor): ok de mettre le token ici?

const logUser = (formDatas) => {
  return async (dispatch) => {
    try {
      const rep = await axios.post(API_URL + '/user/login', formDatas)
      const data = rep.data
      const status = data.status
      if (status === 200) {
        const token = data.body.token
        dispatch(logIn(token))
      }
    } catch (err) {
      const status = err.response.status
      if (status === 400) {
        dispatch(showError())
      }
      if (status === 500) {
        throw new Error(err.message)
      }
    }
  }
}

const connectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      state.token = action.payload.token
      state.status = true
    })
    .addCase(showError, (state) => {
      state.error = true
    })
    .addCase(logOut, (state) => {
      state.status = false
      state.userFirstName = undefined
      state.userLastName = undefined
      state.token = undefined
      state.error = false
    })
})

export { connectionReducer, logUser }
