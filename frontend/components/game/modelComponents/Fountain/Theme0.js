// import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { plotSize } from '../../MapData';

const Theme0 = ({level, reference, ...props}) => {
  return (
    <group name="objectGroup" ref={reference} {...props} scale={1} dispose={null}>
      <mesh scale={[plotSize * 0.95, 3, plotSize * 0.95 * 2]} position={[0, 1.5, 0]} >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color='burlywood'
        />
      </mesh>
      <mesh scale={[plotSize * 0.2, 1, plotSize * 0.2]} position={[1.5, 3, 4]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color='yellow'
        />
      </mesh>
    </group>
  );
}

export default Theme0