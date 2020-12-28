import React from 'react'
import { Redirect } from 'react-router-dom'

class Playlist extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.user ?
                        <div>
                            Playlist
                        </div>
                        :
                        <Redirect to='/' />
                }
            </React.Fragment>
        )
    }
}

export default Playlist