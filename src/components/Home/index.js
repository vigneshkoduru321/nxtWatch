import {Component} from 'react'

import {ImCross} from 'react-icons/im'

import Header from '../Header'
import SideBar from '../SideBar'

import ContextTheme from '../../context/ContextTheme'

import './index.css'
import {DivData} from './styledComponent'

class Home extends Component {
  state = {showBanner: true}

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight, changeTheme} = value
          return (
            <div>
              <Header />
              <div className="conatiner">
                <SideBar className="side" />
                <DivData isLight={isLight}>
                  {showBanner ? (
                    <div className="banner-con">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt=""
                        className="website-logo"
                      />
                      <p>Buy Nxtwatch premium plans with UPI</p>
                      <button>GET IT NOW</button>
                      <button
                        className="nrml-button"
                        onClick={this.onCloseBanner}
                      >
                        <ImCross className="mini" />
                      </button>
                    </div>
                  ) : null}
                </DivData>
              </div>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Home
