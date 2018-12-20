export const SIGNUP = 'SIGNUP'
export const signup = userDetails => ({
  type: SIGNUP,
  userDetails,
})
export const SIGNUP_SUCCEEDED = 'SIGNUP_SUCCEEDED'
export const signupSuccess = data => ({
  type: SIGNUP_SUCCEEDED,
  data,
})

export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const signupError = error => ({
  type: SIGNUP_ERROR,
  error,
})

export const LOGIN = 'LOGIN'
export const login = (username, password) => ({
  type: LOGIN,
  username,
  password,
})

export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const loginSuccess = () => ({
  type: LOGIN_SUCCEEDED,
})

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
})

export const GET_DATA = 'GET_DATA'
export const getData = () => ({
  type: GET_DATA,
})

export const GET_DATA_SUCCEEDED = 'GET_DATA_SUCCEEDED'
export const getDataSuccess = data => ({
  type: GET_DATA_SUCCEEDED,
  data,
})

export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const getDataError = error => ({
  type: GET_DATA_ERROR,
  error,
})
