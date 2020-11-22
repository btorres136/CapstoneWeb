import React, { createContext, useEffect, useState } from 'react';
import Client from '../../feathers-client/feathers';
import PropTypes from 'prop-types';
import Loading from '../Utils/Loading';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userAuth, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    try {
      // eslint-disable-next-line no-undef
      if(localStorage.getItem('auth') != null){
        const {user} = await Client.reAuthenticate();
        if(user){
          setUser(user);
        }
      }
      setloading(false);
    }catch(error){
      setloading(false);
      console.log(error);
    }
  }, []);

  if(loading){
    return(
      <Loading />
    );
  }

  return (<UserContext.Provider value={{userAuth, setUser}}>{children}</UserContext.Provider>);
};
UserProvider.propTypes = {
  children: PropTypes.any
};

export default UserProvider;

