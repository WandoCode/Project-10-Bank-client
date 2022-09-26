import { createAction } from '@reduxjs/toolkit'

const getProfilInfos = createAction('profil/getDetails', (token) => ({
  payload: token,
}))

export { getProfilInfos }
