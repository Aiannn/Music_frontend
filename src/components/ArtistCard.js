import React from 'react'

class ArtistCard extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                <img style={{ borderRadius: '50%', width: '50%' }} src={this.props.artist.picture_big} />
                <span style={{ color: 'white' }}>{this.props.artist.name}</span>
            </div>
        )
    }
}

export default ArtistCard