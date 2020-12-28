import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Playlist from './components/Playlist'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'

class App extends React.Component {

  state = {
    user: null
  }

  logInHandler = (userObj) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: userObj })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('token', data.jwt)
        this.setState({ user: data.user }, () => this.props.history.push('/'))
      })
  }

  logOutHandler = () => {
    localStorage.removeItem('token')
    this.setState({
      user: null
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => resp.json())
        .then(data => this.setState({ user: data.user }))
    } else {
      this.props.history.push('/login')
    }
  }

  signUpHandler = (userObj) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: userObj })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('token', data.jwt)
        this.setState({ user: data.user }, () => this.props.history.push('/'))
      })
  }

  render() {
    return (
      <React.Fragment>

        <NavBar user={this.state.user} logOutHandler={this.logOutHandler} />

        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/playlist' render={() => <Playlist user={this.state.user} />} />
          <Route exact path='/profile' render={() => <Profile user={this.state.user} />} />
          <Route exact path='/signup' render={() => <SignUp signUpHandler={this.signUpHandler} />} />
          <Route exact path='/login' render={() => <LogIn logInHandler={this.logInHandler} />} />
        </Switch>

      </React.Fragment>
    )
  }
}

export default withRouter(App);
