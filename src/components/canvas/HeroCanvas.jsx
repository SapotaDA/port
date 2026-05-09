import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#915EFF"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Float>

          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
