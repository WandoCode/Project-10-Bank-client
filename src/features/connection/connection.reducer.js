import { createReducer } from '@reduxjs/toolkit'
import { connect } from './connection.actions'

const initialState = {
  status: false,
  userFirstName: undefined,
  userLastName: undefined,
}

const connectionReducer = createReducer(initialState, (builder) => {
  builder.addCase(connect, (state, action) => {
    state.status = true
  })
})

export { connectionReducer }
