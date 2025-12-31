import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as random from 'three/examples/jsm/math/MeshSurfaceSampler'; // Not directly usable, using custom random generation

function Particles(props) {
    const ref = useRef();

    // Generate random positions using Float32Array
    const sphere = useMemo(() => {
        const count = 5000; // Low poly count for performance
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Simple random distribution in a sphere
            const r = 2.5 * Math.cbrt(Math.random()); // More density in center
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        // Subtle rotation
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;

        // Mouse Interaction (gentle sway based on mouse position)
        const mouseX = state.mouse.x * 0.2;
        const mouseY = state.mouse.y * 0.2;

        ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05;
        ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#4b5563" // Slate-gray accent
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

const BackgroundCanvas = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[-1] pointer-events-none"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#121212] to-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80 z-10" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Particles />
                </Suspense>
            </Canvas>
        </motion.div>
    );
};

export default BackgroundCanvas;
