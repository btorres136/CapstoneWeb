import React from 'react';

const Loading = () => {
  return (
    <div className='loading'>
      <div>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2>Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
