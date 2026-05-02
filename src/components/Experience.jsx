import { useScroll, Float, ContactShadows, Environment, PresentationControls, Html, Text, MeshReflectorMaterial, Sparkles, Stars, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { DesktopUI } from "./DesktopUI";
import GamingCharacter from "./GamingCharacter";

const Monitor = ({ ...props }) => {
  return (
    <group {...props}>
      {/* Premium Monitor Frame - Cyberpunk Enhanced */}
      <mesh>
        <boxGeometry args={[3.2, 2.0, 0.15]} />
        <meshStandardMaterial color="#0a0a0f" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Screen Frame Glow */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[3.1, 1.9, 0.01]} />
        <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={0.2} transparent opacity={0.8} />
      </mesh>
      
      {/* Screen Plane */}
      <mesh position={[0, 0, 0.09]}>
        <planeGeometry args={[3.0, 1.8]} />
        <meshStandardMaterial color="#000" emissive="#8338ec" emissiveIntensity={0.05} />
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

      {/* Cyberpunk Stand */}
      <mesh position={[0, -1.2, -0.08]}>
        <cylinderGeometry args={[0.04, 0.06, 0.8, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.6, -0.08]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.015, 16, 100]} />
        <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={2} />
      </mesh>
      
      {/* Enhanced LED Lights */}
      <mesh position={[1.65, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[-1.65, 0, 0]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color="#3a86ff" emissive="#3a86ff" emissiveIntensity={1.5} />
      </mesh>
      
      {/* Cyberpunk Corner Accents */}
      <mesh position={[1.6, 0.9, 0]}>
        <coneGeometry args={[0.05, 0.1, 4]} />
        <meshStandardMaterial color="#8338ec" emissive="#8338ec" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-1.6, -0.9, 0]}>
        <coneGeometry args={[0.05, 0.1, 4]} />
        <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const BackgroundEffects = () => {
    return (
        <group>
            <Stars radius={100} depth={50} count={8000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={200} scale={[20, 20, 20]} size={3} speed={0.6} color="#ff006e" />
            <Sparkles count={150} scale={[15, 15, 15]} size={2} speed={0.4} color="#8338ec" />
            <Sparkles count={100} scale={[10, 10, 10]} size={1.5} speed={0.3} color="#3a86ff" />
            
            {/* Cyberpunk Grid Floor */}
            <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial 
                    color="#0a0a0f" 
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
            
            {/* Floating Holographic Panels */}
            <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                <mesh position={[8, 4, -5]}>
                    <boxGeometry args={[2, 3, 0.1]} />
                    <meshStandardMaterial 
                        color="#ff006e" 
                        emissive="#ff006e" 
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.8}
                        wireframe
                    />
                </mesh>
            </Float>
            
            <Float speed={3} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-8, 3, 3]}>
                    <tetrahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial 
                        color="#8338ec" 
                        emissive="#8338ec" 
                        emissiveIntensity={0.4}
                        wireframe
                    />
                </mesh>
            </Float>
            
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
                <mesh position={[5, -2, 8]}>
                    <octahedronGeometry args={[0.8, 0]} />
                    <meshStandardMaterial 
                        color="#3a86ff" 
                        emissive="#3a86ff" 
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            </Float>
            
            {/* Cyberpunk Data Streams */}
            <Float speed={4} rotationIntensity={3} floatIntensity={1.5}>
                <mesh position={[0, 6, -3]}>
                    <icosahedronGeometry args={[0.3, 1]} />
                    <meshStandardMaterial 
                        color="#ff006e" 
                        emissive="#ff006e" 
                        emissiveIntensity={1.5}
                        wireframe
                    />
                </mesh>
            </Float>
            
            <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
                <mesh position={[-6, -3, 2]}>
                    <torusGeometry args={[0.5, 0.1, 8, 32]} />
                    <meshStandardMaterial 
                        color="#8338ec" 
                        emissive="#8338ec" 
                        emissiveIntensity={1}
                        wireframe
                    />
                </mesh>
            </Float>
            
            {/* Rotating Cyber Rings */}
            <mesh position={[0, 2, -6]}>
                <ringGeometry args={[1, 1.2, 32]} />
                <meshStandardMaterial 
                    color="#3a86ff" 
                    emissive="#3a86ff" 
                    emissiveIntensity={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>
            
            <mesh position={[4, -1, -4]}>
                <ringGeometry args={[0.8, 1, 16]} />
                <meshStandardMaterial 
                    color="#ff006e" 
                    emissive="#ff006e" 
                    emissiveIntensity={0.6}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

const TechOrb = ({ icon, position, color }) => (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <group position={position}>
            <mesh>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} wireframe />
            </mesh>
            <Text
                position={[0, 0, 0.2]}
                fontSize={0.15}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                font="/fonts/orbitron.woff"
            >
                {icon}
            </Text>
            {/* Orbiting Ring */}
            <mesh position={[0, 0, 0]}>
                <torusGeometry args={[0.5, 0.02, 16, 100]} />
                <meshStandardMaterial 
                    color={color} 
                    emissive={color} 
                    emissiveIntensity={1}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </group>
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
          
          {/* Gaming Character */}
          <GamingCharacter position={[3, 0.3, -1]} />
          
          <TechOrb icon="JS" position={[-4, 2, -1]} color="#facc15" />
          <TechOrb icon="REACT" position={[4, 2.5, -2]} color="#ff006e" />
          <TechOrb icon="NODE" position={[-3.5, -1, 0]} color="#4ade80" />
          <TechOrb icon="MDB" position={[3.5, -0.5, 1]} color="#3a86ff" />
          
          {/* Enhanced Dynamic Tech Orbs */}
          <Float speed={4} rotationIntensity={3} floatIntensity={1.5}>
              <group position={[0, 4, -3]}>
                  <mesh>
                      <icosahedronGeometry args={[0.2, 1]} />
                      <meshStandardMaterial color="#8338ec" emissive="#8338ec" emissiveIntensity={1.5} wireframe />
                  </mesh>
                  <mesh position={[0, 0, 0]}>
                      <torusGeometry args={[0.4, 0.01, 16, 100]} />
                      <meshStandardMaterial 
                          color="#8338ec" 
                          emissive="#8338ec" 
                          emissiveIntensity={1.2}
                          transparent
                          opacity={0.8}
                      />
                  </mesh>
              </group>
          </Float>
          
          <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
              <group position={[-6, -3, 2]}>
                  <mesh>
                      <torusGeometry args={[0.3, 0.1, 8, 32]} />
                      <meshStandardMaterial color="#ff006e" emissive="#ff006e" emissiveIntensity={1} wireframe />
                  </mesh>
                  <mesh position={[0, 0, 0]}>
                      <ringGeometry args={[0.5, 0.6, 16]} />
                      <meshStandardMaterial 
                          color="#ff006e" 
                          emissive="#ff006e" 
                          emissiveIntensity={0.8}
                          side={THREE.DoubleSide}
                      />
                  </mesh>
              </group>
          </Float>
          
          {/* Floating Data Cubes */}
          <Float speed={3} rotationIntensity={2} floatIntensity={1}>
              <mesh position={[2, 3, 1]}>
                  <boxGeometry args={[0.3, 0.3, 0.3]} />
                  <meshStandardMaterial 
                      color="#3a86ff" 
                      emissive="#3a86ff" 
                      emissiveIntensity={0.8}
                      wireframe
                  />
              </mesh>
          </Float>
          
          <Float speed={2.5} rotationIntensity={1.5} floatIntensity={0.7}>
              <mesh position={[-3, 1, 2]}>
                  <octahedronGeometry args={[0.25, 0]} />
                  <meshStandardMaterial 
                      color="#ff006e" 
                      emissive="#ff006e" 
                      emissiveIntensity={1}
                      transparent
                      opacity={0.9}
                  />
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
