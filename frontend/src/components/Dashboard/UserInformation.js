import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Providers/UserProvider';
import feathersClient from '../../feathers-client/feathers';
import { Card } from 'react-bootstrap';
import Loading from '../Utils/Loading';

const UserInformation = () => {
  const {userAuth} = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(userAuth);
    feathersClient.service('user').on('patch', res => setUserData(res));
    return () => {
      feathersClient.service('user').removeListener('patch', res => setUserData(res));
    };
  }, []);
  if(!userData){
    return (<Loading />);
  }
  return (
    <Card className='shadow-sm rounded u-background-color-primary-light text-light p-4'>
      <div className='UserInfo'>
        <img src="/img/girl_image.jpg" className="user-picture"/>
        <div className='UserInfo--text'>
          <div className='UserInfo-card-title'>
            <p>User Information</p>
          </div>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          <p>Last Name: {userData.lastName}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserInformation;
