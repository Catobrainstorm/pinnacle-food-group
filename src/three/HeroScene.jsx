import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Abstract hero centerpiece: a slowly rotating, mustard-gold, organically
 * distorted faceted form (reads as "grain / premium ingredient" rather than
 * a literal cow or logo), rim-lit with a touch of forest green to tie in the
 * full brand palette, plus a soft particle field. Kept low-poly and capped
 * particle count for performance on mobile.
 */
function MustardForm() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={mesh} scale={1.7} position={[1.1, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#c9992f"
          emissive="#7a5416"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.6}
          flatShading
          distort={0.25}
          speed={1.1}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 250 }) {
  const points = useRef(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#e3b95c"
        size={0.02}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 4, 5]} intensity={2.2} color="#fff2d6" />
      <directionalLight
        position={[-4, -1, -3]}
        intensity={0.7}
        color="#2f5c49"
      />
      <pointLight position={[1, 3, 4]} intensity={1.2} color="#ffffff" />
      <Suspense fallback={null}>
        <MustardForm />
        <Particles />
      </Suspense>
    </Canvas>
  );
}

// Guard against WebGL-unavailable environments (some in-app browsers / very
// old devices) , Home.jsx wraps this in an error boundary + feature check.
export function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

THREE.ColorManagement.enabled = true;
