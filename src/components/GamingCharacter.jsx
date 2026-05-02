import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Trail } from '@react-three/drei';
import * as THREE from 'three';

const GamingCharacter = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const characterRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Slight rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    if (characterRef.current) {
      // Character breathing animation
      const breathe = Math.sin(state.clock.elapsedTime * 2) * 0.02;
      characterRef.current.scale.set(1 + breathe, 1 + breathe, 1 + breathe);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Character Body */}
        <group ref={characterRef}>
          {/* Head */}
          <mesh position={[0, 1.8, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial 
              color="#ff006e" 
              emissive="#ff006e" 
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Helmet Visor */}
          <mesh position={[0, 1.8, 0.21]}>
            <boxGeometry args={[0.35, 0.15, 0.05]} />
            <meshStandardMaterial 
              color="#3a86ff" 
              emissive="#3a86ff" 
              emissiveIntensity={0.8}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          {/* Torso */}
          <mesh position={[0, 1.2, 0]}>
            <boxGeometry args={[0.6, 0.8, 0.3]} />
            <meshStandardMaterial 
              color="#1a1a2e" 
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          
          {/* Chest Armor */}
          <mesh position={[0, 1.2, 0.16]}>
            <boxGeometry args={[0.55, 0.7, 0.05]} />
            <meshStandardMaterial 
              color="#8338ec" 
              emissive="#8338ec" 
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Arms */}
          <mesh position={[-0.45, 1.3, 0]}>
            <boxGeometry args={[0.15, 0.6, 0.15]} />
            <meshStandardMaterial 
              color="#ff006e" 
              emissive="#ff006e" 
              emissiveIntensity={0.2}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
          
          <mesh position={[0.45, 1.3, 0]}>
            <boxGeometry args={[0.15, 0.6, 0.15]} />
            <meshStandardMaterial 
              color="#ff006e" 
              emissive="#ff006e" 
              emissiveIntensity={0.2}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
          
          {/* Legs */}
          <mesh position={[-0.2, 0.6, 0]}>
            <boxGeometry args={[0.2, 0.8, 0.2]} />
            <meshStandardMaterial 
              color="#0a0a0f" 
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          <mesh position={[0.2, 0.6, 0]}>
            <boxGeometry args={[0.2, 0.8, 0.2]} />
            <meshStandardMaterial 
              color="#0a0a0f" 
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Energy Core */}
          <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial 
              color="#3a86ff" 
              emissive="#3a86ff" 
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          {/* Shoulder Pads */}
          <mesh position={[-0.4, 1.5, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial 
              color="#8338ec" 
              emissive="#8338ec" 
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          <mesh position={[0.4, 1.5, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial 
              color="#8338ec" 
              emissive="#8338ec" 
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Antenna */}
          <mesh position={[0, 2.1, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial 
              color="#ff006e" 
              emissive="#ff006e" 
              emissiveIntensity={0.8}
            />
          </mesh>
          
          <mesh position={[0, 2.25, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial 
              color="#3a86ff" 
              emissive="#3a86ff" 
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
        
        {/* Energy Particles Around Character */}
        <Trail
          width={0.5}
          length={10}
          color="#ff006e"
          attenuation={(width) => width}
        >
          <mesh position={[0, 2, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial 
              color="#ff006e" 
              emissive="#ff006e" 
              emissiveIntensity={2}
            />
          </mesh>
        </Trail>
      </group>
    </Float>
  );
};

export default GamingCharacter;
