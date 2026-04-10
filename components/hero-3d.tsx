"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Sparkles, PerspectiveCamera, MeshDistortMaterial, Text } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function BitcoinInfrastructure() {
  const meshRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y = t * 0.4;
  });

  return (
    <group ref={meshRef}>
      {/* Central Core - High Poly Bitcoin */}
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.5, 2.5, 0.5, 64]} />
          <meshStandardMaterial 
            color="#F7931A" 
            metalness={1} 
            roughness={0.1} 
            emissive="#F7931A"
            emissiveIntensity={1.5}
          />
        </mesh>
        
        {/* Holographic "B" Glow */}
        <mesh position={[0, 0, 0.3]}>
           <planeGeometry args={[2, 2]} />
           <MeshDistortMaterial
             color="#FFFFFF"
             speed={5}
             distort={0.3}
             radius={1}
             transparent
             opacity={0.4}
           />
        </mesh>
      </Float>

      {/* Orbital Rings - System Guards */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[4.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#F7931A" emissive="#F7931A" emissiveIntensity={2} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / -3, Math.PI / 4, 0]}>
        <torusGeometry args={[5.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[6, 0.03, 16, 100]} />
        <meshStandardMaterial color="#F7931A" emissive="#F7931A" emissiveIntensity={5} />
      </mesh>

      {/* Pulsing Data Spheres */}
      <group>
        {[...Array(12)].map((_, i) => (
          <OrbitingNode key={i} index={i} radius={7} speed={0.5 + Math.random()} />
        ))}
      </group>
    </group>
  );
}

function OrbitingNode({ index, radius, speed }: { index: number, radius: number, speed: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const angle = (index / 12) * Math.PI * 2;

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (mesh.current) {
      mesh.current.position.x = Math.cos(angle + t) * radius;
      mesh.current.position.z = Math.sin(angle + t) * radius;
      mesh.current.position.y = Math.sin(t * 1.5 + index) * 2;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color="#F7931A" emissive="#F7931A" emissiveIntensity={10} />
      <pointLight distance={3} intensity={5} color="#F7931A" />
    </mesh>
  );
}

function TechBackground() {
  const { viewport } = useThree();
  return (
    <>
      <Stars radius={100} depth={50} count={10000} factor={6} saturation={0} fade speed={2} />
      <Sparkles count={200} scale={[20, 20, 20]} size={2} speed={0.5} color="#F7931A" />
      
      {/* Dynamic Digital Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
        <planeGeometry args={[100, 100, 50, 50]} />
        <meshStandardMaterial 
          color="#050505" 
          wireframe 
          transparent 
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { mouse } = state;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#050505]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={45} />
        
        <ambientLight intensity={0.4} />
        <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} intensity={2} color="#F7931A" castShadow />
        <pointLight position={[-10, -10, -10]} color="#FFFFFF" intensity={1} />
        <pointLight position={[0, 5, 5]} color="#F7931A" intensity={2} />
        
        <BitcoinInfrastructure />
        <TechBackground />
        
        <CameraRig />
      </Canvas>
      
      {/* Depth Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-60" />
    </div>
  );
}
