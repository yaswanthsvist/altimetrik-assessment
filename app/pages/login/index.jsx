import React from 'react'
import LoginWidget from '../../components/loginWidget/index'
import { Link } from 'react-router'

class LoginPage extends React.Component {
  handleLike = () => {
    return this.props.actions.likePostById(pageId)
  }

  render() {
    return (
      <div className="login-signup-page">
        <LoginWidget />
        <div className="dont-have-creds">
          Don't have credentials? you can
          <Link className="signup-link" to="/signup">
            signup here
          </Link>
        </div>
      </div>
    )
  }
}
export default LoginPage
