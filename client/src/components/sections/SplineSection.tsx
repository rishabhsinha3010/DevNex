import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

export function SplineSection() {
    const splineRef = useRef<any>(null);

    function onLoad(splineApp: any) {
        splineRef.current = splineApp;

        // Force the camera to the user's requested coordinates
        if (splineApp._camera) {
            try {
                splineApp._camera.position.set(1131, 658.36, 1091.76);
                // Quaternion: x: -0.56, y: 0.56, z: 0.32
                splineApp._camera.quaternion.setFromEuler({
                    isEuler: true, _x: -0.56, _y: 0.56, _z: 0.32, _order: 'XYZ',
                    x: -0.56, y: 0.56, z: 0.32, order: 'XYZ'
                });
            } catch (e) {
                console.error("Camera override failed", e);
            }
        }
    }

    return (
        <section className="w-full h-screen relative bg-[#2c2d32]">
            <div className="absolute inset-0 w-full h-full">
                <Spline
                    scene="https://prod.spline.design/ykRy6EWK2Wa1nmym/scene.splinecode"
                    className="w-full h-full"
                    onLoad={onLoad}
                />
            </div>
        </section>
    );
}
