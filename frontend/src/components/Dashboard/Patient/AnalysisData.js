import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { AnalysisContext } from '../../Providers/AnalysisProvider';

const analysisData = () => {
  const {selectedAnalysis} = useContext(AnalysisContext);
  return selectedAnalysis ? (
    <p>{selectedAnalysis.id}</p>
  ) : (<p>no data</p>);
};

analysisData.propTypes = {
  analysisSelected: PropTypes.object,
};

export default analysisData;
