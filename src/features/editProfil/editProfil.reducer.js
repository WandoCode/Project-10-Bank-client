import { createReducer } from '@reduxjs/toolkit'
import { showForm, hideForm } from './editProfil.action'

const initialState = {
  visibleForm: false,
}

const editProfilReducer = createReducer(initialState, (builder) => {
  builder.addCase(showForm, (state) => {
    state.visibleForm = true
  })
  builder.addCase(hideForm, (state) => {
    state.visibleForm = false
  })
})

export default editProfilReducer
