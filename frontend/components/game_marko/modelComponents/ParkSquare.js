/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ParkSquare = forwardRef(function ParkSquare(props,ref) {
  const { nodes, materials } = useGLTF('/ParkSquare.glb')
  return (
    <group name="objectGroup" ref={ref} {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Plane.geometry} material={materials["grass.001"]} scale={[30, 1, 30]} />
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
      <group position={[14.91, 0.59, 9.73]} rotation={[-3.08, 0, 3.1]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_1.geometry} material={materials["brown.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_2.geometry} material={materials["green2.001"]} />
      </group>
      <group position={[0.17, 0.59, -1.31]} rotation={[-3.12, -1.14, 3.04]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials["brown.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_2.geometry} material={materials["green2.001"]} />
      </group>
      <group position={[8.37, 0.59, -22.41]} rotation={[-3.08, 0, 3.1]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder003_1.geometry} material={materials["brown.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder003_2.geometry} material={materials["green2.001"]} />
      </group>
      <group position={[-1.7, 0.59, 14.05]} rotation={[2.99, 0.5, -3.06]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder004.geometry} material={materials["brown.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder004_1.geometry} material={materials["green2.001"]} />
      </group>
      <group position={[21.59, 0.59, 17.7]} rotation={[-3.05, -0.87, -3.11]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder005.geometry} material={materials["brown.003"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder005_1.geometry} material={materials["green2.002"]} />
      </group>
      <group position={[20.55, 0.59, -13.78]} rotation={[-0.02, -1.13, -0.15]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011.geometry} material={materials["brown.003"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011_1.geometry} material={materials["green2.002"]} />
      </group>
      <group position={[9.29, 0.59, -9.24]} rotation={[0.14, 0.02, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder012.geometry} material={materials["brown.004"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder012_1.geometry} material={materials["green2.003"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["rock.002"]}
        position={[9.13, 0, 12.95]}
        rotation={[0, -0.38, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001.geometry}
        material={materials["rock.002"]}
        position={[-15.09, 0, 19.6]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={1.68}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["rock.001"]}
        position={[10.77, -0.09, -15.13]}
        rotation={[0, -0.52, 0]}
        scale={1.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["rock.001"]}
        position={[-12.24, -1.08, -16.2]}
        rotation={[0.36, 0.23, 0]}
        scale={1.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["rock.003"]}
        position={[-10.24, -1.08, -17.27]}
        rotation={[0.44, 0.64, -0.19]}
        scale={1.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["rock.003"]}
        position={[-21.94, -0.09, -1.02]}
        rotation={[0, -0.08, 0]}
        scale={1.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone002.geometry}
        material={materials["rock.004"]}
        position={[2.31, 0, 16.38]}
        rotation={[0, -1.14, 0]}
        scale={1.68}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone003.geometry}
        material={materials["rock.004"]}
        position={[21.44, 0, 0.12]}
        rotation={[0, 0.06, 0]}
      />
    </group>
  );
})

useGLTF.preload('/ParkSquare.glb')
export default ParkSquare