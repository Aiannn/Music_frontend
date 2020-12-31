import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LogIn extends React.Component {

    state = {
        username: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.logInHandler(this.state)
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                <Form onSubmit={this.submitHandler} style={{ width: '30%' }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.changeHandler} value={this.state.username} name='username' type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            We'll never share your username with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.changeHandler} value={this.state.password} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        )
    }

}

export default LogIn