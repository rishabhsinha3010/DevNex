import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Torus, Sparkles, Text, Billboard, Image } from '@react-three/drei';
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
    // Refs for the planets themselves to update positions
    const planet1Ref = useRef<THREE.Group>(null!);
    const planet2Ref = useRef<THREE.Group>(null!);
    const planet3Ref = useRef<THREE.Group>(null!);
    const planet4Ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Horizontal Orbit (Website, App)
        // Radius 2.8, Speed 0.1
        const angle1 = time * 0.1 + Math.PI / 6;
        if (planet1Ref.current) {
            planet1Ref.current.position.x = 2.8 * Math.cos(angle1);
            planet1Ref.current.position.y = 2.8 * Math.sin(angle1);
        }
        if (planet2Ref.current) {
            planet2Ref.current.position.x = 2.8 * Math.cos(angle1 + Math.PI); // Opposite side
            planet2Ref.current.position.y = 2.8 * Math.sin(angle1 + Math.PI);
        }

        // Vertical Orbit (Automation, Labs) - Rotated plane simulated by swapping axes or using 3D calc
        // Rotating around X axis implies movements in Y and Z. 
        // Original code: groupRef2 rotation=[0, Math.PI/2, 0] then internal rotation Z.
        // Actually, previous code: groupRef2 (Rot Y=90) -> rotates Z. 
        // Rot Y=90 means X becomes Z. So it was orbiting in Y-Z plane?
        // Let's keep it visually interesting. Vertical orbit roughly in Y and Z?
        // Or simply Y and X but with different phase/inclination?
        // Let's stick to the previous visual: "Vertical" relative to the first one?
        // The previous one was groupRef1 (Z rotation) -> X-Y plane orbit.
        // groupRef2 was slightly different. 
        // Let's make the second pair orbit in X-Z plane (Horizontal flat) or Y-Z (Vertical depth)?
        // Previous: groupRef2 rotation [0, PI/2, 0]. Then inside, rotation Z.
        // If Y is up, rotation Z is in X-Y plane.
        // Rotate Y=90 -> X becomes Z. So it was Z-Y plane.

        const angle2 = -time * 0.15 - Math.PI / 6;
        if (planet3Ref.current) {
            // Z-Y plane orbit (Automation)
            planet3Ref.current.position.z = 4 * Math.cos(angle2);
            planet3Ref.current.position.y = 4 * Math.sin(angle2);
            planet3Ref.current.position.x = 0;
        }
        if (planet4Ref.current) {
            // Z-Y plane orbit (Labs) - Opposite
            planet4Ref.current.position.z = 4 * Math.cos(angle2 + Math.PI);
            planet4Ref.current.position.y = 4 * Math.sin(angle2 + Math.PI);
            planet4Ref.current.position.x = 0;
        }
    });

    return (
        <group>
            {/* Website & App (X-Y Plane Orbit) */}
            <group ref={planet1Ref}>
                <TechPlanet name="Website" color="#06b6d4" position={[0, 0, 0]} />
            </group>
            <group ref={planet2Ref}>
                <TechPlanet name="App" color="#a855f7" position={[0, 0, 0]} />
            </group>

            {/* Automation & Labs (Z-Y Plane Orbit - "Vertical" roughly) */}
            <group ref={planet3Ref}>
                <TechPlanet name="Automation" color="#10b981" position={[0, 0, 0]} size={0.5} />
            </group>
            <group ref={planet4Ref}>
                <TechPlanet name="Digital Transformation" color="#FACC15" position={[0, -4, 0]} size={0.6} />
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
