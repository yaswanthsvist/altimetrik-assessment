import { put, takeLatest, call } from 'redux-saga/effects'
import { LOGIN, SIGNUP, GET_DATA } from './../actions/index'
import { signupUserApi, loginUserApi, getUserDataApi } from './../utilities/Api'
import { history } from './../utilities/middleware'
import {
  loginSuccess,
  loginError,
  signupSuccess,
  signupError,
  getDataSuccess,
  getDataError,
} from './../actions/index'

function* loginUser(action) {
  try {
    const { username, password } = action
    const response = yield call(loginUserApi, username, password)
    const data = yield response.json()
    if (response.status !== 200) {
      // make the promise be rejected if we didn't get a 200 response
      throw new Error(JSON.stringify(data))
    } else {
      yield put(loginSuccess())
      yield call(history.push, '/dashboard')
    }
  } catch (err) {
    yield put(loginError(err))
  }
}
function* signupUser(action) {
  try {
    const { userDetails } = action
    const response = yield call(signupUserApi, userDetails)
    const data = yield response.json()
    if (response.status !== 200) {
      // make the promise be rejected if we didn't get a 200 response
      throw new Error(JSON.stringify(data))
    } else {
      yield put(signupSuccess())
      yield call(history.push, '/login')
    }
  } catch (err) {
    yield put(signupError(err))
  }
}

function* getUserData(action) {
  try {
    const { userDetails } = action
    const response = yield call(getUserDataApi)

    if (response.status !== 200) {
      // make the promise be rejected if we didn't get a 200 response
      throw new Error(JSON.stringify(data))
    } else {
      const data = yield response.json()
      yield put(getDataSuccess(data))
    }
  } catch (err) {
    yield put(getDataError(err))
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginUser)
}
export function* watchSignup() {
  yield takeLatest(SIGNUP, signupUser)
}
export function* watchGetData() {
  yield takeLatest(GET_DATA, getUserData)
}
