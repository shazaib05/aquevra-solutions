"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface MousePos {
  x: number;
  y: number;
}

interface CanvasProps {
  mousePos: MousePos;
  reducedMotion: boolean;
}

// ---------------------------------------------------------------------------
// Network Nodes & Connections
// ---------------------------------------------------------------------------
function NetworkGraph({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate node positions and connection lines
  const { nodePositions, linePositions } = useMemo(() => {
    const nodeCount = 28;
    const positions: [number, number, number][] = [];
    const radius = 3.2;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = radius * (0.6 + Math.random() * 0.4);

      positions.push([
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ]);
    }

    const lines: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2.2) {
          lines.push(...positions[i], ...positions[j]);
        }
      }
    }

    return {
      nodePositions: positions,
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#0284C7"
          transparent
          opacity={0.45}
        />
      </lineSegments>

      {/* Network Nodes */}
      {nodePositions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[idx % 4 === 0 ? 0.08 : 0.045, 12, 12]} />
          <meshBasicMaterial
            color={idx % 4 === 0 ? "#0284C7" : "#0F172A"}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Central Cyber Core Structure (AQUEVRA Tech Symbol)
// ---------------------------------------------------------------------------
function CyberCore({ reducedMotion }: { reducedMotion: boolean }) {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reducedMotion) return;

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.3;
      outerRingRef.current.rotation.y += delta * 0.2;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.y -= delta * 0.4;
      midRingRef.current.rotation.z += delta * 0.25;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x -= delta * 0.2;
      octaRef.current.rotation.y += delta * 0.5;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group>
        {/* Outer Cyan Ring */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[1.8, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>

        {/* Middle Angled Blue Ring */}
        <mesh ref={midRingRef} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.4, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Central Geometric Core (Octahedron / Tech Diamond) */}
        <mesh ref={octaRef}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial
            color="#0D1B2A"
            emissive="#00D4FF"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.2}
            wireframe
          />
        </mesh>

        {/* Glowing Inner Energy Sphere */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={1.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ---------------------------------------------------------------------------
// Digital Floating Particle Field
// ---------------------------------------------------------------------------
function ParticleStream({ reducedMotion }: { reducedMotion: boolean }) {
  const count = 180;
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#0284C7");
    const darkNavy = new THREE.Color("#0F172A");
    const blue = new THREE.Color("#2563EB");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const mixed =
        i % 3 === 0 ? cyan : i % 3 === 1 ? darkNavy : blue;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current && !reducedMotion) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.7}
      />
    </points>
  );
}

// ---------------------------------------------------------------------------
// Scene Root with Mouse Parallax
// ---------------------------------------------------------------------------
function SceneContent({ mousePos, reducedMotion }: CanvasProps) {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (sceneRef.current && !reducedMotion) {
      // Smooth lerp toward mouse target
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(
        sceneRef.current.rotation.y,
        mousePos.x * 0.25,
        0.05
      );
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(
        sceneRef.current.rotation.x,
        -mousePos.y * 0.15,
        0.05
      );
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Lighting */}
      <ambientLight intensity={0.9} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#0284C7" />
      <pointLight position={[-5, -4, 3]} intensity={1.0} color="#2563EB" />
      <pointLight position={[0, 0, -2]} intensity={0.8} color="#0EA5E9" />

      {/* Cyber Core & Network */}
      <CyberCore reducedMotion={reducedMotion} />
      <NetworkGraph reducedMotion={reducedMotion} />
      <ParticleStream reducedMotion={reducedMotion} />
    </group>
  );
}

// ---------------------------------------------------------------------------
// Default Canvas Export
// ---------------------------------------------------------------------------
export default function HeroSceneCanvas({
  mousePos,
  reducedMotion,
}: CanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 48 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      <SceneContent mousePos={mousePos} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
