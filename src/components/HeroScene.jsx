import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Torus,
  Box,
} from "@react-three/drei";

function FloatingSphere({ position, color, speed }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, speed }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.4;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <Float speed={speed * 0.8} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.6, 0.15, 16, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
}

function FloatingCube({ position, color, speed }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.7;
      meshRef.current.rotation.z = clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <Float speed={speed * 1.2} floatIntensity={0.8}>
      <Box ref={meshRef} args={[0.7, 0.7, 0.7]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.95}
          roughness={0.05}
          wireframe={false}
          transparent
          opacity={0.6}
        />
      </Box>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />

      <pointLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />

      <pointLight position={[-5, -5, 5]} intensity={1.5} color="#22d3ee" />

      <pointLight position={[0, 5, -5]} intensity={1} color="#a78bfa" />

      {/* <FloatingSphere position={[-7, 2, -2]} color="#38bdf8" speed={1.5} /> */}

      <FloatingSphere position={[3.5, -1, -2]} color="#22d3ee" speed={1.2} />

      <FloatingSphere position={[0, -2.5, -3]} color="#67e8f9" speed={2} />

      <FloatingTorus position={[3, 2, -1]} color="#38bdf8" speed={1.8} />

      <FloatingTorus position={[-3, -1.5, -2]} color="#0ea5e9" speed={1.4} />

      <FloatingCube position={[-2, -2.5, -1]} color="#22d3ee" speed={1.6} />

      <FloatingCube position={[2, 2.5, -2]} color="#38bdf8" speed={1.3} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0);
        }}
      >
        <SceneContent />
      </Canvas>
    </Suspense>
  );
}
