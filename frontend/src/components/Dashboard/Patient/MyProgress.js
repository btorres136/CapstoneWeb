/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import feathersClient from '../../../feathers-client/feathers';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';



const MyProgress = () => {
  const [angules, setAngules] = useState([]);

  const getAngules = (analysis) => {
    const angule = [];
    analysis.map((data, key) => {
      if(data.sType){
        var dateS = new Date(data.sType.created_at);
        angule.push({
          name: dateS.getDate() + '-' + dateS.getMonth(),
          S_Type_High_Angule: data.sType.highAngle,
          S_Type_Low_Angule: data.sType.lowAngle,
          C_Type_Angule: 0,
        });
      }else if(data.cType){
        var dateC = new Date(data.cType.created_at);
        angule.push({
          name: dateC.getDate() + '-' + dateC.getMonth(),
          S_Type_High_Angule: 0,
          S_Type_Low_Angule: 0,
          C_Type_Angule: data.cType.angle,
        });
      }
    });
    setAngules(angule);
  };
  useEffect(() => {
    feathersClient.service('analysis').find().then((analysis) => {
      getAngules(analysis.data);
    });
  }, []);

  return (
    <Card className = 'shadow-sm rounded u-background-color-primary-light text-light p-4'>
      <h2>My Progress</h2>
      <div style={{width: '100%', height: 370}}>
        <ResponsiveContainer>
          <AreaChart
            width={700}
            height={500}
            data={angules}
            margin={{
              top: 20, right: 30, left: 0, bottom: 0,
            }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="S_Type_High_Angule" stroke="#4077be" fill="#4077be" />
            <Area type="monotone" dataKey="S_Type_Low_Angule" stroke="#d1495b" fill="#d1495b" />
            <Area type="monotone" dataKey="C_Type_Angule" stroke="#40be70" fill="#40be70" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MyProgress;
