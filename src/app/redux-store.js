import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from '../features/session/session.reducer'
import formDisplayReducer from '../features/formDisplay/formDisplay.reducer'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    formDisplay: formDisplayReducer,
  },
})
