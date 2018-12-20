import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { store, history } from './utilities/middleware'

import Base from './components/base/index'
import LoginPage from './pages/login/index'
import SignupPage from './pages/signup/index'
import dashboardPage from './pages/dashboard/index'
import NotFoundPage from './pages/not-found/index'

if (process.env.NODE_ENV !== 'production') {
  window.React = React
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Base}>
        <IndexRoute component={LoginPage} />
        <Route path="login" component={LoginPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="dashboard" component={dashboardPage} />
        <Route path="index.html" component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
