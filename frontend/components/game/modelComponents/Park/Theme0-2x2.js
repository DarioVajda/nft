// edited by the addingAnimations script!
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

import { useSpring } from '@react-spring/three'
import { a } from '@react-spring/three'

const Theme0 = ({ reference, status, ...props}) => {
  const { nodes, materials } = useGLTF("/Park 2x2.gltf");

  const [ { opacity }, springApi ] = useSpring(() => ({
    opacity: 1,
    // from: {
      // opacity: 0
    // }
  }))

  const opacityToMaterial = (opacity, mat) => {
    mat.transparent = true;
    mat.opacity = opacity;
    return mat;
  }

  const scale = 2.45;
  
  return (
    <group name="objectGroup" ref={reference} {...props} scale={[ scale, scale, scale ]} rotation={[props.rotation[0], props.rotation[1] + Math.PI/2, props.rotation[2]]} dispose={null}>
      <group scale={[3, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["osnovna bela boja"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials.trava}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials["crkva zidovi"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11005.geometry}
          material={materials["Bark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11005_1.geometry}
          material={materials["Tree.003"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11004.geometry}
          material={materials["Bark.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11004_1.geometry}
          material={materials["Tree.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone013.geometry}
        material={materials["vrata.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone013_1.geometry}
        material={materials["krosnja cempres"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={materials["kora drverata braon"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008_1.geometry}
        material={materials.krosnja}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11006.geometry}
          material={materials["Bark.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11006_1.geometry}
          material={materials["Tree.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials.spratovi}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049_1.geometry}
        material={materials["tamni crep"]}
      />
    </group>
  )
}

useGLTF.preload("/Park 2x2.gltf");

export default Theme0