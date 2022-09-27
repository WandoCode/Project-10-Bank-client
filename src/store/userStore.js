import axios from 'axios'
const API_URL = 'http://localhost:3001/api/v1'

const postLogin = async ({ email, password }) => {
  const rep = await axios.post(API_URL + '/user/login', { email, password })
  return rep.data
}

const postUserProfil = async (token) => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
  })

  const rep = await axiosInstance.post('/user/profile')
  return rep.data
}

const putUserProfil = async (token, { firstName, lastName }) => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
  })
  const rep = await axiosInstance.put('/user/profile', { firstName, lastName })
  return rep.data
}

export { postLogin, postUserProfil, putUserProfil }
