import React, {useEffect, useState, useContext} from 'react';
import { Card } from 'react-bootstrap';
import feathersClient from '../../../feathers-client/feathers';
import { AnalysisContext } from '../../Providers/AnalysisProvider';
import AnalysisData from './AnalysisData';

const MyAnalysis = () => {
  // eslint-disable-next-line no-unused-vars
  const [analysis, setAnalysis] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { selectedAnalysis, setSelectedAnalysis } = useContext(AnalysisContext);
  useEffect(() => {
    feathersClient.service('analysis').find().then((analysis) => {
      setAnalysis(analysis.data);
    });
    feathersClient.service('analysis').on('created', (data) => {
      setAnalysis((old) => {
        old.push(data);
        return old;
      });
    });
  }, []);
  const getAnalysis = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const select = document.getElementById('analysisSelect');
    setSelectedAnalysis(analysis[select.value]);
  };

  return (
    <Card className = 'shadow-sm rounded u-background-color-primary-light text-light p-4'>
      <h3>My Analysis</h3>
      {analysis.length !== 0 ? (
        <>
          <div className='myAnalysis'>
            <div className='myAnalysis__Search'>
              <select className='myAnalysis__Search--dropbox' id='analysisSelect'>
                {analysis.map((data,key) => {
                  const date = new Date(data.created_at);
                  return (<option key={key} value={key}>{'Analysis made on ' + date.getDate() +'/'+ (date.getMonth() + 1) + '/' + date.getFullYear()}</option>);
                })}
              </select>
              <button className='btn btn-primary myAnalysis__Search--button' onClick={getAnalysis}>
                Search
              </button>
            </div>
          </div>
          <AnalysisData />
        </>
      ): (<h1>Loading</h1>)}
    </Card>
  );
};

export default MyAnalysis;
