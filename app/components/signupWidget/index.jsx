import React from 'react'
import LabelWidget from './../common/LabelWidget'
import { signup } from '../../actions/index'
import { getSignupError } from '../../selectors/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// const pageId = 2

const mapStateToProps = state => ({
  loginError: getSignupError,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signup,
    },
    dispatch
  )
export class SignupWidget extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
  }
  state = {
    username: null,
    password: null,
    firstname: null,
    lastname: null,
    email: null,
    gender: 'male',
    country: null,
  }
  labels = [
    {
      name: 'Username',
      stateProp: 'username',
    },
    {
      name: 'Password',
      stateProp: 'password',
      type: 'password',
    },
    {
      name: 'Email',
      stateProp: 'email',
      type: 'email',
    },
    {
      name: 'First Name',
      stateProp: 'firstname',
    },
    {
      name: 'Last Name',
      stateProp: 'lastname',
    },
  ]
  handleChange = (value, stateProp) => {
    this.setState({ [stateProp]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signup(this.state)
  }

  render() {
    return (
      <div className="login-widget">
        <form onSubmit={this.handleSubmit}>
          {this.labels.map((labelProps, index) => (
            <LabelWidget
              {...labelProps}
              state={this.state}
              handleChange={this.handleChange}
              key={index}
            />
          ))}
          <input className="submit" type="submit" value="Signup" />
        </form>
      </div>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupWidget)
