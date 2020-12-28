import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {

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
        this.props.signUpHandler(this.state)
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I read Terms and Conditions" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Sign Up
                    </Button>
                    <div style={{ marginTop: 30 }}>
                        Already have an account?
                        <br></br>
                        <Link to='/login'>
                            Log In
                        </Link>
                    </div>
                </Form>
            </div>
        )
    }

}

export default SignUp