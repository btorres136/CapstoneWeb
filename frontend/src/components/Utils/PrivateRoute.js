import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from '../Providers/UserProvider';

const PrivateRoute = ({component: RouteComponent, authorize, ...rest}) => {
  const { userAuth } = useContext(UserContext);
  if(userAuth){
    if(authorize.indexOf(userAuth.role) <= -1){
      console.log('index');
      return (<Redirect to='/404'/>);
    }
  }
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        userAuth ? ( <RouteComponent {...routeProps} />
        ): (<Redirect to='/login' />)
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  authorize: PropTypes.array,
};

export default PrivateRoute;
