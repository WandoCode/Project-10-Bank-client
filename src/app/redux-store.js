import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from '../features/session/session.reducer'
import editProfilReducer from '../features/editProfil/editProfil.reducer'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    editProfil: editProfilReducer,
  },
})
