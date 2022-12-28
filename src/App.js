import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import './App.css'

import ContextTheme from './context/ContextTheme'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {isLight: true}

  changeTheme = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state
    return (
      <ContextTheme.Provider value={{isLight, changeTheme: this.changeTheme}}>
        <Switch>
          <Login exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved" component={Saved} />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App
