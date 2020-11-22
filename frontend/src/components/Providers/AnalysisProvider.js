import React, {createContext,  useState} from 'react';
import PropTypes from 'prop-types';

export const AnalysisContext = createContext();

const AnalysisProvider = ({children}) => {
  const [selectedAnalysis, setSelectedAnalysis] = useState();
  return (<AnalysisContext.Provider value={{selectedAnalysis,setSelectedAnalysis}}>{children}</AnalysisContext.Provider>);
};
AnalysisProvider.propTypes = {
  children: PropTypes.any,
};

export default AnalysisProvider;

