import {Component} from 'react'

import './index.css'
import {DivData} from './styledComponent'

import ContextTheme from '../../context/ContextTheme'

import Header from '../Header'
import SideBar from '../SideBar'

class Trending extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight} = value
          return (
            <div>
              <Header />
              <div className="conatiner">
                <SideBar className="side" />
                <DivData isLight={isLight}>
                  <h1>GAMING DATA</h1>
                </DivData>
              </div>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Trending
