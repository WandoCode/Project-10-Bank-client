import { configureStore } from '@reduxjs/toolkit'
import { connectionReducer } from '../features/connection/connection.reducer'

export const store = configureStore({
  reducer: {
    connection: connectionReducer,
  },
})
