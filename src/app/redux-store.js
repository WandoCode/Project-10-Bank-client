import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from '../features/session/session.reducer'
import editNameReducer from '../features/editName/editName.reducer'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    editName: editNameReducer,
  },
})
