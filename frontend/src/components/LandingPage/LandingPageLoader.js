import React, {Suspense} from 'react';
import LandingPage from './LandingPage';
import Loading from '../Utils/Loading';

const LandingPageLoader = () => {
  return(
    <Suspense fallback={<Loading />} >
      <LandingPage />
    </Suspense>
  );
};

export default LandingPageLoader;
