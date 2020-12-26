import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import ArtistContainer from './containers/ArtistContainer'
import NavBar from './components/NavBar'

class App extends React.Component {

  state = {
    artists: []
  }

  getArtists = () => {
    for (let i = 1; i < 25; i++)
      fetch(`http://localhost:3000/artists/${Math.floor(Math.random() * 2000)}`) //2000 - It means that random in range [0; 2000], so I chose 2000 because first number artists are best known, the farest you go towards number increase the less famous artists you find
        .then(resp => resp.json())
        .then(artist => {
          this.setState({
            artists: [...this.state.artists, artist]
          })
        })
  }

  componentDidMount() {
    this.getArtists()
  }

  render() {
    return (
      <React.Fragment>

        <NavBar />

        <div style={{ backgroundColor: 'black', display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto' }}>
          <ArtistContainer artists={this.state.artists} />
        </div>

        <Switch>
          <Route exact path='/' render={() => App} />
          <Route exact path='/user' render={() => <div>Hello world</div>} />
        </Switch>

      </React.Fragment>
    )
  }
}

export default withRouter(App);
