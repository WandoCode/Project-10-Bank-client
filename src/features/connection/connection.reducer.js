import { createReducer } from '@reduxjs/toolkit'
import { logIn, showError, logOut, getProfilInfos } from './connection.actions'
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1'

const initialState = {
  status: false,
  token: undefined,
  error: false,
  email: '',
  firstName: '',
  lastName: '',
  id: null,
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

        const axiosInstance = axios.create({
          baseURL: API_URL,
          headers: { Authorization: `Bearer ${token}` },
        })

        const rep = await axiosInstance.post('/user/profile')
        const profilDetails = {
          ...rep.data.body,
        }
        dispatch(getProfilInfos(profilDetails))
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

const loadProfil = (token) => {
  return async (dispatch) => {
    try {
      console.log(token)
    } catch (err) {
      console.log(err)
    }
  }
}

const connectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      console.log(action)
      state.token = action.payload.token
      state.status = true
      state.error = false
    })
    .addCase(showError, (state) => {
      state.error = true
    })
    .addCase(logOut, (state) => {
      state.status = false
      state.token = undefined
      state.error = false
      state.email = ''
      state.firstName = ''
      state.lastName = ''
      state.id = null
    })
    .addCase(getProfilInfos, (state, action) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.id = action.payload.id
    })
})

export { connectionReducer, logUser, loadProfil }
