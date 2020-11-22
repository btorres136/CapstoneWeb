import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from '../Providers/UserProvider';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
  const { userAuth } = useContext(UserContext);
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
  component: PropTypes.any
};

export default PrivateRoute;
