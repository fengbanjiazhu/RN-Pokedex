import React from "react";
import { Canvas } from "@react-three/fiber";
import KnotGeo from "./KnotGeo";

function ThreeDCanvas() {
  return (
    <Canvas style={{ width: 400, height: 400 }}>
      <ambientLight />
      <pointLight position={[1, 0, 1]} intensity={1} color="#fff" distance={100} />

      <mesh position={[0, 1.5, 0]}>
        <coneGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <KnotGeo scale={0.05} position={[0, -1, 0]} />
    </Canvas>
  );
}

export default ThreeDCanvas;
