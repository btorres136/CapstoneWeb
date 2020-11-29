import React, {useContext} from 'react';
import { AnalysisContext } from '../../Providers/AnalysisProvider';

const AnalysisDataDoctor = () => {
  const {selectedAnalysis} = useContext(AnalysisContext);
  console.log(selectedAnalysis);

  return selectedAnalysis ? (
    <>
      <p>{selectedAnalysis.id}</p>
      <img src={selectedAnalysis.image_submitted} style= {{width:'300px'}}/>
      <p>{selectedAnalysis.last_height}</p>
      <p>{selectedAnalysis.last_age}</p>
      <p>{selectedAnalysis.last_weight}</p>
      <p>{selectedAnalysis.created_at}</p>
      <p>{selectedAnalysis.updated_at}</p>
    </>
  ):(
    <p>no data</p>
  );
};

export default AnalysisDataDoctor;
