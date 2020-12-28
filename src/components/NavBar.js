import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

class NavBar extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50 }}>

                <div style={{ marginLeft: '10%' }}>
                    <img style={{ height: 50, width: 50 }} src='https://cdn.icon-icons.com/icons2/510/PNG/512/ios7-musical-notes_icon-icons.com_50221.png' alt='musicIcon' />
                </div>

                <h1 style={{ marginLeft: 10 }}>Music</h1>


                {
                    this.props.user ?
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
                            <NavLink to='/profile'>
                                <Button variant="light" size="lg">
                                    {this.props.user.username}
                                </Button>{' '}
                            </NavLink>
                            <NavLink to='/'>
                                <Button onClick={this.props.logOutHandler} variant='light' size='lg'>
                                    Log Out
                                </Button>
                            </NavLink>
                        </div>

                        :

                        <div style={{ marginLeft: 50 }}>
                            <NavLink to='/'>
                                <Button variant='light' size='lg'>
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink to='/signup'>
                                <Button variant='light' size='lg'>
                                    Sign Up
                                </Button>
                            </NavLink>
                        </div>
                }
            </div>
        )
    }
}

export default NavBar