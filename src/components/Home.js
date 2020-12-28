import React from 'react'
import ArtistContainer from '../containers/ArtistContainer'

class Home extends React.Component {

    state = {
        artists: []
    }

    componentDidMount() {
        this.getArtists()
    }

    getArtists = () => {
        for (let i = 1; i < 25; i++)
            fetch(`http://localhost:3000/artists/${Math.floor(Math.random() * 1000)}`) //1000 - It means that random in range [0; 1000], so I chose 1000 because first number artists are best known, the farest you go towards number increase the less famous artists you find
                .then(resp => resp.json())
                .then(artist => {
                    this.setState({
                        artists: [...this.state.artists, artist]
                    })
                })
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '80%', backgroundColor: 'black', display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto' }}>
                    <ArtistContainer artists={this.state.artists} />
                </div>
            </div>
        )
    }
}

export default Home