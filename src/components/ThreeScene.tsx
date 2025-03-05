import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const points = useRef();
  
  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      points.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    
    colors[i3] = Math.random() * 0.5 + 0.5;
    colors[i3 + 1] = Math.random() * 0.5 + 0.5;
    colors[i3 + 2] = Math.random() * 0.5 + 0.5;
  }
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'color']}
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const AnimatedSphere = () => {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#4285F4"
        wireframe
        emissive="#4285F4"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
        <ParticleField />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;