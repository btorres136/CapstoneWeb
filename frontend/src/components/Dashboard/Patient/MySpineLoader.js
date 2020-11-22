import React, {Suspense} from 'react';
import MySpine from './MySpine';

const MySpineLoader = () => {
  return(
    <Suspense fallback={
      <div className='MySpineLoader--loading'>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2>Loading...</h2>
      </div>
    } >
      <MySpine />
    </Suspense>
  );
};

export default MySpineLoader;
