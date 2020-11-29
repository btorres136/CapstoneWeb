import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { AnalysisContext } from '../../Providers/AnalysisProvider';
import MySpineLoader from './MySpineLoader';
import { Card } from 'react-bootstrap';
import {GiBodyHeight} from 'react-icons/gi';
import {FaWeight} from 'react-icons/fa';

const analysisData = () => {
  const {selectedAnalysis} = useContext(AnalysisContext);
  console.log(selectedAnalysis);
  return selectedAnalysis ? (
    <>
      <p>Analysis ID: {selectedAnalysis.id}</p>
      <div className='row mt-4'>
        <div className='col-2'>
          <div className='UserInfo-card-title'>
            <p>General Information</p>
          </div>
          <div className='row'>
            <div className='col'>
              <Card className='shadow-sm rounded u-background-color-red-dark text-light'>
                <div className='Patient-Height'>
                  <GiBodyHeight className='Patient-Height--icon' />
                  <p>{selectedAnalysis.last_height} ``</p>
                </div>
              </Card>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Card className='shadow-sm rounded u-background-color-green-dark text-light'>
                <div className='Patient-Weight'>
                  <FaWeight className='Patient-Weight--icon'/>
                  <p>{selectedAnalysis.last_weight} lb.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='UserInfo-card-title'>
            <p>Images</p>
          </div>
          <div className='row px-5'>
            <div className='col'>
              <p>Submitted Image</p>
              <img style= {{height:'300px'}} src={`http://localhost:3030${selectedAnalysis.image_submitted}`}/>
            </div>
            <div className='col'>
              {selectedAnalysis.processed_image !== null ? <img src={`http://localhost:3030${selectedAnalysis.processed_image}`}/>: <p>your image has not be proccessed yet</p>}
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col'>
          <div className='UserInfo-card-title'>
            <p>3D Object</p>
          </div>
          <div style={{height: '50vh'}}>
            {selectedAnalysis.spine === null ?
              <MySpineLoader /> : <p>No analysis have been performed</p>}
          </div>
        </div>
      </div>
      <div>
        {selectedAnalysis.doctor !== null ?
          <p>Verified by: {selectedAnalysis.doctor.name} {selectedAnalysis.doctor.lastName}</p>
          : <p>Your analysis has not bee verified by a doctor</p>
        }

      </div>
    </>
  ) : (
    <div className='PleaseSelectDate'>
      Please Select a Date to display information.
    </div>
  );
};

analysisData.propTypes = {
  analysisSelected: PropTypes.object,
};

export default analysisData;
