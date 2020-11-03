import React from  'react';
import PropTypes from 'prop-types';
import { useThree, useFrame } from 'react-three-fiber';

const Spine = (props) => {

  const { camera, gl } = useThree();
  camera.position.z = 10;
  camera.position.y = 6;
  gl.setClearColor('#000');
  useFrame(() => {
    props.spine.rotation.y += 0.002;
  });
  return (
    <primitive object={props.spine} position={props.position}/>
  );
};

Spine.propTypes = {
  spine: PropTypes.any,
  position: PropTypes.array
};

export default Spine;
