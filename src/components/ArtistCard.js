import React from 'react'
import { Link } from 'react-router-dom'

class ArtistCard extends React.Component {

    render() {
        return (
            <Link to={{
                pathname: `/artists/${this.props.artist.id}`,
                state: { artistName: this.props.artist.name }
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                    <img style={{ borderRadius: '50%', width: 150, height: 150 }} src={this.props.artist.picture_big} />
                    <span style={{ color: 'white' }}>{this.props.artist.name}</span>
                </div>
            </Link>
        )
    }
}

export default ArtistCard