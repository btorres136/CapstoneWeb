import React, { useCallback, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Client from '../../feathers-client/feathers';
import PropTypes from 'prop-types';
import { UserContext } from '../Providers/UserProvider';
import { Redirect, withRouter } from 'react-router-dom';

const Login = ({history}) => {
  const {userAuth, setUser} = useContext(UserContext);
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        const result = await Client.authenticate({
          strategy: 'local',
          email: email.value,
          password: password.value
        });
        console.log(result);
        setUser(result.user);
      } catch(error) {
        // eslint-disable-next-line no-undef
        alert(error);
      }
    },
    [history]
  );


  if(userAuth){
    return <Redirect to={'/Dashboard'} />;
  }
  return(<div>
    <Form onSubmit={handleLogin}>
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

Login.propTypes = {
  history: PropTypes.any
};

export default withRouter(Login);
