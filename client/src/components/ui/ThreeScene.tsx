import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Torus, Sparkles, Text, Billboard } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function TechPlanet({ name, color, position, size = 0.4 }: { name: string; color: string; position: [number, number, number]; size?: number }) {
    return (
        <group position={position}>
            {/* Planet Sphere */}
            <mesh>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.3}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Glow/Atmosphere */}
            <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Label Below */}
            <Billboard position={[0, -size - 0.4, 0]}>
                <Text
                    fontSize={0.3}
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    color="white"
                    anchorX="center"
                    anchorY="top"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {name}
                </Text>
            </Billboard>
        </group>
    );
}

function OrbitingPlanets() {
    // Refs for the rotating groups
    const group1Ref = useRef<THREE.Group>(null!);
    const group2Ref = useRef<THREE.Group>(null!);

    useFrame((_, delta) => {
        // Rotate the groups continuously
        if (group1Ref.current) group1Ref.current.rotation.z += delta * 0.2;
        if (group2Ref.current) group2Ref.current.rotation.z += delta * 0.15;
    });

    return (
        <group>
            {/* Inner Ring Group - Matching LuminousCore Ring 1 */}
            {/* Rotation: [Math.PI / 3, 0, 0], Radius: 3.5 */}
            <group rotation={[Math.PI / 3, 0, 0]}>
                <group ref={group1Ref}>
                    <TechPlanet name="Website" color="#06b6d4" position={[3.5, 0, 0]} />
                    <TechPlanet name="App" color="#a855f7" position={[-3.5, 0, 0]} />
                </group>
            </group>

            {/* Outer Ring Group - Matching LuminousCore Ring 2 */}
            {/* Rotation: [-Math.PI / 3, Math.PI / 2, 0], Radius: 4.5 using Torus args but let's check visual placement */}
            <group rotation={[-Math.PI / 3, Math.PI / 2, 0]}>
                <group ref={group2Ref}>
                    <TechPlanet name="Automation" color="#10b981" position={[4.5, 0, 0]} size={0.5} />
                    <TechPlanet name="Digital Transformation" color="#FACC15" position={[-4.5, 0, 0]} size={0.6} />
                </group>
            </group>
        </group>
    );
}

const DevNexLogo = ({ rotation = [0, 0, 0] }: { rotation?: [number, number, number] }) => {
    const radius = 1.95; // Radius slightly larger than sphere (1.8)

    // Helper to place character on the sphere curve
    const CurveChar = ({ char, angle, color }: { char: string, angle: number, color: string }) => {
        const rad = angle * (Math.PI / 180);
        // Calculate position on the circle (x, z)
        const x = radius * Math.sin(rad);
        const z = radius * Math.cos(rad);

        return (
            <Text
                position={[x, 0, z]}
                rotation={[0, rad, 0]} // Rotate to face outward naturally
                fontSize={0.65}
                color={color}
                anchorX="center"
                anchorY="middle"
                renderOrder={100}
            >
                {char}
                <meshBasicMaterial attach="material" color={color} depthTest={false} toneMapped={false} />
            </Text>
        );
    };

    return (
        <group rotation={rotation}>
            {/* DEV - White */}
            <CurveChar char="D" angle={-37.5} color="#ffffff" />
            <CurveChar char="E" angle={-22.5} color="#ffffff" />
            <CurveChar char="V" angle={-7.5} color="#ffffff" />

            {/* NEX - Cyan -> Blue Gradient */}
            <CurveChar char="N" angle={7.5} color="#67e8f9" />
            <CurveChar char="E" angle={22.5} color="#60a5fa" />
            <CurveChar char="X" angle={37.5} color="#3b82f6" />
        </group>
    )
}

function LuminousCore() {
    return (
        <group>
            {/* DevNex Logo - Front (No offset needed, radius handled internally) */}
            <DevNexLogo />

            {/* DevNex Logo - Back */}
            <DevNexLogo rotation={[0, Math.PI, 0]} />

            {/* Circular Core Sphere - Solid Teal/Cyan as per image */}
            <mesh scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[1, 32, 32]} />
                {/* Solid Teal Core */}
                <meshStandardMaterial
                    color="#083344" // Deep Cyan/Slate
                    emissive="#06b6d4" // Cyan 500 glow
                    emissiveIntensity={0.8}
                    roughness={0.2}
                    metalness={0.5}
                />
            </mesh>

            {/* Outer Glow Halo */}
            <mesh scale={[2.1, 2.1, 2.1]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0.2}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Energy Rings Orbiting */}
            <group rotation={[Math.PI / 3, 0, 0]}>
                <Torus args={[3.5, 0.02, 16, 100]}>
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
                </Torus>
            </group>

            <group rotation={[-Math.PI / 3, Math.PI / 2, 0]}>
                <Torus args={[4.5, 0.02, 16, 100]}>
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
                </Torus>
            </group>
        </group>
    );
}

function LightBeams() {
    return (
        <group>
            {/* Main Beam - Centered spread */}
            <Sparkles
                count={150}
                scale={[12, 5, 5]}
                size={8}
                speed={2}
                opacity={0.4}
                color="#00E5FF"
                position={[0, 0, 0]}
            />
        </group>
    )
}

export function ThreeScene({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Canvas gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />

                <ambientLight intensity={0.2} />
                <pointLight position={[0, 0, 0]} intensity={2} color="#00E5FF" distance={10} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />

                <group position={[0, 0, 0]}>
                    <LuminousCore />
                    <LightBeams />
                    <OrbitingPlanets />
                </group>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 1.5}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>
        </div>
    );
}
