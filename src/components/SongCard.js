import React from 'react'
import { Button } from 'react-bootstrap'

class SongCard extends React.Component {

    state = {

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
                artist: this.props.song.artist,
                duration: this.props.song.duration,
                preview: this.props.song.preview,
                album_pic: this.props.song.album.cover_medium
            })
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <img style={{ borderRadius: '50%', width: 200, height: 200 }} src={this.props.song.album ? this.props.song.album.cover_medium : this.props.song.album_pic} />
                {/* either render from DeezerAPI or from Backend (line 31) */}
                <span style={{ color: 'white' }}>{this.props.song.title}</span>
                <audio src={this.props.song.preview} controls />

                {this.props.song.album ?
                    <Button onClick={this.addToPlaylist} variant='dark' size='sm'>Add to Playlist</Button>
                    :
                    null
                }

            </div>
        )
    }
}

export default SongCard