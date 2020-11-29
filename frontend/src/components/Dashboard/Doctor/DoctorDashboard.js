import React from 'react';
import MyNavbar from '../MyNavbar';
import MyAnalysis from '../Patient/MyAnalysis';
import UserInformation from '../UserInformation';

const DoctorDashboard = () => {
  return (
    <div className='main'>
      <MyNavbar />
      <div className='wrapper'>
        <div className='row justify-content-md-center mb-4'>
          <div className='col-lg-4'>
            <UserInformation />
          </div>
          <div className='col-lg-8'>
            <p>Hello</p>
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

export default DoctorDashboard;
