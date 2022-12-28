import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import {BiSave} from 'react-icons/bi'

import {Component} from 'react'

import {Link} from 'react-router-dom'

import {Side} from './styledComponent'
import ContextTheme from '../../context/ContextTheme'

import './index.css'

class SideBar extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {isLight, changeTheme} = value
          return (
            <Side isLight={isLight}>
              <Link to="/">
                <div className="mini-con">
                  <AiFillHome className="mini" />
                  <p>Home</p>
                </div>
              </Link>
              <Link to="/trending">
                <div className="mini-con">
                  <AiFillFire className="mini" />
                  <p>Trending</p>
                </div>
              </Link>
              <Link to="/gaming">
                <div className="mini-con">
                  <FaGamepad className="mini" />
                  <p>Gaming</p>
                </div>
              </Link>
              <Link to="/">
                <div className="mini-con">
                  <BiSave className="mini" />
                  <p>Saved Videos</p>
                </div>
              </Link>
            </Side>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default SideBar
