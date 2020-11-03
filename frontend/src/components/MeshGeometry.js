import React from 'react';
import PropTypes from 'prop-types';
import {mesh} from 'react-three-fiber';

const MeshGeometry = (props) => {

  return (
    <mesh visible position={props.position} rotation={[Math.PI / 2, 0, 0]}>
      <sphereGeometry args={[5,16,16]} />
      <meshStandardMaterial color='#6da6cf' transparent/>
    </mesh>
  );
};
MeshGeometry.propTypes = {
  position: PropTypes.array.isRequired
};

export default MeshGeometry;
