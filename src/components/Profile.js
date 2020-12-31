import React from 'react'
import { Link } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Tooltip } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

class Profile extends React.Component {

    state = {
        show: false,
        imageUrl: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.updateAvatar(this.state.imageUrl)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.user ?
                        <React.Fragment>
                            <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <OverlayTrigger
                                    overlay={<Tooltip id="tooltip-disabled">Click to update your avatar!</Tooltip>}>
                                    <img onClick={this.handleShow} style={{ width: 150, borderRadius: '50%' }} src={this.props.user.avatar ? this.props.user.avatar : '../../assets/EmptyUser.png'} />
                                </OverlayTrigger>
                                <span>{this.props.user.username}</span>
                                <Link to='/playlist'>
                                    <Button variant="dark">Go to my Playlist</Button>{' '}
                                </Link>
                            </div>

                            <Modal
                                show={this.state.show}
                                onHide={this.handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Update Avatar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>New Avatar:</Form.Label>
                                            <Form.Control onChange={this.changeHandler} value={this.state.imageUrl} name='imageUrl' type="text" placeholder="Image URL" />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                </Button>
                                    <Button variant="primary" onClick={this.submitHandler}>Update</Button>
                                </Modal.Footer>
                            </Modal>
                        </React.Fragment>

                        :

                        null
                }
            </React.Fragment>
        )
    }
}

export default Profile