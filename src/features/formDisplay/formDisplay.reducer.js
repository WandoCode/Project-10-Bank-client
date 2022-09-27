import { createReducer } from '@reduxjs/toolkit'

import { showForm, hideForm } from './formDisplay.action'

const initialState = {
  visibleForm: false,
}

const formDisplayReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showForm, (state) => {
      state.visibleForm = true
    })
    .addCase(hideForm, (state) => {
      state.visibleForm = false
    })
})

export default formDisplayReducer
