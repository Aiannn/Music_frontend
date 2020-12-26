import React from 'react'
import ArtistCard from '../components/ArtistCard'

class ArtistContainer extends React.Component {

    getArtists = () => {
        return this.props.artists.map(artist => {
            return (
                <ArtistCard key={artist.id} artist={artist} />
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.getArtists()}
            </React.Fragment>
        )
    }
}

export default ArtistContainer