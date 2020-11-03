import React, {Suspense} from 'react';
import Main from './Main';

const MainLoader = () => {
  return(
    <Suspense fallback={<p>Loading...</p>}>
      <Main />
    </Suspense>
  );
};

export default MainLoader;
