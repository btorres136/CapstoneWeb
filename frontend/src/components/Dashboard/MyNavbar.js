import React, {useContext} from 'react';
import {Button, Navbar} from 'react-bootstrap';
import feathersClient from '../../feathers-client/feathers';
import PropTypes from 'prop-types';
import { UserContext } from '../Providers/UserProvider';

const MyNavbar = () => {
  const {setUser} = useContext(UserContext);
  const LogOut = () => {
    feathersClient.logout();
    setUser(null);
  };
  return (<Navbar variant='dark' expand='lg' className='mynavbar'>
    <Navbar.Brand className='mynavbar--brand mr-auto'>Spine Web</Navbar.Brand>
    <Button variant="primary" onClick={LogOut}>LogOut</Button>
  </Navbar>);
};

MyNavbar.propTypes = {
  history: PropTypes.any
};

export default MyNavbar;
