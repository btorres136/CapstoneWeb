import React from 'react';
import {Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Spine from '../3DObjects/Spine';
import MeshGeometry from '../3DObjects/MeshGeometry';
import Controls from '../3DObjects/Controls';

const LandingPage = () => {
  const gltf = useLoader(GLTFLoader,'spine.glb');
  const spine = gltf.scene;
  const meshes = [];
  for(var i=0; i < 300; i++){
    meshes.push(<MeshGeometry position={[(Math.random() - 0.5)* 1000,(Math.random() -0.5)* 1000,(Math.random() -0.5)* 1000]}/>);
  }
  return (
    <div className='main'>
      <div className='main__content'>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Spine Web</span>
            <span className='heading-primary--sub'>3D Medical Scoliosis Tool</span>
          </h1>
          <div className='heading-buttons'>
            <a className='heading-buttons--btn btn--animated' href='/SignUp'>Sign Up</a>
            <a className='heading-buttons--btn btn--animated' href='/login'>Sign In</a>
          </div>
        </div>
      </div>
      <Canvas className='spine-canvas'>
        <directionalLight color="#ccc" intensity={0.9} position={[-20,0,30]} />
        <Controls/>
        <Spine spine={spine} color={'#000'} position={[0,-7,0]} />
        {meshes}
      </Canvas>
    </div>
  );
};

export default LandingPage;
