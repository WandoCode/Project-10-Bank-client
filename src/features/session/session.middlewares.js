import { logIn, showError, getProfil, editProfil } from './session.actions'
import { postLogin, postUserProfil, putUserProfil } from '../../store/userStore'

const logInMiddleware = (formDatas) => {
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
      dispatch(getProfil(profilDetails))
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

const changeNamesMiddleware = (token, formDatas) => {
  return async (dispatch) => {
    try {
      const data = await putUserProfil(token, formDatas)
      const status = data.status
      if (status === 200) {
        dispatch(editProfil(formDatas))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export { logInMiddleware, changeNamesMiddleware }
