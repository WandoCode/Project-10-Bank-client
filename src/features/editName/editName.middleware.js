import { putUserProfil } from '../../store/userStore'
import { editProfil } from '../connection/connection.actions'

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

export { changeNamesMiddleware }
