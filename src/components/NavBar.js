import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

class NavBar extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50 }}>

                <div style={{ marginLeft: 30 }}>
                    <img style={{ height: 50 }} src='https://lh3.googleusercontent.com/proxy/rHa_RQ6L3lAc-4wF17ycu7aBfR-BigydIwvPLhMzKcPRQmwnzK01y_RbUMEOeBIkJ2jwQNn9JHN7lmGMOzXOWstC1NBXowQ' alt='musicIcon' />
                </div>

                <h1 style={{ marginLeft: 10 }}>Music</h1>

                <div style={{ marginLeft: 50 }}>
                    <NavLink to='/'>
                        <Button variant="light" size="lg">
                            Home
                        </Button>{' '}
                    </NavLink>
                    <NavLink to='/playlist'>
                        <Button variant="light" size="lg">
                            Playlist
                        </Button>{' '}
                    </NavLink>
                    <NavLink to='/user'>
                        <Button variant="light" size="lg">
                            Username
                        </Button>{' '}
                    </NavLink>
                </div>

            </div>
        )
    }
}

export default NavBar