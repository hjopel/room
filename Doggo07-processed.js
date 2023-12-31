/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Doggo07-processed.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei/native'
import doggoModelPath from './assets/Doggo07-processed.glb'
import headTextureImport from './assets/head.png'
import bodyTextureImport from './assets/body.jpg'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber/native'

export function Doggo(props) {
  const { nodes, materials, scene } = useGLTF(doggoModelPath)
  const [headTexture, bodyTexture] = useTexture([headTextureImport, bodyTextureImport])
  const group = useRef()

  useFrame(() => group.current.rotation.y += 0.01)

  // needed because glTF standard specifies that textures should be Y-flipped, while the three.js default is not to Y-flip
  headTexture.flipY = false
  bodyTexture.flipY = false

  return (
    <group {...props} dispose={null} ref={group} scale={0.5}>
      <mesh geometry={nodes.Head.geometry} position={[0.045, 0.563, -2.632]} rotation={[Math.PI / 2, 0, 0]} scale={0.2}>
        <meshPhysicalMaterial map={headTexture} color={new THREE.Color(1, 1, 1)} metalness={1} roughness={1} />
      </mesh>
      <mesh
        geometry={nodes.Body.geometry}
        position={[-0.003, -2.364, -2.838]}
        rotation={[2.242, 0, 0]}
        scale={[2.738, 2.738, 3.06]}
      >
        <meshStandardMaterial map={bodyTexture} color={new THREE.Color(1, 1, 1)} metalness={1} roughness={1} />
      </mesh>
    </group>
  )
}
// original materials from gltf:
// {
//   "name": "Dog_head_baked.001",
//   "pbrMetallicRoughness": { "baseColorFactor": [1, 1, 1, 1], "metallicFactor": 1, "roughnessFactor": 1 },
//   "emissiveTexture": { "index": 0, "texCoord": 0 },
//   "emissiveFactor": [1, 1, 1],
//   "alphaMode": "OPAQUE",
//   "doubleSided": true
// },
// {
//   "name": "Dog_body_baked.001",
//   "pbrMetallicRoughness": { "baseColorFactor": [1, 1, 1, 1], "metallicFactor": 1, "roughnessFactor": 1 },
//   "emissiveTexture": { "index": 1, "texCoord": 0 },
//   "emissiveFactor": [1, 1, 1],
//   "alphaMode": "OPAQUE",
//   "doubleSided": true
// }
