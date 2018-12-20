import { combineReducers } from 'redux'
import { signupReducer } from './signup-reducer'
import { loginReducer } from './login-reducer'
import { dataReducer } from './data-reducer'
import { routeReducer } from 'react-router-redux'

export const reduxReducers = combineReducers({
  route: routeReducer,
  signup: signupReducer,
  login: loginReducer,
  data: dataReducer,
})
