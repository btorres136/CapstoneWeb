import React from 'react';
import './resources/SCSS/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPageLoader from './components/LandingPage/LandingPageLoader';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import UserProvider from './components/Providers/UserProvider';
import PrivateRoute from './components/Utils/PrivateRoute';
import FourZeroFour from './components/Utils/FourZeroFour';
import AnalysisProvider from './components/Providers/AnalysisProvider';
import DoctorDashboard from './components/Dashboard/Doctor/DoctorDashboard';


function App() {
  return (
    <UserProvider>
      <AnalysisProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPageLoader} />
            <PrivateRoute authorize={['Patient']} exact path='/Dashboard' component={Dashboard} />
            <PrivateRoute authorize={['Doctor']} exact path='/Dashboard/Doctor' component={DoctorDashboard} />
            <Route exact path='/login' component={Login} />
            <Route component={FourZeroFour} />
          </Switch>
        </BrowserRouter>
      </AnalysisProvider>
    </UserProvider>
  );
}

export default App;
