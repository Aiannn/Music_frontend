import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class SongCard extends React.Component {

    state = {
        added: null
    }

    deleteFromPlaylist = () => {
        fetch(`http://localhost:3000/songs/${this.props.song.id}`, {
            method: 'DELETE'
        })
        window.location.reload()
    }

    addToPlaylist = () => {
        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: document.querySelector('#username').innerHTML, //LOL, It's the best decision I suppose.
                title: this.props.song.title,
                artist: this.props.song.artist.name,
                duration: this.props.song.duration,
                preview: this.props.song.preview,
                album_pic: this.props.song.album.cover_medium,
                artist_deezer_id: this.props.song.artist.id
            })
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    added: data
                })
            })
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <img style={{ borderRadius: '50%', width: 200, height: 200 }} src={this.props.song.album ? this.props.song.album.cover_medium : this.props.song.album_pic} />
                {/* either render from DeezerAPI or from Backend (line 31) */}
                {this.props.song.album ?
                    <span style={{ color: 'white' }}>{this.props.song.title}</span>
                    :
                    <Link to={{
                        pathname: `/artists/${this.props.song.artist_deezer_id}`,
                        state: { artistName: this.props.song.artist }
                    }}>
                        <span style={{ color: 'white' }}>{this.props.song.artist} - {this.props.song.title}</span>
                    </Link>
                }
                <audio style={{ height: 45 }} src={this.props.song.preview} controls />

                {localStorage.length > 0 ?
                    <React.Fragment>
                        {this.props.song.album ?
                            <React.Fragment>
                                {this.state.added ?
                                    <Button variant='light' size='sm'>Added to Playlist</Button>
                                    :
                                    <Button onClick={this.addToPlaylist} variant='dark' size='sm'>Add to Playlist</Button>
                                }
                            </React.Fragment>
                            :
                            <Button onClick={this.deleteFromPlaylist} variant='dark' size='sm'>Delete from Playlist</Button>
                        }
                    </React.Fragment>
                    :
                    null
                }
            </div>
        )
    }
}

export default SongCard