'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function BackgroundShapes() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      // Gentle rotation and following mouse slightly
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      const targetX = (state.pointer.x * 2);
      const targetY = (state.pointer.y * 2);
      
      sphereRef.current.position.x += (targetX - sphereRef.current.position.x) * 0.05;
      sphereRef.current.position.y += (targetY - sphereRef.current.position.y) * 0.05;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={sphereRef} position={[2, 0, -3]} scale={1.5}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial 
            color="#2662D9" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.8} 
            roughness={0.2}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[-3, -2, -5]} scale={1}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#477085" 
            wireframe 
            emissive="#477085"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Sparkles count={300} scale={15} size={1.5} speed={0.2} opacity={0.3} color="#ffffff" />
    </>
  );
}

export function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none bg-background">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <spotLight position={[-10, -10, -5]} intensity={1} color="#2662D9" />
        <Environment preset="city" />
        <BackgroundShapes />
      </Canvas>
    </div>
  );
}
