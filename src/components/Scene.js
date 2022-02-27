import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import Mill from "./Mill";

export default function Scene() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Mill />
      </PresentationControls>

      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.0, 0]}
        opacity={0.75}
        width={10}
        height={10}
        blur={2.6}
        far={2}
      />
      <Environment preset="city" />
    </Canvas>
  );
}
