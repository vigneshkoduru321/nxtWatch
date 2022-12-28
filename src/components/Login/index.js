import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {Form} from './styledComponent'
import './index.css'

import ContextTheme from '../../context/ContextTheme'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showpass: false,
    showerror: false,
    errormsg: '',
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showpass: !prevState.showpass}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (response.ok) {
      const JWT = responseData.jwt_token
      Cookies.set('jwt_token', JWT, {expires: 30})

      this.setState({showerror: false})
    } else {
      this.setState({
        showerror: true,
        errormsg: responseData.error_msg,
        username: '',
        password: '',
      })
    }
  }

  render() {
    const {showpass, username, password, errormsg, showerror} = this.state
    const JWT = Cookies.get('jwt_token')
    if (JWT !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight, changeThem} = value
          return (
            <div className="login-main-container">
              <Form onSubmit={this.onLogin} isLight={isLight}>
                <img
                  src={
                    isLight
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt=""
                  className="website-logo"
                />
                <div className="label-con">
                  <label htmlFor="username">USERNAME</label>
                  <input
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="USERNAME"
                    type="text"
                    id="username"
                  />
                </div>
                <div className="label-con">
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="PASSWORD"
                    type={showpass ? 'text' : 'password'}
                    id="password"
                  />
                </div>
                <div className="checkbox-con">
                  <input
                    onChange={this.onChangeCheckbox}
                    placeholder="PASSWORD"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label htmlFor="checkbox">Show Password</label>
                </div>
                <button className="submit-button" type="submit">
                  Login
                </button>
                {showerror ? <p className="error">{errormsg}</p> : null}
              </Form>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Login
