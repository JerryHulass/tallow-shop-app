import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';

export default function TallowJar(props) {
  const mesh = useRef();
  
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.002;
  });

  return (
    <group {...props}>
      <Float speed={2} rotationIntensity={0.5}>
        <group ref={mesh}>
          {/* ... Jar Geometry Code from prototype ... */}
          <mesh position={[0, -0.5, 0]}>
             <cylinderGeometry args={[1.6, 1.6, 2.5, 64]} />
             <meshStandardMaterial color="#fdf6e3" />
          </mesh>
          {/* ... Rest of mesh code ... */}
        </group>
      </Float>
      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} blur={2.5} />
    </group>
  );
}
