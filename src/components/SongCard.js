import React from 'react'

class SongCard extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <img style={{ borderRadius: '50%', width: 200, height: 200 }} src={this.props.song.album.cover_medium} />
                <span style={{ color: 'white' }}>{this.props.song.title_short}</span>
                <audio src={this.props.song.preview} controls />
            </div>
        )
    }
}

export default SongCard