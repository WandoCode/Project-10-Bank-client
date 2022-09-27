import { createReducer } from '@reduxjs/toolkit'
import { showForm, hideForm } from './editName.action'

const initialState = {
  visibleForm: false,
}

const editNameReducer = createReducer(initialState, (builder) => {
  builder.addCase(showForm, (state) => {
    state.visibleForm = true
  })
  builder.addCase(hideForm, (state) => {
    state.visibleForm = false
  })
})

export default editNameReducer
