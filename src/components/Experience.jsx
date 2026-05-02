import { useScroll, Float, ContactShadows, Environment, PresentationControls, Html, Text, MeshReflectorMaterial, Sparkles, Stars, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { DesktopUI } from "./DesktopUI";

const Monitor = ({ ...props }) => {
  return (
    <group {...props}>
      {/* Premium Monitor Frame - Smaller Size */}
      <mesh>
        <boxGeometry args={[3.2, 2.0, 0.15]} />
        <meshStandardMaterial color="#000000" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Screen Plane - Smaller */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[3.0, 1.8]} />
        <meshStandardMaterial color="#000" emissive="#38bdf8" emissiveIntensity={0.05} />
      </mesh>

      {/* Interactive UI */}
      <Html
        transform
        distanceFactor={5}
        position={[0, 0, 0.1]}
        className="monitor-screen"
        portal={{ current: document.body }}
      >
        <DesktopUI />
      </Html>

      {/* Stand - More Compact */}
      <mesh position={[0, -1.2, -0.08]}>
        <cylinderGeometry args={[0.04, 0.06, 0.8, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0, -1.6, -0.08]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.015, 16, 100]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2} />
      </mesh>
      
      {/* Engaging LED Lights */}
      <mesh position={[1.65, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-1.65, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} />
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
            
            {/* Dynamic Floating Orbs */}
            <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                <mesh position={[10, 5, -5]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} wireframe />
                </mesh>
            </Float>
            
            <Float speed={3} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-8, 3, 3]}>
                    <tetrahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
                </mesh>
            </Float>
            
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
                <mesh position={[5, -2, 8]}>
                    <octahedronGeometry args={[0.4, 0]} />
                    <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.4} />
                </mesh>
            </Float>
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1
    
    // Enhanced cinematic camera movement with mouse influence
    const targetX = Math.sin(offset * Math.PI) * 2 + (mousePosition.x - window.innerWidth / 2) * 0.001;
    const targetY = 2 - offset * 1.5 + (mousePosition.y - window.innerHeight / 2) * 0.0005;
    const targetZ = 12 - offset * 9;

    state.camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05);
    
    // Dynamic look-at with slight offset based on scroll
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
          <Monitor position={[0, 0.3, -1.5]} />
          
          <TechOrb icon="JS" position={[-4, 2, -1]} color="#facc15" />
          <TechOrb icon="REACT" position={[4, 2.5, -2]} color="#38bdf8" />
          <TechOrb icon="NODE" position={[-3.5, -1, 0]} color="#4ade80" />
          <TechOrb icon="MDB" position={[3.5, -0.5, 1]} color="#10b981" />
          
          {/* Dynamic Tech Orbs */}
          <Float speed={4} rotationIntensity={3} floatIntensity={1.5}>
              <mesh position={[0, 4, -3]}>
                  <icosahedronGeometry args={[0.2, 1]} />
                  <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1} wireframe />
              </mesh>
          </Float>
          
          <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
              <mesh position={[-6, -3, 2]}>
                  <torusGeometry args={[0.3, 0.1, 8, 32]} />
                  <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.8} />
              </mesh>
          </Float>

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
