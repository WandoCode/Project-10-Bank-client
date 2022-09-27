import { logIn, showError, getProfilInfos } from './connection.actions'
import { postLogin, postUserProfil } from '../../store/userStore'

const logUser = (formDatas) => {
  return async (dispatch) => {
    try {
      const data = await postLogin(formDatas)

      const status = data.status
      if (status === 200) {
        const token = data.body.token
        dispatch(logIn(token))

        await loadProfil(dispatch, token)
      }
    } catch (err) {
      const status = err.response.status
      if (status === 400) {
        dispatch(showError(err.response.data.message))
      }
      if (status === 500) {
        throw new Error(err.message)
      }
    }
  }
}

const loadProfil = async (dispatch, token) => {
  try {
    const data = await postUserProfil(token)
    const status = data.status
    if (status === 200) {
      const profilDetails = {
        ...data.body,
      }
      dispatch(getProfilInfos(profilDetails))
    }
  } catch (err) {
    const status = err.response.status
    if (status === 400) {
      dispatch(showError())
    }
    if (status === 500) {
      throw new Error(err.message)
    }
  }
}

export default logUser
