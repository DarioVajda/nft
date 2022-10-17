/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Store = forwardRef(function Store(props,ref) {
  const { nodes, materials } = useGLTF('/store.glb')
  return (
    <group name="objectGroup" ref={ref} {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Plane.geometry} material={materials["grass.001"]} scale={[30, 1, 30]} />
      <group position={[24.39, 0.59, -4.96]} rotation={[0.14, -0.16, 0.03]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={materials.green2} />
      </group>
      <group position={[24.4, 0.59, 15.75]} rotation={[-0.06, 0.35, -0.02]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_1.geometry} material={materials.green2} />
      </group>
      <group position={[17.02, 0.59, 8.21]} rotation={[-0.13, 1.49, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder007.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder007_1.geometry} material={materials.green2} />
      </group>
      <group position={[12.26, 0.59, 22.78]} rotation={[-0.06, 0.35, -0.02]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder008.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder008_1.geometry} material={materials.green2} />
      </group>
      <group position={[-10, 0, 0]} scale={[14.8, 1, 25.15]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube007.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube007_1.geometry} material={materials["Material.001"]} />
      </group>
      <group position={[4.95, 5.53, 2.89]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube011.geometry} material={materials["brown.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube011_1.geometry} material={materials["shiny.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube011_2.geometry} material={materials["snow.001"]} />
      </group>
      <group position={[4.95, 5.53, 16.89]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube014.geometry} material={materials["brown.003"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube014_1.geometry} material={materials["shiny.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube014_2.geometry} material={materials["snow.002"]} />
      </group>
      <group position={[-24.86, 5.53, -5]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube015.geometry} material={materials["brown.004"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube015_1.geometry} material={materials["shiny.003"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube015_2.geometry} material={materials["snow.003"]} />
      </group>
      <group position={[-24.86, 5.53, 17]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube016.geometry} material={materials["brown.005"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube016_1.geometry} material={materials["shiny.004"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube016_2.geometry} material={materials["snow.004"]} />
      </group>
      <group position={[-24.86, 5.53, 6]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials["brown.006"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube017_1.geometry} material={materials["shiny.005"]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube017_2.geometry} material={materials["snow.005"]} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Material}
        position={[-6, 15.6, 23]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[15.15, 1, 15.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["rock.002"]}
        position={[23.04, 0, 8.22]}
        rotation={[0, -0.38, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001.geometry}
        material={materials["rock.002"]}
        position={[21.82, 0, 25.87]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={1.68}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["rock.001"]}
        position={[10.68, -0.09, -3.86]}
        rotation={[0, -0.52, 0]}
        scale={1.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["rock.001"]}
        position={[10.67, -1.08, 17.07]}
        rotation={[0.36, 0.23, 0]}
        scale={1.78}
      />
      <group position={[5, 2.72, -20.16]} scale={[0.18, 1.16, 1]}>
        <mesh castShadow receiveShadow geometry={nodes.knob.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.knob_1.geometry} material={materials.shiny} />
        <mesh castShadow receiveShadow geometry={nodes.knob_2.geometry} material={materials.snow} />
        <mesh castShadow receiveShadow geometry={nodes.knob_3.geometry} material={materials.floortile} />
      </group>
      <group position={[4.95, 5.53, -9.11]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube006.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cube006_1.geometry} material={materials.shiny} />
        <mesh castShadow receiveShadow geometry={nodes.Cube006_2.geometry} material={materials.snow} />
      </group>
      <group position={[-24.86, 5.53, -16]} scale={[0.2, 2.84, 3.2]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube040.geometry} material={materials.brown} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_1.geometry} material={materials.shiny} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_2.geometry} material={materials.snow} />
      </group>
    </group>
  );
})

useGLTF.preload('/store.glb')
export default Store