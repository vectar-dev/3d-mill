import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

export default function Mill() {
  const gltf = useLoader(GLTFLoader, "/assets/mill.glb");
  const ref = useRef();
  const propeller = gltf.scene.children.find(
    (node) => node.name == "propeller"
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = 0.02 * Math.PI + Math.cos(t / 4) / 8;
    ref.current.rotation.y = 0.4 * Math.PI + Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (0.2 + Math.sin(t / 1.5)) / 10;
    propeller.rotation.x = t * 1;
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive object={gltf.scene} />;
    </group>
  );
}
