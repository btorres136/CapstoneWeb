import Axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
    Axios.post('/authentication', {
      'strategy':'local',
      'email': e.target.elements.email.value,
      'password': e.target.elements.password.value,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };
  return(<div>
    <Form onSubmit={loginUser}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>);
};

export default Login;
