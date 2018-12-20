import { SIGNUP, SIGNUP_SUCCEEDED, SIGNUP_ERROR } from '../actions/index'

const initialState = {
  error: null,
  username: null,
  password: null,
  firstname: null,
  lastname: null,
  email: null,
  gender: 'male',
  country: null,
}

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      const { username, password } = action
      return {
        ...state,
        username,
        password,
      }
    case SIGNUP_SUCCEEDED:
      return {
        ...state,
        error: null,
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
