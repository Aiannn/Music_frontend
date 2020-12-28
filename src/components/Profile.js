import React from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.user ?
                        <div>
                            User data
                        </div>

                        :

                        <Redirect to='/' />
                }
            </React.Fragment>
        )
    }
}

export default Profile