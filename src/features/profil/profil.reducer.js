import { createReducer } from '@reduxjs/toolkit'
import { getProfilInfos } from './profil.actions'
import { useSelector } from 'react-redux'

const API_URL = 'http://localhost:3001/api/v1'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  id: null,
}

const loadProfil = (token) => {
  return async (dispatch) => {
    const token = useSelector(state => state.token)
    try {
        
        const rep = await 
    } catch (err) {
      console.log(err)
    }
  }
}
