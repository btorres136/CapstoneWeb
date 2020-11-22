import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import feathersClient from '../../../feathers-client/feathers';
import { UserContext } from '../../Providers/UserProvider';
import {GiBodyHeight} from 'react-icons/gi';
import {FaWeight} from 'react-icons/fa';

const PatientInformation = () => {

  const [patientInfo, setPatientInfo] = useState({});
  const {userAuth} = useContext(UserContext);

  useEffect(() => {
    setPatientInfo(userAuth.user_is_patient);
    feathersClient.service('patient').on('patched', (patient) => setPatientInfo(patient));
    return () =>{
      feathersClient.service('messages').removeListener('created', (res) => setPatientInfo(res));
    };
  }, []);
  console.log(patientInfo);
  return (
    <>
      <div className='row'>
        <div className='col'>
          <Card className='shadow-sm rounded u-background-color-red-dark text-light'>
            <div className='Patient-Height'>
              <GiBodyHeight className='Patient-Height--icon' />
              <p>{patientInfo.initial_height} ``</p>
            </div>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Card className='shadow-sm rounded u-background-color-green-dark text-light'>
            <div className='Patient-Weight'>
              <FaWeight className='Patient-Weight--icon'/>
              <p>{patientInfo.initial_weight} lb.</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PatientInformation;
