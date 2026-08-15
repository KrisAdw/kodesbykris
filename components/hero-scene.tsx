"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

/**
 * Subtle 3D backdrop for the hero. Low-poly wireframe shapes with a lime
 * accent — engineered, not gimmicky. Pauses rendering when scrolled out of
 * view and when the user prefers reduced motion.
 */
function ShapeField({ dark, reduced }: { dark: boolean; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const wire = dark ? "#f7f7f5" : "#111111";

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || reduced) return;
    g.rotation.y += delta * 0.06;
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.15;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, py, 0.04);
    g.position.x = THREE.MathUtils.lerp(g.position.x, px, 0.04);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[1.7, 0.4, -1.5]}>
          <icosahedronGeometry args={[2.1, 1]} />
          <meshBasicMaterial color={wire} wireframe transparent opacity={0.32} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.4}>
        <mesh position={[-2.5, 1.4, -3]} rotation={[0.5, 0.2, 0]}>
          <torusGeometry args={[1.05, 0.3, 12, 42]} />
          <meshBasicMaterial color={wire} wireframe transparent opacity={0.22} />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh position={[3.2, -1.7, -2.4]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#b8f23d" />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={1}>
        <mesh position={[-1.1, -1.5, -0.8]} rotation={[0, 0, 0.6]}>
          <boxGeometry args={[0.07, 1.7, 0.07]} />
          <meshBasicMaterial color={wire} transparent opacity={0.45} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.3}>
        <mesh position={[0.2, 2.2, -3.5]} rotation={[0, 0, -0.7]}>
          <boxGeometry args={[0.06, 1.2, 0.06]} />
          <meshBasicMaterial color={wire} transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroScene() {
  // Lazily read media queries on first render (client-only component).
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mqDark = window.matchMedia("(prefers-color-scheme: dark)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onDark = (e: MediaQueryListEvent) => setDark(e.matches);
    const onReduced = (e: MediaQueryListEvent) => setReduced(e.matches);
    mqDark.addEventListener("change", onDark);
    mqReduced.addEventListener("change", onReduced);

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "240px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      mqDark.removeEventListener("change", onDark);
      mqReduced.removeEventListener("change", onReduced);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop={inView && !reduced ? "always" : "demand"}
        camera={{ position: [0, 0, 9], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={[dark ? "#111111" : "#f7f7f5", 7, 17]} />
        <ShapeField dark={dark} reduced={reduced} />
      </Canvas>
    </div>
  );
}
