import { LOGIN, LOGIN_SUCCEEDED, LOGIN_ERROR } from './../actions/index'

export const [LOGGED_IN, NOT_LOGGED_IN] = [0, 1]

const initialState = {
  error: null,
  username: null,
  password: null,
  status: NOT_LOGGED_IN,
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const { username, password } = action
      return {
        ...state,
        username,
        password,
      }
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        status: LOGGED_IN,
        error: null,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        status: NOT_LOGGED_IN,
      }
    default:
      return state
  }
}
