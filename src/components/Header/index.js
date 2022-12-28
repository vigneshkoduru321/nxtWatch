import {FaMoon} from 'react-icons/fa'

import {BsSun} from 'react-icons/bs'
import {Component} from 'react'

import ContextTheme from '../../context/ContextTheme'

import {Nav} from './styledComponent'

import './index.css'

class Header extends Component {
  render() {
    console.log('')
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight, changeTheme} = value
          const onChangeTheme = () => {
            changeTheme()
          }
          return (
            <Nav isLight={isLight}>
              <img
                src={
                  isLight
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt=""
                className="nav-logo"
              />
              <div className="logout-con">
                <button onClick={onChangeTheme} className="nrml-button">
                  {isLight ? (
                    <FaMoon className="mini" />
                  ) : (
                    <BsSun className="mini" />
                  )}
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile"
                  />
                </button>
                <button>Logout</button>
              </div>
            </Nav>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Header
