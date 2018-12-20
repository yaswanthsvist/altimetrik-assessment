import React from 'react'
import LabelWidget from './../common/LabelWidget'
import { login } from './../../actions/index'
import { getLoginStatus } from './../../selectors/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class LoginWidget extends React.Component {
  state = {
    username: null,
    password: null,
  }
  handleChange = (value, stateProp) => {
    this.setState({ [stateProp]: value })
  }

  handleSubmit = event => {
    const { username, password } = this.state
    this.props.login(username, password)
    event.preventDefault()
  }

  render() {
    return (
      <div className="login-widget">
        <form onSubmit={this.handleSubmit}>
          <LabelWidget
            name="Username"
            type="text"
            stateProp="username"
            state={this.state}
            handleChange={this.handleChange}
          />
          <LabelWidget
            name="Password"
            stateProp="password"
            state={this.state}
            type="password"
            handleChange={this.handleChange}
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWidget)
