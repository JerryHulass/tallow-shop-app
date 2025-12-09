"use client";
import React, { useRef, Suspense } from 'react';
import { ShoppingBag, Menu, ArrowRight, Star, Leaf, Droplet, ShieldCheck } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';


const TallowlJar = (props) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2; // Slow elegant rotation
    }
  });

  return (
    <group {...props} dispose={null}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={mesh}>
          {/* Jar Body: Frosted Glass */}
          <mesh position={[0, -0.6, 0]}>
            <cylinderGeometry args={[1.6, 1.6, 2.2, 64]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.6}  // Glass-like transmission
              roughness={0.4}     // Frosted look
              thickness={1.5} 
              transparent={true}
              opacity={0.8}
            />
          </mesh>
          
          {/* Inner Cream (Visible through frosted glass) */}
           <mesh position={[0, -0.6, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 2.0, 64]} />
            <meshStandardMaterial color="#FFFEF0" roughness={0.9} />
          </mesh>

          {/* Lid: Bamboo / Wood Texture (#E3C099) */}
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[1.65, 1.65, 0.6, 64]} />
            <meshStandardMaterial color="#E3C099" roughness={0.6} /> 
          </mesh>
          
          {/* Top Label Placeholder */}
          <mesh position={[0, 0.91, 0]} rotation={[-Math.PI/2, 0, 0]}>
             <circleGeometry args={[1.6, 64]} />
             <meshStandardMaterial color="#fff" />
          </mesh>
        </group>
      </Float>
      <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2.5} far={4} color="#2F3B32" />
    </group>
  );
};
export default TallowlJar;