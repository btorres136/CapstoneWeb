import React from 'react';
import {Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Spine from '../../3DObjects/Spine';

const MySpine = () => {
  const gltf = useLoader(GLTFLoader,'spine.glb');
  const spine = gltf.scene;
  return (
    <Canvas className='myspine-canvas'>
      <directionalLight color="#ccc" intensity={0.9} position={[-20,0,30]} />
      <Spine spine={spine} color={'#131633'} position={[0,0,0]} />
    </Canvas>
  );
};

export default MySpine;
