import React from 'react'
import SignupWidget from '../../components/signupWidget/index'
import { Link } from 'react-router'

class SignupPage extends React.Component {
  render() {
    return (
      <div className="login-signup-page">
        <SignupWidget />
        <div className="dont-have-creds">
          If you have credentials? you can
          <Link className="signup-link" to="/login">
            login here
          </Link>
        </div>
      </div>
    )
  }
}

export default SignupPage
