/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Theme0 = ({level, reference, ...props}) => {
  const { nodes, materials } = useGLTF('/house1.glb')
  return (
    <group name="objectGroup" ref={reference} {...props} scale={[props.scale, props.scale * (level*2+1), props.scale]}dispose={null}>
      <mesh receiveShadow geometry={nodes.Plane.geometry} material={materials['grass.001']} scale={[30, 1, 30]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube006.geometry} material={materials.floortile} position={[8.2, 0.01, -5.41]} scale={[0.63, -0.11, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube008.geometry} material={materials.floortile} position={[10.27, 0.01, -3.39]} scale={[0.63, -0.11, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube009.geometry} material={materials.floortile} position={[12.81, 0.01, -4.79]} scale={[0.63, -0.11, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube010.geometry} material={materials.floortile} position={[14.92, 0.01, -2.7]} scale={[0.63, -0.11, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube011.geometry} material={materials.floortile} position={[16.37, 0.01, -5.11]} scale={[0.63, -0.11, 1]} />
      <group position={[2.81, 0.59, -19.64]} rotation={[0.14, -0.16, 0.03]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={materials.green2} />
      </group>
      <group position={[5.82, 0.59, 18.07]} rotation={[-0.06, 0.35, -0.02]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_1.geometry} material={materials.green2} />
      </group>
      <group position={[-15.56, 0.59, 5.53]} rotation={[-0.13, 1.49, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder007.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder007_1.geometry} material={materials.green2} />
      </group>
      <group position={[-11.31, 0.59, -9.9]} rotation={[-0.06, 0.35, -0.02]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder008.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder008_1.geometry} material={materials.green2} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.fence001.geometry} material={materials.snow} position={[18.55, 1.26, -25.59]} scale={[0.16, 1.4, 0.38]} />
      <mesh castShadow receiveShadow geometry={nodes.fence002.geometry} material={materials.snow} position={[18.05, 1.26, 22.91]} rotation={[0, -Math.PI / 2, 0]} scale={[0.16, 1.4, 0.38]} />
      <mesh castShadow receiveShadow geometry={nodes.fence003.geometry} material={materials.snow} position={[-20.65, 1.26, 22.41]} rotation={[Math.PI, 0, Math.PI]} scale={[0.16, 1.4, 0.38]} />
      <mesh castShadow receiveShadow geometry={nodes.fence004.geometry} material={materials.snow} position={[-19.95, 1.26, -26.29]} rotation={[0, Math.PI / 2, 0]} scale={[0.16, 1.4, 0.38]} />
      <mesh castShadow receiveShadow geometry={nodes.fence009.geometry} material={materials.snow} position={[18.55, 1.26, 4.21]} scale={[0.16, 1.4, 0.38]} />
      <mesh castShadow receiveShadow geometry={nodes.Cone.geometry} material={materials['rock.002']} position={[9.13, 0, 12.95]} rotation={[0, -0.38, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cone001.geometry} material={materials['rock.002']} position={[-15.09, 0, 19.6]} rotation={[Math.PI, -1.56, Math.PI]} scale={1.68} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials['rock.001']} position={[10.77, -0.09, -15.13]} rotation={[0, -0.52, 0]} scale={1.78} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder001.geometry} material={materials['rock.001']} position={[-12.24, -1.08, -16.2]} rotation={[0.36, 0.23, 0]} scale={1.78} />
      <mesh receiveShadow geometry={nodes.grass1.geometry} material={materials['grass.001']} position={[15.45, 0, -0.6]} />
      <mesh receiveShadow geometry={nodes.grass1001.geometry} material={materials['grass.001']} position={[1.57, 0, -15.22]} />
      <mesh receiveShadow geometry={nodes.grass2.geometry} material={materials['grass.001']} position={[9.69, 0, 14.6]} />
      <mesh receiveShadow geometry={nodes.grass3.geometry} material={materials['grass.001']} position={[10.84, 0, -10.13]} />
      <mesh receiveShadow geometry={nodes.grass3001.geometry} material={materials['grass.001']} position={[12.24, 0, -17.94]} />
      <mesh receiveShadow geometry={nodes.grass1002.geometry} material={materials['grass.001']} position={[14.69, 0, -14.03]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass1003.geometry} material={materials['grass.001']} position={[-5.43, 0, -15.36]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass2001.geometry} material={materials['grass.001']} position={[20.77, 0, 1.04]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass3002.geometry} material={materials['grass.001']} position={[4.84, 0, -17.91]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass3003.geometry} material={materials['grass.001']} position={[0.57, 0, -24.6]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass1004.geometry} material={materials['grass.001']} position={[15.76, 0, 11.84]} />
      <mesh receiveShadow geometry={nodes.grass2002.geometry} material={materials['grass.001']} position={[10.01, 0, 27.05]} />
      <mesh receiveShadow geometry={nodes.grass2003.geometry} material={materials['grass.001']} position={[21.08, 0, 13.49]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass1005.geometry} material={materials['grass.001']} position={[-12.41, 0, 13.38]} rotation={[0, -0.83, 0]} />
      <mesh receiveShadow geometry={nodes.grass2004.geometry} material={materials['grass.001']} position={[-27.49, 0, 19.47]} rotation={[0, -0.83, 0]} />
      <mesh receiveShadow geometry={nodes.grass2005.geometry} material={materials['grass.001']} position={[-10.01, 0, 18.41]} rotation={[0, -0.08, 0]} />
      <mesh receiveShadow geometry={nodes.grass1006.geometry} material={materials['grass.001']} position={[-9.95, 0, 0.54]} rotation={[Math.PI, -1.55, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass2006.geometry} material={materials['grass.001']} position={[-25.06, 0, -5.46]} rotation={[Math.PI, -1.55, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass2007.geometry} material={materials['grass.001']} position={[-11.68, 0, 5.84]} rotation={[0, -0.84, 0]} />
      <mesh receiveShadow geometry={nodes.grass2008.geometry} material={materials['grass.001']} position={[-17.27, 0, -9.35]} rotation={[0, -0.84, 0]} />
      <mesh receiveShadow geometry={nodes.grass1008.geometry} material={materials['grass.001']} position={[26.45, 0, -25.01]} rotation={[0, 0.75, 0]} />
      <mesh receiveShadow geometry={nodes.grass2009.geometry} material={materials['grass.001']} position={[27.13, 0, 13.39]} rotation={[0, -1.24, 0]} />
      <mesh receiveShadow geometry={nodes.grass2010.geometry} material={materials['grass.001']} position={[24.49, 0, 23.84]} rotation={[0, 0.58, 0]} />
      <mesh receiveShadow geometry={nodes.grass2011.geometry} material={materials['grass.001']} position={[-22.44, 0, -2.85]} rotation={[Math.PI, -0.75, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass2012.geometry} material={materials['grass.001']} position={[-22.75, 0, -15.3]} rotation={[Math.PI, -0.75, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass1007.geometry} material={materials['grass.001']} position={[-28.12, 0, 23.2]} rotation={[Math.PI, -0.75, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass2013.geometry} material={materials['grass.001']} position={[-28.8, 0, -15.2]} rotation={[-Math.PI, 1.24, -Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass2014.geometry} material={materials['grass.001']} position={[-26.16, 0, -25.65]} rotation={[Math.PI, -0.58, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass1009.geometry} material={materials['grass.001']} position={[-2.04, 0, -21.83]} rotation={[Math.PI, -1.05, Math.PI]} />
      <mesh receiveShadow geometry={nodes.grass2015.geometry} material={materials['grass.001']} position={[-6.1, 0, -18.02]} rotation={[0, -1.34, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.chimney.geometry} material={materials.floortile} position={[0, 11.33, 10.86]} scale={[1, 12.45, 1]} />
      <group position={[5.11, 1.39, -3.48]} scale={[0.18, 1.16, 1]}>
        <mesh castShadow receiveShadow geometry={nodes.knob.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.knob_1.geometry} material={materials.shiny} />
        <mesh castShadow receiveShadow geometry={nodes.knob_2.geometry} material={materials.snow} />
        <mesh castShadow receiveShadow geometry={nodes.knob_3.geometry} material={materials.floortile} />
      </group>
      <group position={[0, 0.17, 0]} scale={[1, 1.36, 1]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.floortile} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.house} />
        <mesh castShadow receiveShadow geometry={nodes.frame1.geometry} material={materials.darkerhouse} position={[5, -2.94, 10]} scale={[0.6, 0.54, 0.6]} />
        <mesh castShadow receiveShadow geometry={nodes.frame2.geometry} material={materials.darkerhouse} position={[5, -2.94, -10]} scale={[0.6, 0.54, 0.6]} />
      </group>
      <group position={[5.07, 4.53, 4.02]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube006_1.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cube006_2.geometry} material={materials.shiny} />
        <mesh castShadow receiveShadow geometry={nodes.Cube006_3.geometry} material={materials.snow} />
      </group>
      <group position={[5.07, 4.53, -3.98]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube040.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_1.geometry} material={materials.shiny} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_2.geometry} material={materials.snow} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['brown.002']} position={[2.65, 10.06, -3.16]} rotation={[0, 0, -0.61]} scale={[-0.57, 0.1, 1.21]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials['brown.002']} position={[1.52, 10.76, -4.49]} rotation={[0, 0, -0.55]} scale={[0.57, 0.1, 1.21]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials['brown.002']} position={[3.24, 9.72, 6.29]} rotation={[0, 0, -0.55]} scale={[0.57, 0.1, 1.21]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005.geometry} material={materials['brown.002']} position={[3.24, 9.72, 3.61]} rotation={[0, 0, -0.55]} scale={[0.57, 0.1, 1.21]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube007.geometry} material={materials['brown.002']} position={[2.1, 10.41, 2.09]} rotation={[0, 0, -0.55]} scale={[0.57, 0.1, 1.21]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials['brown.002']} position={[2.67, 10.06, -6.05]} rotation={[0, 0, -0.55]} scale={[0.57, 0.1, 1.21]} />
    </group>
  )
}

useGLTF.preload('/house1.glb')
export default Theme0