import { useScroll, Float, ContactShadows, Environment, PresentationControls, Html, Text, MeshReflectorMaterial, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { DesktopUI } from "./DesktopUI";

const Monitor = ({ ...props }) => {
  return (
    <group {...props}>
      {/* Premium Monitor Frame */}
      <mesh>
        <boxGeometry args={[4.4, 2.8, 0.2]} />
        <meshStandardMaterial color="#020617" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Screen Plane */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[4.2, 2.6]} />
        <meshStandardMaterial color="#000" emissive="#38bdf8" emissiveIntensity={0.05} />
      </mesh>

      {/* Interactive UI */}
      <Html
        transform
        distanceFactor={6}
        position={[0, 0, 0.1]}
        className="monitor-screen"
        portal={{ current: document.body }} // Helps with z-index and interaction
      >
        <DesktopUI />
      </Html>

      {/* Stand */}
      <mesh position={[0, -1.8, -0.1]}>
        <cylinderGeometry args={[0.05, 0.08, 1, 32]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0, -2.3, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const BackgroundEffects = () => {
    return (
        <group>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={[15, 15, 15]} size={2} speed={0.4} color="#38bdf8" />
            <gridHelper args={[100, 40, "#1e293b", "#0f172a"]} position={[0, -4, 0]} />
        </group>
    );
}

const TechOrb = ({ icon, position, color }) => (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <mesh position={position}>
            <icosahedronGeometry args={[0.3, 1]} />
            <meshStandardMaterial color={color} wireframe />
            <Text
                position={[0, 0, 0]}
                fontSize={0.2}
                color="white"
                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
            >
                {icon}
            </Text>
        </mesh>
    </Float>
)

export const Experience = () => {
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1
    
    // Smooth cinematic camera movement
    // We use a curve-like path
    const targetX = Math.sin(offset * Math.PI) * 2;
    const targetY = 2 - offset * 1.5;
    const targetZ = 12 - offset * 9;

    state.camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05);
    
    // Always look towards the monitor center but with a slight offset based on scroll
    const lookAtPos = new THREE.Vector3(0, 0.5, -2);
    state.camera.lookAt(lookAtPos);
  });

  return (
    <>
      <Environment preset="night" />
      <BackgroundEffects />
      
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#38bdf8" />

      <PresentationControls
        global={false}
        cursor={true}
        snap={{ mass: 4, tension: 1500 }}
        config={{ mass: 2, tension: 500 }}
        rotation={[0, 0, 0]}
        polar={[-0.1, 0.1]}
        azimuth={[-0.1, 0.1]}
      >
        <group ref={groupRef}>
          <Monitor position={[0, 0.5, -2]} />
          
          <TechOrb icon="JS" position={[-4, 2, -1]} color="#facc15" />
          <TechOrb icon="REACT" position={[4, 2.5, -2]} color="#38bdf8" />
          <TechOrb icon="NODE" position={[-3.5, -1, 0]} color="#4ade80" />
          <TechOrb icon="MDB" position={[3.5, -0.5, 1]} color="#10b981" />

          {/* Reflective Ground */}
          <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={20}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
            />
          </mesh>
        </group>
      </PresentationControls>

      <ContactShadows position={[0, -2.4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
    </>
  );
};
