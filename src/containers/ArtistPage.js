import React from 'react'
import { withRouter } from 'react-router-dom'
import SongCard from '../components/SongCard'

class ArtistPage extends React.Component {

    state = {
        songs: []
    }

    componentDidMount() {
        this.fetchSongs()
    }

    fetchSongs = () => {
        fetch(`http://localhost:3000/artists/${this.props.match.params.id}/songs`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ songs: data.data })
            })
    }

    getSongs = () => {
        return this.state.songs.map(song => {
            return (
                <SongCard song={song} key={song.id} />
            )
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
                <h2>{this.props.location.state.artistName}</h2>
                <div style={{ borderRadius: '20px', width: '80%', backgroundColor: 'black', display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                    {this.getSongs()}
                </div>
            </div>
        )
    }
}

export default withRouter(ArtistPage)