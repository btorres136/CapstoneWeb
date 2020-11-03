import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import {Card} from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import { AreaChart, CartesianGrid, YAxis, XAxis, Tooltip, Area, ResponsiveContainer} from 'recharts';
import {FaUserAlt, FaBone } from 'react-icons/fa';
//import {IoMdPulse} from 'react-icons/io';
import {MdDateRange} from 'react-icons/md';
import Axios from 'axios';
//import { user } from '../utils/urls';
const Dashboard = () => {

  useEffect(() => {
    Axios.get('/users').then((res) => {
      console.log(res);
    });
  });

  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  return (
    <div className='main'>
      <MyNavbar />
      <div className='wrapper'>
        <div className='row mb-5'>
          <div className='col-md'>
            <Card className='shadow-lg rounded'>
              <Card.Body>
                <Card.Title>
                  Patient Info
                </Card.Title>
                <div className='card-content'>
                  <div className='card-content--icon'>
                    <FaUserAlt className='UserAltIcon' />
                  </div>
                  <div className='card-content--info'>
                    <p>Name: </p>
                    <p>Age: </p>
                    <p>LastName: </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='shadow-lg rounded'>
              <Card.Body>
                <Card.Title>
                  Last Activity
                </Card.Title>
                <div className='card-content'>
                  <div className='card-content--icon'>
                    <FaBone className='BoneIcon' />
                  </div>
                  <div className='card-content--info'>
                    <p>Date: </p>
                    <p>Scoliosis Type: </p>
                    <p>Risk: </p>
                    <p>Angles: </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='shadow-lg rounded'>
              <Card.Body>
                <Card.Title>
                  New Scan
                </Card.Title>
                <Card.Text>
                  test
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md'>
            <Card className='shadow-lg rounded'>
              <Card.Body>
                <Card.Title>Progress</Card.Title>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={data}
                    margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md'>
            <Card className='shadow-lg rounded'>
              <Card.Body>
                <MdDateRange />
                <Card.Title>
                  Select a Date
                </Card.Title>
                <Card.Text>
                  Information will be displayed here!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
