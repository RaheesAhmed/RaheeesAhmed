'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NodeProps {
  position: [number, number, number];
  color: string;
  size?: number;
  distort?: number;
}

const Node: React.FC<NodeProps> = ({ position, color, size = 0.3, distort = 0.4 }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <Sphere args={[size, 16, 16]} position={position} ref={ref}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={2} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}

const Connection: React.FC<ConnectionProps> = ({ start, end, color }) => {
  const ref = useRef<THREE.Line>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.geometry.setFromPoints([
        new THREE.Vector3(...start),
        new THREE.Vector3(...end)
      ]);
    }
  });
  
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  );
};

interface NeuralNetworkModelProps {
  className?: string;
}

const NeuralNetworkModel: React.FC<NeuralNetworkModelProps> = ({ className }) => {
  // Define nodes in layers
  const inputLayer: [number, number, number][] = [
    [-2, 1, 0],
    [-2, 0, 0],
    [-2, -1, 0]
  ];
  
  const hiddenLayer1: [number, number, number][] = [
    [-0.7, 1.5, 0],
    [-0.7, 0.5, 0],
    [-0.7, -0.5, 0],
    [-0.7, -1.5, 0]
  ];
  
  const hiddenLayer2: [number, number, number][] = [
    [0.7, 1.5, 0],
    [0.7, 0.5, 0],
    [0.7, -0.5, 0],
    [0.7, -1.5, 0]
  ];
  
  const outputLayer: [number, number, number][] = [
    [2, 1, 0],
    [2, 0, 0],
    [2, -1, 0]
  ];
  
  // Colors
  const colors = {
    input: '#2D9CDB',
    hidden1: '#00FFAB',
    hidden2: '#9B51E0',
    output: '#FFFFFF',
    connection: '#444444'
  };
  
  // Create connections
  const connections: ConnectionProps[] = [];
  
  // Connect input to hidden1
  inputLayer.forEach(input => {
    hiddenLayer1.forEach(hidden => {
      connections.push({
        start: input,
        end: hidden,
        color: colors.connection
      });
    });
  });
  
  // Connect hidden1 to hidden2
  hiddenLayer1.forEach(hidden1 => {
    hiddenLayer2.forEach(hidden2 => {
      connections.push({
        start: hidden1,
        end: hidden2,
        color: colors.connection
      });
    });
  });
  
  // Connect hidden2 to output
  hiddenLayer2.forEach(hidden => {
    outputLayer.forEach(output => {
      connections.push({
        start: hidden,
        end: output,
        color: colors.connection
      });
    });
  });
  
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Render nodes */}
        {inputLayer.map((pos, i) => (
          <Node key={`input-${i}`} position={pos} color={colors.input} />
        ))}
        
        {hiddenLayer1.map((pos, i) => (
          <Node key={`hidden1-${i}`} position={pos} color={colors.hidden1} size={0.25} />
        ))}
        
        {hiddenLayer2.map((pos, i) => (
          <Node key={`hidden2-${i}`} position={pos} color={colors.hidden2} size={0.25} />
        ))}
        
        {outputLayer.map((pos, i) => (
          <Node key={`output-${i}`} position={pos} color={colors.output} />
        ))}
        
        {/* Render connections */}
        {connections.map((conn, i) => (
          <Connection key={`conn-${i}`} {...conn} />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkModel;
