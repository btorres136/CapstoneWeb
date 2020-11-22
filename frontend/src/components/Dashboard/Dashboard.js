import React from 'react';
import MyNavbar from './MyNavbar';
import { withRouter } from 'react-router-dom';
import PatientInformation from './Patient/PatientInformation';
// eslint-disable-next-line no-unused-vars
import MyProgress from './Patient/MyProgress';
import UserInformation from './UserInformation';
import MyDoctor from './Patient/myDoctors';
import MyAnalysis from './Patient/MyAnalysis';


const Dashboard = () => {

  return (
    <div className='main'>
      <MyNavbar />
      <div className='wrapper'>
        <div className='row justify-content-md-center mb-4'>
          <div className='col-lg-4'>
            <UserInformation />
          </div>
          <div className='col-lg'>
            <PatientInformation />
          </div>
          <div className='col-lg-6'>
            <MyDoctor />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg'>
            <MyAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
