import React from 'react';
import {Navbar} from 'react-bootstrap';

const MyNavbar = () => {
  return (<Navbar variant='dark' expand='lg' className='shadow-lg mynavbar'>
    <Navbar.Brand className='mynavbar--brand'>Spine Web</Navbar.Brand>
  </Navbar>);
};

export default MyNavbar;
