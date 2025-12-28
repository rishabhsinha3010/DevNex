import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Torus, Sparkles, Text, Billboard, Image } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Logo URLs
const LOGOS = {
    react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    node: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png",
    typescript: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
};

function TechPlanet({ name, iconUrl, position, size = 0.6 }: { name: string; iconUrl: string; position: [number, number, number]; size?: number }) {
    return (
        <group position={position}>
            {/* Logo Image */}
            <Billboard>
                <Image url={iconUrl} scale={[size, size]} transparent />
            </Billboard>

            {/* Label Below */}
            <Billboard position={[0, -size / 2 - 0.3, 0]}>
                <Text
                    fontSize={0.2}
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
    const groupRef1 = useRef<THREE.Group>(null!);
    const groupRef2 = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef1.current.rotation.z = time * 0.1 + Math.PI / 6;
        groupRef2.current.rotation.z = -time * 0.15 - Math.PI / 6;
    });

    return (
        <group>
            <group ref={groupRef1}>
                {/* React & React Native share the logo in this context or use generic if preferred. Using React logo for both for now implies ecosystem. */}
                <TechPlanet name="React" iconUrl={LOGOS.react} position={[2.8, 0, 0]} />
                <TechPlanet name="React Native" iconUrl={LOGOS.react} position={[-2.8, 0, 0]} />
            </group>

            <group ref={groupRef2} rotation={[0, Math.PI / 2, 0]}>
                <group rotation={[0, Math.PI / 2, 0]}>
                    <TechPlanet name="Node.js" iconUrl={LOGOS.node} position={[0, 4, 0]} size={0.8} />
                    <TechPlanet name="TypeScript" iconUrl={LOGOS.typescript} position={[0, -4, 0]} size={0.6} />
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
