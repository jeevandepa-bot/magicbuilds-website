"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { usePathname } from "next/navigation";

function ParticleSwarm({ count = 3000, isMobile = false }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Mouse position state for parallax
  const pointer = useRef({ x: 0, y: 0 });
  const gyro = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only apply mouse parallax on desktop
      if (!isMobile) {
        pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      
      // gamma is left/right rotation (-90 to 90)
      // beta is front/back rotation (-180 to 180, usually holding is ~45deg)
      const gx = e.gamma / 45; 
      const gy = (e.beta - 45) / 45;
      
      gyro.current.x = Math.max(-1, Math.min(1, gx));
      gyro.current.y = Math.max(-1, Math.min(1, -gy));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [isMobile]);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 10 + Math.random() * 20;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.x -= delta * 0.02;
    }
    if (groupRef.current) {
      // Combine pointer and gyro for seamless dual-input parallax
      let combinedX = pointer.current.x + gyro.current.x;
      let combinedY = pointer.current.y + gyro.current.y;
      
      combinedX = Math.max(-1, Math.min(1, combinedX));
      combinedY = Math.max(-1, Math.min(1, combinedY));

      const targetX = combinedY * 0.2;
      const targetY = combinedX * 0.2;
      
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={pointsRef}
          positions={particlesPosition}
          stride={3}
          frustumCulled={false}
        >
          <PointMaterial
            transparent
            color="#FDE047"
            size={isMobile ? 0.1 : 0.05}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
    </group>
  );
}

export default function MagicScene() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-transparent">
      <Canvas camera={{ position: [0, 0, isMobile ? 28 : 15], fov: isMobile ? 75 : 60 }}>
        <ParticleSwarm count={isMobile ? 1200 : 4000} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
