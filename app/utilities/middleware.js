import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { syncHistory } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import { watchLogin, watchSignup, watchGetData } from './../sagas/index'
import { reduxReducers } from './../reducers/index'

let sagaMiddleware = createSagaMiddleware()

const reduxRouterMiddleware = syncHistory(browserHistory)
let middlewares = [logger, reduxRouterMiddleware, sagaMiddleware]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const history = browserHistory

export const store = createStoreWithMiddleware(reduxReducers)

sagaMiddleware.run(function*() {
  return yield all([watchLogin(), watchSignup(), watchGetData()])
})
