import { configureStore } from '@reduxjs/toolkit'
import connectionReducer from '../features/connection/connection.reducer'
import editNameReducer from '../features/editName/editName.reducer'

export const store = configureStore({
  reducer: {
    connection: connectionReducer,
    editName: editNameReducer,
  },
})
