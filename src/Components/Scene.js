import React, { Component } from 'react'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'

export default class Scene extends Component {
  render() {
    return (
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    )
  }
}

