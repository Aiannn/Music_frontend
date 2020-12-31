import React from 'react'
import SongCard from './SongCard'

class Playlist extends React.Component {

    getFavoriteSongs = () => {
        return this.props.user.user_songs.map(song => {
            return <SongCard song={song} />
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.user ?
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ borderRadius: '20px', width: '80%', backgroundColor: 'black', display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                                {this.getFavoriteSongs()}
                            </div>
                        </div>
                        :
                        null
                }
            </React.Fragment>
        )
    }
}

export default Playlist